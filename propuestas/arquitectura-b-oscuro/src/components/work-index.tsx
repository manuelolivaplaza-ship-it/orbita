"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Work } from "@/lib/works";

export function WorkIndex({ works }: { works: Work[] }) {
  const [active, setActive] = useState(works[0]?.slug ?? "");
  const [open, setOpen] = useState<string | null>(null);
  const current = works.find((w) => w.slug === active) ?? works[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="sticky top-[5.5rem] pr-10">
          {current ? (
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                {works.map((work) => (
                  <Image
                    key={work.slug}
                    src={work.cover}
                    alt={work.caption}
                    fill
                    sizes="40vw"
                    className={`object-cover transition-opacity duration-500 ${
                      work.slug === current.slug ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <figcaption className="plaque mt-3">{current.caption}</figcaption>
            </figure>
          ) : null}
        </div>
      </div>

      <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-10">
        <ul>
          {works.map((work) => {
            const isOpen = open === work.slug;
            return (
              <li
                key={work.slug}
                className={`work-row ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => setActive(work.slug)}
              >
                <button
                  type="button"
                  className="flex w-full items-baseline gap-4 px-1 py-5 text-left sm:gap-6 sm:py-6"
                  onClick={() =>
                    setOpen((prev) => (prev === work.slug ? null : work.slug))
                  }
                  aria-expanded={isOpen}
                  data-cursor
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-brass">
                    {work.code}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-display text-[1.55rem] leading-none tracking-tight sm:text-[2rem]">
                      {work.title}
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                      {work.commune}
                    </span>
                  </span>
                  <span className="hidden text-brass sm:inline" aria-hidden>
                    {isOpen ? "–" : "→"}
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 px-1 pb-7 sm:grid-cols-12">
                      <div className="relative aspect-[16/10] sm:hidden">
                        <Image
                          src={work.cover}
                          alt={work.caption}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:col-span-8">
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            Superficie
                          </dt>
                          <dd className="mt-1 tabular">{work.area} m²</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            Año
                          </dt>
                          <dd className="mt-1 tabular">{work.year}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            Tipología
                          </dt>
                          <dd className="mt-1">{work.type}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            Materia
                          </dt>
                          <dd className="mt-1">{work.materials.join(" · ")}</dd>
                        </div>
                      </dl>
                      <div className="sm:col-span-4 sm:self-end sm:text-right">
                        <Link
                          href={`/obras/${work.slug}`}
                          className="link-line text-[11px] uppercase tracking-[0.18em] text-brass"
                        >
                          Ver ficha
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
