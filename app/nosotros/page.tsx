import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { company, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Entornos Funcionales: reconstrucción, acabados y sistemas para espacios funcionales, seguros y bien terminados en Lima.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageIntro
        title="Reconstrucción, acabados y los sistemas del edificio."
        lede="De la pintura y la carpintería a la electricidad, el aire acondicionado y la protección contra incendios."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 lg:py-20">
        <div className="space-y-6 text-lg leading-8 md:col-span-7">
          <p>
            El equipo está formado por profesionales dedicados a un resultado de calidad, con estándares de seguridad y eficiencia. En cada proyecto el objetivo es un espacio funcional, cómodo y estéticamente cuidado, sea residencial, comercial o industrial.
          </p>
          <p>
            El encargo puede venir de un hogar, de una empresa privada o de una institución del Estado. La respuesta se adapta al requerimiento: mantenimiento, reconstrucción o acabado, con el alcance escrito antes de entrar a obra.
          </p>
        </div>
        <aside className="border border-line p-6 md:col-span-4 md:col-start-9">
          <h2 className="text-sm font-semibold">Sede</h2>
          <p className="mt-3 text-lg font-semibold leading-7">
            {company.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a href={company.maps} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
            Ver en el mapa
          </a>
        </aside>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <article className="border-b border-line p-8 md:border-r md:border-b-0 md:p-10">
            <h2 className="text-sm font-semibold">Misión</h2>
            <p className="mt-4 text-xl leading-snug font-semibold">
              Ofrecer servicios de calidad en mantenimiento, reconstrucción y acabados para crear espacios funcionales, seguros y estéticamente armoniosos.
            </p>
          </article>
          <article className="bg-sand p-8 md:p-10">
            <h2 className="text-sm font-semibold">Visión</h2>
            <p className="mt-4 text-xl leading-snug font-semibold">
              Ser la empresa de referencia en reconstrucción y acabados, con compromiso de calidad y foco en la satisfacción de quien encarga la obra.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">A quién acompañamos</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => (
            <li key={sector.title} className="border border-line p-6">
              <h3 className="text-xl font-semibold">{sector.title}</h3>
              <p className="mt-3 leading-7 text-muted">{sector.text}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          className="mt-10 inline-flex min-h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-[#123875]"
        >
          Solicitar propuesta
        </Link>
      </section>
    </>
  );
}
