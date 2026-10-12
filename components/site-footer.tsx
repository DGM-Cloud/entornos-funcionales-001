import Image from "next/image";
import Link from "next/link";
import { company, nav, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src="/media/logo.png"
            alt="Entornos Funcionales"
            width={347}
            height={182}
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/75">
            Reconstrucción, acabados, climatización, protección contra incendios y electricidad industrial en Lima.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a href={company.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:underline">
                Instagram
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
            <li>
              <a href={company.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:underline">
                Facebook
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
            <li>
              <a href={company.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:underline">
                LinkedIn
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm font-semibold">Mapa</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-semibold">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/servicios#${service.id}`} className="hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-semibold">Contacto</p>
          <address className="mt-4 text-sm leading-6 not-italic">
            {company.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-4 text-sm">
            {company.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="inline-flex min-h-10 items-center hover:underline">
                  {phone.label}
                  {phone.href.endsWith(company.whatsapp) ? " · WhatsApp" : ""}
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${company.email}`} className="text-sm underline underline-offset-4">
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-white/70 sm:flex-row sm:justify-between">
          <p>© 2026 {company.legal}</p>
          <ul className="flex gap-4">
            <li>
              <a href={company.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
            <li>
              <a href={company.facebook} target="_blank" rel="noreferrer" className="hover:underline">
                Facebook
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
            <li>
              <a href={company.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
                <span className="sr-only">, se abre en una pestaña nueva</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
