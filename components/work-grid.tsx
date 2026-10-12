"use client";

import Image from "next/image";
import { useState } from "react";
import { works, type WorkCategory } from "@/lib/site";

const filters: Array<"Todos" | WorkCategory> = [
  "Todos",
  "Acabados",
  "Climatización",
  "Incendios",
  "Instalaciones",
  "Estructura",
];

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = works.filter((work) => filter === "Todos" || work.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar obras">
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`min-h-11 px-4 text-sm font-semibold ${selected ? "bg-ink text-paper" : "bg-sand text-ink hover:bg-line"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-muted">
        {visible.length} {visible.length === 1 ? "fotografía" : "fotografías"}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-lg">No hay fotografías en esta categoría.</p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((work) => (
            <li key={work.src}>
              <figure>
                <div className="relative aspect-[4/3] bg-sand">
                  <Image
                    src={work.src}
                    alt={work.caption}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <h2 className="font-semibold">{work.title}</h2>
                  <p className="mt-1 text-sm text-muted">{work.category}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{work.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
