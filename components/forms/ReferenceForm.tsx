"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, ImagePlus, Loader2, X } from "lucide-react";
import {
  referenceSchema,
  REFERENCE_PHOTO_MAX_BYTES,
  REFERENCE_PHOTO_TYPES,
  type ReferenceFormValues,
} from "@/lib/validations/reference";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ReferenceForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReferenceFormValues>({
    resolver: zodResolver(referenceSchema),
  });

  const removePhoto = () => {
    setPhoto(null);
    setPhotoError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      removePhoto();
      return;
    }
    if (!REFERENCE_PHOTO_TYPES.includes(file.type)) {
      setPhotoError("Podporované formáty jsou JPG, PNG nebo WEBP.");
      setPhoto(null);
      e.target.value = "";
      return;
    }
    if (file.size > REFERENCE_PHOTO_MAX_BYTES) {
      setPhotoError("Fotka je příliš velká, max. 4 MB.");
      setPhoto(null);
      e.target.value = "";
      return;
    }
    setPhotoError(null);
    setPhoto(file);
  };

  const onSubmit = async (values: ReferenceFormValues) => {
    setState("loading");
    try {
      const formData = new FormData();
      formData.set("name", values.name);
      formData.set("company", values.company ?? "");
      formData.set("quote", values.quote);
      formData.set("consent", String(values.consent));
      formData.set("website", values.website ?? "");
      if (photo) formData.set("photo", photo);

      const res = await fetch("/api/reference", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Odeslání se nezdařilo.");

      setState("success");
      reset();
      removePhoto();
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full border border-offwhite/20 bg-offwhite/[0.03] px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/30 focus:border-red focus:outline-none";
  const labelClass = "mb-1.5 block text-xs uppercase tracking-[0.14em] text-offwhite/50";

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
          <label htmlFor="name" className={labelClass}>
            Jméno *
          </label>
          <input id="name" type="text" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Firma (nepovinné)
          </label>
          <input id="company" type="text" className={inputClass} {...register("company")} />
        </div>
      </div>

      <div>
        <label htmlFor="quote" className={labelClass}>
          Vaše zkušenost *
        </label>
        <textarea
          id="quote"
          rows={5}
          className={inputClass}
          placeholder="Co jsme pro vás dělali a jak se vám s námi spolupracovalo…"
          {...register("quote")}
        />
        {errors.quote && <p className="mt-1.5 text-xs text-red">{errors.quote.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Fotka práce (nepovinné)</label>
        {!photo ? (
          <label
            htmlFor="photo"
            className="flex cursor-pointer items-center gap-2 border border-dashed border-offwhite/20 px-4 py-3 text-sm text-offwhite/50 transition-colors hover:border-red hover:text-offwhite"
          >
            <ImagePlus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            Vybrat fotku (JPG, PNG, WEBP, max 4 MB)
          </label>
        ) : (
          <div className="flex items-center justify-between border border-offwhite/20 px-4 py-3 text-sm text-offwhite">
            <span className="truncate">{photo.name}</span>
            <button type="button" onClick={removePhoto} aria-label="Odebrat fotku">
              <X className="h-4 w-4 text-offwhite/50 hover:text-red" strokeWidth={1.5} />
            </button>
          </div>
        )}
        <input
          ref={fileInputRef}
          id="photo"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handlePhotoChange}
          className="hidden"
        />
        {photoError && <p className="mt-1.5 text-xs text-red">{photoError}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-red"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-offwhite/50">
          Souhlasím se zveřejněním jména, textu a případné fotky na webu Schovinox. *
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark disabled:opacity-60"
      >
        {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />}
        {state === "loading" ? "Odesílám…" : "Odeslat referenci"}
      </button>

      {state === "success" && (
        <p className="flex items-center gap-2 text-sm text-offwhite">
          <CheckCircle2 className="h-4 w-4 text-red" strokeWidth={1.5} />
          Děkujeme! Referenci si projdeme a brzy ji přidáme na web.
        </p>
      )}
      {state === "error" && (
        <p className="flex items-center gap-2 text-sm text-red">
          <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
          Něco se nepovedlo. Zkuste to prosím znovu, nebo nám referenci pošlete e-mailem.
        </p>
      )}
    </form>
  );
}
