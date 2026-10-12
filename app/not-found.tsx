import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export default function NotFound() {
  return (
    <div className="pb-20">
      <PageIntro
        index="404"
        title="No encontramos esta página."
        lede="El enlace no corresponde a ninguna sección del sitio."
      />
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <Link href="/" className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
