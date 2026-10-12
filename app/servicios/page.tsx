import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { services, worksForService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Acabados, climatización, protección contra incendios y electricidad industrial. Alcance de Entornos Funcionales en Lima.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        title="Cuatro líneas de trabajo."
        lede="Cada línea se contrata sola o coordinada con las demás. El alcance se escribe antes de entrar a obra."
      />

      {services.map((service) => {
        const photos = worksForService(service.id);
        return (
          <section key={service.id} id={service.id} className="scroll-mt-28 border-b border-line">
            <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-semibold tracking-[-0.03em]">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-muted">{service.summary}</p>
                  <p className="mt-4 text-sm leading-6">{service.audience}</p>
                </div>
                <ul className="lg:col-span-6 lg:col-start-7">
                  {service.items.map((item) => (
                    <li key={item} className="border-t border-line py-3 leading-7 last:border-b">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {photos.length > 0 ? (
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo) => (
                    <li key={photo.src}>
                      <figure>
                        <div className="relative aspect-[4/3] bg-sand">
                          <Image
                            src={photo.src}
                            alt={photo.caption}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-3 text-sm leading-6 text-muted">{photo.caption}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        );
      })}

      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <p className="max-w-xl text-2xl font-semibold tracking-[-0.03em]">
            Si el encargo cruza dos líneas, se cotiza como una sola obra.
          </p>
          <Link
            href="/contacto"
            className="inline-flex min-h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-[#123875]"
          >
            Solicitar propuesta
          </Link>
        </div>
      </section>
    </>
  );
}
