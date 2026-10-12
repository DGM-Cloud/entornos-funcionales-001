"use client";

import { FormEvent, useState } from "react";
import { company, services } from "@/lib/site";

const fieldClass = "mt-2 min-h-12 w-full border border-line bg-white px-3 text-base text-ink";

export function ContactForm() {
  const [link, setLink] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nombre") ?? "").trim();
    const organization = String(data.get("empresa") ?? "").trim();
    const phone = String(data.get("telefono") ?? "").trim();
    const service = String(data.get("servicio") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();

    const text = [
      "Hola, escribo desde la web de Entornos Funcionales.",
      `Nombre: ${name}`,
      organization ? `Empresa: ${organization}` : null,
      `Teléfono: ${phone}`,
      `Servicio: ${service}`,
      `Consulta: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
    setLink(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-describedby="ayuda-formulario">
      <p id="ayuda-formulario" className="leading-7 text-muted">
        Nombre, teléfono, servicio y consulta son obligatorios. La empresa es opcional. Al enviar, se abre WhatsApp con el mensaje listo para el {company.phones[2].label}.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" autoComplete="name" required />
        <Field label="Empresa o institución" name="empresa" autoComplete="organization" />
        <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" required />
        <label className="block">
          <span className="text-sm font-semibold">Servicio</span>
          <select name="servicio" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Seleccione un servicio
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Varios servicios">Varios servicios</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold">Consulta</span>
        <textarea
          name="mensaje"
          required
          rows={5}
          className={`${fieldClass} resize-y py-3`}
          placeholder="Tipo de espacio, distrito y qué hay que resolver."
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-[#123875]"
      >
        Solicitar propuesta
      </button>
      {link ? (
        <p className="leading-7" role="status">
          Si WhatsApp no se abrió,{" "}
          <a href={link} className="font-semibold underline" target="_blank" rel="noreferrer">
            continúe desde aquí
          </a>
          .
        </p>
      ) : (
        <p className="leading-7 text-muted">
          También puede escribir a{" "}
          <a className="font-semibold underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">
        {label}
        {required ? null : <span className="font-normal text-muted"> (opcional)</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={fieldClass} />
    </label>
  );
}
