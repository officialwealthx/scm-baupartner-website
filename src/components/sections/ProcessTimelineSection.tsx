"use client";

import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";

const steps = [
  {
    title: "Anfrage",
    description: "Sie senden die Eckdaten. Wir klären Umfang, Prioritäten und den nächsten Schritt.",
  },
  {
    title: "Besichtigung",
    description: "Wenn nötig prüfen wir das Projekt vor Ort und stimmen die Ausführung präzise ab.",
  },
  {
    title: "Offerte",
    description: "Sie erhalten eine klare Offerte mit nachvollziehbaren Positionen und Abläufen.",
  },
  {
    title: "Ausführung",
    description: "Die Arbeiten werden strukturiert umgesetzt, sauber koordiniert und termingerecht geführt.",
  },
  {
    title: "Übergabe",
    description: "Zum Abschluss folgt die geordnete Übergabe mit gemeinsamem Qualitätscheck.",
  },
] as const;

export function ProcessTimelineSection() {
  return (
    <SectionShell
      id="ablauf"
      title="Ein Ablauf, der den Überblick sichert."
      description="Von der Anfrage bis zur Übergabe bleiben Zuständigkeiten, Termine und Ausführung klar abgestimmt."
    >
      <div className="mt-10 hidden lg:block">
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-[16rem_1fr] gap-0">
            <div className="border-r border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">Ablauf</span>
              <ol className="mt-6 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] text-xs font-semibold text-[var(--color-deep-green)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold text-[var(--color-deep-green)]">{step.title}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-8">
              <div className="space-y-5">
                {steps.map((step) => (
                  <article key={step.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5">
                    <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
                  </article>
                ))}
              </div>
              <Link
                href="/ablauf"
                className="mt-7 inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-soft-green)]"
              >
                Ablauf im Detail ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 lg:hidden">
        <ol className="relative grid gap-8">
          <span aria-hidden="true" className="absolute bottom-6 left-5 top-5 w-px bg-[var(--color-border-green-gray)]" />
          {steps.map((step, index) => (
            <li key={step.title} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] text-sm font-semibold text-[var(--color-deep-green)] shadow-[var(--shadow-soft)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/ablauf"
          className="mt-8 inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-soft-green)]"
        >
          Ablauf im Detail ansehen
        </Link>
      </div>
    </SectionShell>
  );
}
