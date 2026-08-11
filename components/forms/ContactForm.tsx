"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { INQUIRY_TYPES } from "@/lib/constants";

type ContactFormProps = {
  defaultInquiryType?: (typeof INQUIRY_TYPES)[number]["value"];
  /** Předvyplněná zpráva — např. konkrétní rozměr Lorny zvolený v ceníku. */
  defaultMessage?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  defaultInquiryType,
  defaultMessage,
}: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: defaultInquiryType ?? "jine",
      message: defaultMessage ?? "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Odeslání se nezdařilo.");

      setState("success");
      reset({ inquiryType: defaultInquiryType ?? "jine" } as ContactFormValues);
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full border border-ink/15 bg-offwhite px-4 py-3 text-sm text-ink placeholder:text-gray-500/70 focus:border-red focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — skryté pole proti spamu, lidský návštěvník ho nikdy nevyplní */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Nevyplňujte toto pole</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-gray-500">
            Jméno *
          </label>
          <input id="name" type="text" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-gray-500">
            E-mail *
          </label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className="mt-1.5 text-xs text-red">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-gray-500">
            Telefon
          </label>
          <input id="phone" type="tel" className={inputClass} {...register("phone")} />
        </div>

        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-gray-500">
            Typ poptávky *
          </label>
          <select id="inquiryType" className={inputClass} {...register("inquiryType")}>
            {INQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-gray-500">
          Zpráva *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          placeholder="Popište prosím rozsah zakázky, rozměry nebo materiál…"
          {...register("message")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-red"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-gray-500">
          Souhlasím se zpracováním osobních údajů za účelem vyřízení mé poptávky. *
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark disabled:opacity-60"
      >
        {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />}
        {state === "loading" ? "Odesílám…" : "Odeslat poptávku"}
      </button>

      {state === "success" && (
        <p className="flex items-center gap-2 text-sm text-ink">
          <CheckCircle2 className="h-4 w-4 text-red" strokeWidth={1.5} />
          Děkujeme za poptávku, ozveme se do 24 hodin.
        </p>
      )}
      {state === "error" && (
        <p className="flex items-center gap-2 text-sm text-red">
          <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
          Něco se nepovedlo. Zkuste to prosím znovu nebo nám zavolejte.
        </p>
      )}
    </form>
  );
}
