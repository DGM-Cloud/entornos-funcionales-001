import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { company, method, services, works, worksForService } from "@/lib/site";

const hero = works[0];
const field = [works[2], works[6], works[9]];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <h1 className="max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-tight font-semibold tracking-[-0.03em] text-balance">
              Reconstrucción, acabados y sistemas para edificios en Lima.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Acabados, climatización, protección contra incendios y electricidad industrial. Para empresas, instituciones del Estado y vivienda.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white hover:bg-[#123875]"
              >
                Solicitar propuesta
              </Link>
              <Link
                href="/servicios"
                className="inline-flex min-h-11 items-center justify-center border border-ink px-5 text-sm font-semibold hover:bg-sand"
              >
                Ver servicios
              </Link>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] bg-sand">
              <Image
                src={hero.src}
                alt={hero.caption}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted">{hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">Servicios</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          Cada línea se contrata sola o junto con las demás. El alcance se escribe antes de entrar a obra.
        </p>
        <ul className="mt-8 border border-line bg-white">
          {services.map((service) => {
            const photo = worksForService(service.id)[0];
            return (
              <li key={service.id} className="border-b border-line last:border-b-0">
                <Link href={`/servicios#${service.id}`} className="grid md:grid-cols-5">
                  {photo ? (
                    <div className="relative aspect-[16/10] bg-sand md:col-span-2 md:aspect-auto md:min-h-52">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className={`flex flex-col justify-center p-6 ${photo ? "md:col-span-3" : "md:col-span-5"}`}>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{service.summary}</p>
                    <span className="mt-5 text-sm font-semibold underline underline-offset-4">Ver alcance</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Registro de obra</h2>
            <Link href="/proyectos" className="text-sm font-semibold underline underline-offset-4">
              Ver el registro
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {field.map((work) => (
              <li key={work.src}>
                <Link href="/proyectos" className="block">
                  <div className="relative aspect-[4/3] bg-paper">
                    <Image
                      src={work.src}
                      alt={work.caption}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 font-semibold">{work.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{work.caption}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">Cómo se trabaja</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((step) => (
            <li key={step.index} className="border-t border-ink pt-4">
              <p className="text-sm font-semibold">{step.index}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line" id="contacto">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Contacto</h2>
            <p className="mt-4 leading-7 text-muted">
              Escriba el tipo de espacio, el distrito y qué hay que resolver. La consulta se envía por WhatsApp.
            </p>
            <p className="mt-6 font-semibold leading-7">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <ul className="mt-4">
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="inline-flex min-h-11 items-center hover:underline">
                    {phone.label}
                    {phone.href.endsWith(company.whatsapp) ? " · WhatsApp" : ""}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${company.email}`} className="inline-flex min-h-11 items-center underline underline-offset-4">
              {company.email}
            </a>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
