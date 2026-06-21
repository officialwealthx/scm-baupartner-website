"use client";

import { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/layout/SectionShell";

const steps = [
  {
    title: "Anfrage und Einschätzung",
    description: "Erste Aufnahme Ihres Anliegens und eine klare Ersteinschätzung.",
  },
  {
    title: "Besichtigung und Offerte",
    description: "Besichtigung vor Ort und eine nachvollziehbare, transparente Offerte.",
  },
  {
    title: "Ausführung und Koordination",
    description: "Saubere Umsetzung mit abgestimmten Terminen und klarer Koordination.",
  },
  {
    title: "Qualitätscheck und Übergabe",
    description: "Gemeinsamer Qualitätscheck und eine geordnete Projektübergabe.",
  },
] as const;

export function ProcessTimelineSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const update = () => {
      const el = sectionRef.current;
      if (!el || window.innerWidth < 1024) return;

      const rect = el.getBoundingClientRect();
      const start = rect.top;
      const end = rect.bottom - window.innerHeight;
      const range = end - start;
      if (range <= 0) return;

      const raw = (0 - start) / range;
      const nextProgress = Math.max(0, Math.min(1, raw));
      const index = Math.min(steps.length - 1, Math.floor(nextProgress * steps.length));

      setProgress(nextProgress);
      setActiveStep(index);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <SectionShell
      title="Von der Anfrage bis zur sauberen Übergabe."
      description="Klarer Ablauf in vier Schritten."
    >
      <div className="mt-10 hidden lg:block">
        <div ref={sectionRef} className="relative min-h-[250vh]">
          <div className="sticky top-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-[18rem_1fr] gap-0">
              <div className="relative border-r border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">
                  Ablauf
                </span>
                <div className="relative mt-6 pl-7">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-border-green-gray)]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 w-px bg-[var(--color-fresh-green)] transition-[height] duration-200"
                    style={{ height: `${progress * 100}%` }}
                  />
                  <ol className="space-y-8">
                    {steps.map((step, index) => {
                      const isActive = index <= activeStep;
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
                    const isActive = index === activeStep;
                    return (
                      <article
                        key={step.title}
                        className={`rounded-[var(--radius-lg)] border p-5 transition-colors ${
                          isActive
                            ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]"
                            : "border-[var(--color-border-green-gray)] bg-white"
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ol data-reveal-stagger className="relative mt-10 grid gap-8 lg:hidden">
        <span
          aria-hidden="true"
          data-reveal="line"
          className="absolute bottom-5 left-5 top-5 w-px origin-top bg-gradient-to-b from-[var(--color-fresh-green)] via-[var(--color-border-green-gray)] to-transparent"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="relative pl-16">
            <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] bg-white text-sm font-semibold text-[var(--color-deep-green)] shadow-[var(--shadow-soft)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
