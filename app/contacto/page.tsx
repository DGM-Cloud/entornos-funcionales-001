import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escriba a Entornos Funcionales en Rímac, Lima. Teléfonos, correo y consulta por WhatsApp.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        title="Solicite una propuesta."
        lede="Indique el tipo de local, el distrito y la línea que necesita. Respondemos por WhatsApp o por correo."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
        <aside className="lg:col-span-4">
          <h2 className="text-sm font-semibold">Sede</h2>
          <p className="mt-3 text-lg font-semibold leading-7">
            {company.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a href={company.maps} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
            Abrir mapa
          </a>
          <h2 className="mt-8 text-sm font-semibold">Teléfonos</h2>
          <ul className="mt-2">
            {company.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="inline-flex min-h-11 items-center hover:underline">
                  {phone.label}
                  {phone.href.endsWith(company.whatsapp) ? " · WhatsApp" : ""}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-sm font-semibold">Correo</h2>
          <a href={`mailto:${company.email}`} className="mt-2 inline-flex min-h-11 items-center underline underline-offset-4">
            {company.email}
          </a>
        </aside>
        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">La consulta</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
