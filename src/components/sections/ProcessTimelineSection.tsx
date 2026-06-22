"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/layout/SectionShell";

const steps = [
  {
    title: "Anfrage",
    description: "Sie senden die Eckdaten. Wir klären Umfang, Prioritäten und nächste Schritte.",
  },
  {
    title: "Besichtigung",
    description: "Wenn nötig prüfen wir das Projekt vor Ort und stimmen die Ausführung sauber ab.",
  },
  {
    title: "Offerte",
    description: "Sie erhalten eine klare Offerte mit nachvollziehbaren Positionen.",
  },
  {
    title: "Ausführung",
    description: "Die Arbeiten werden strukturiert umgesetzt, sauber koordiniert und termintreu geführt.",
  },
  {
    title: "Übergabe",
    description: "Zum Abschluss folgt die geordnete Übergabe mit gemeinsamem Qualitätscheck.",
  },
] as const;

export function ProcessTimelineSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mobileRailRef = useRef<HTMLOListElement | null>(null);
  const mobileItemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const rafDesktopRef = useRef<number | null>(null);
  const rafMobileRef = useRef<number | null>(null);

  const [desktopProgress, setDesktopProgress] = useState(0);
  const [desktopActiveStep, setDesktopActiveStep] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(0);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const computeDesktop = () => {
      const el = sectionRef.current;
      if (!el || window.innerWidth < 1024) return;

      const rect = el.getBoundingClientRect();
      const start = rect.top;
      const end = rect.bottom - window.innerHeight;
      const range = end - start;
      if (range <= 0) return;

      const raw = (0 - start) / range;
      const nextProgress = Math.max(0, Math.min(1, raw));
      const nextStep = Math.min(steps.length - 1, Math.floor(nextProgress * steps.length));

      setDesktopProgress((prev) => (Math.abs(prev - nextProgress) > 0.003 ? nextProgress : prev));
      setDesktopActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
    };

    const onScroll = () => {
      if (rafDesktopRef.current !== null) return;
      rafDesktopRef.current = window.requestAnimationFrame(() => {
        computeDesktop();
        rafDesktopRef.current = null;
      });
    };

    computeDesktop();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafDesktopRef.current !== null) {
        window.cancelAnimationFrame(rafDesktopRef.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const computeMobile = () => {
      const rail = mobileRailRef.current;
      if (!rail || window.innerWidth >= 1024) return;

      const railRect = rail.getBoundingClientRect();
      const start = window.innerHeight * 0.8;
      const total = railRect.height + window.innerHeight * 0.28;
      const raw = (start - railRect.top) / Math.max(total, 1);
      const nextProgress = Math.max(0, Math.min(1, raw));

      let nextStep = 0;
      mobileItemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.6) {
          nextStep = index;
        }
      });

      setMobileProgress((prev) => (Math.abs(prev - nextProgress) > 0.01 ? nextProgress : prev));
      setMobileActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
    };

    const onScroll = () => {
      if (rafMobileRef.current !== null) return;
      rafMobileRef.current = window.requestAnimationFrame(() => {
        computeMobile();
        rafMobileRef.current = null;
      });
    };

    computeMobile();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafMobileRef.current !== null) {
        window.cancelAnimationFrame(rafMobileRef.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <SectionShell
      id="ablauf"
      title="Ein Ablauf, der Ihnen von Anfang bis Ende Überblick gibt."
      description="Von der Anfrage bis zur Übergabe sind alle Schritte klar aufgebaut und sauber abgestimmt."
    >
      <div className="mt-10 hidden lg:block">
        <div ref={sectionRef} className="relative min-h-[250vh]">
          <div className="sticky top-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-[18rem_1fr] gap-0">
              <div className="relative border-r border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">Ablauf</span>
                <div className="relative mt-6 pl-7">
                  <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-border-green-gray)]" />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 w-px bg-[var(--color-fresh-green)] transition-[height] duration-200"
                    style={{ height: `${desktopProgress * 100}%` }}
                  />
                  <ol className="space-y-8">
                    {steps.map((step, index) => {
                      const isActive = index <= desktopActiveStep;
                      return (
                        <li key={step.title} className="relative">
                          <span
                            className={`absolute -left-[2.03rem] top-0.5 h-3 w-3 rounded-full border ${
                              isActive
                                ? "border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)]"
                                : "border-[var(--color-border-green-gray)] bg-white"
                            }`}
                          />
                          <p
                            className={`text-sm font-semibold ${
                              isActive ? "text-[var(--color-deep-green)]" : "text-[var(--color-soft-graphite)]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-5">
                  {steps.map((step, index) => {
                    const isActive = index === desktopActiveStep;
                    return (
                      <article
                        key={step.title}
                        className={`rounded-[var(--radius-lg)] border p-5 transition-colors ${
                          isActive
                            ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]"
                            : "border-[var(--color-border-green-gray)] bg-white"
                        }`}
                      >
                        <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
                      </article>
                    );
                  })}
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
      </div>

      <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 lg:hidden">
        <ol ref={mobileRailRef} data-reveal-stagger className="relative grid gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-5 w-px bg-[var(--color-border-green-gray)]"
          />
          <span
            aria-hidden="true"
            className="absolute left-5 top-5 w-px bg-[var(--color-fresh-green)] transition-[height] duration-200"
            style={{ height: `calc((100% - 2.75rem) * ${mobileProgress})` }}
          />
          {steps.map((step, index) => {
            const isActive = index <= mobileActiveStep;
            return (
              <li
                key={step.title}
                ref={(element) => {
                  mobileItemRefs.current[index] = element;
                }}
                className="relative pl-16"
              >
                <span
                  className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold shadow-[var(--shadow-soft)] ${
                    isActive
                      ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] text-[var(--color-deep-green)]"
                      : "border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
              </li>
            );
          })}
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
