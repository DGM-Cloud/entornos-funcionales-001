import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Registro fotográfico de obra de Entornos Funcionales: acabados, climatización, protección contra incendios y estructura.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro
        title="Registro fotográfico de obra."
        lede="Fotografías de campo de acabados, climatización, protección contra incendios y estructura. Cada imagen se identifica por lo que se ve."
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <WorkGrid />
      </div>
    </>
  );
}
