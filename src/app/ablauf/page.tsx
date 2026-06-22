import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

const detailedSteps = [
  {
    title: "Anfrage und Einschätzung",
    description:
      "Sie schildern Ihr Anliegen. Wir ordnen den Bedarf ein und geben eine klare Ersteinschätzung für den nächsten Schritt.",
  },
  {
    title: "Besichtigung und Offerte",
    description:
      "Wenn nötig, besichtigen wir das Objekt vor Ort. Danach erhalten Sie eine nachvollziehbare Offerte mit transparentem Leistungsumfang.",
  },
  {
    title: "Ausführung und Koordination",
    description:
      "Die Arbeiten werden sauber, termintreu und abgestimmt umgesetzt. Zuständigkeiten und Abläufe bleiben während des Projekts klar.",
  },
  {
    title: "Qualitätscheck und Übergabe",
    description:
      "Zum Abschluss prüfen wir gemeinsam das Ergebnis. Offene Punkte werden strukturiert erledigt und das Projekt geordnet übergeben.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Ablauf",
  path: "/ablauf",
  description:
    "Der Ablauf bei SCM Baupartner in vier klaren Schritten: von Anfrage und Besichtigung bis zur sauberen Übergabe.",
});

export default function AblaufPage() {
  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fresh-green)]">Ablauf</p>
      <h1 className="mt-3 text-3xl font-semibold text-[var(--color-deep-green)] sm:text-4xl">So arbeiten wir bei SCM Baupartner</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
        Für Projekte in Zürich und Umgebung arbeiten wir mit einem klaren, ruhigen Prozess. Unser Team mit 8 Mitarbeitenden bringt
        Handwerkserfahrung seit 1981 in die Umsetzung ein.
      </p>

      <ol className="mt-8 grid gap-4">
        {detailedSteps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-deep-green)]">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/offerte"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-active-green)]"
        >
          Offerte anfragen
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:bg-[var(--color-mist-green)]"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
