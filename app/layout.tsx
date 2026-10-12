import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";
import { company } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entornosfuncionales.com"),
  title: {
    default: "Entornos Funcionales · Reconstrucción y sistemas",
    template: "%s · Entornos Funcionales",
  },
  description:
    "Reconstrucción, acabados, climatización, protección contra incendios y electricidad industrial en Lima. Para empresas, instituciones y proyectos residenciales.",
  icons: { icon: "/media/favicon.png" },
  openGraph: {
    title: "Entornos Funcionales",
    description:
      "Reconstrucción, acabados y sistemas para espacios que tienen que operar.",
    locale: "es_PE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.legal,
  url: "https://www.entornosfuncionales.com",
  email: company.email,
  telephone: company.phones.map((phone) => phone.label),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mz. E Lt. 40, Comité 5, Flor de Amancaes",
    addressLocality: "Rímac",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  areaServed: "Lima",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} h-full`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
