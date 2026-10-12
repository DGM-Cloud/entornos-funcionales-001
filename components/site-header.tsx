"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/media/logo.png"
            alt="Entornos Funcionales, Reconstrucción y Acabados"
            width={347}
            height={182}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium ${active ? "text-navy" : "text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="hidden min-h-11 items-center bg-navy px-4 text-sm font-semibold text-white hover:bg-[#123875] lg:inline-flex"
        >
          Solicitar propuesta
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="menu-movil" className="border-t border-line px-5 py-3 lg:hidden" aria-label="Móvil">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block border-b border-line py-4 text-lg font-medium ${active ? "text-navy" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="mt-4 flex min-h-11 items-center justify-center bg-navy font-semibold text-white"
          >
            Solicitar propuesta
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
