import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="mt-14 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Bereit, Ihr Projekt sauber zu planen?</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/offerte" variant="primaryDark">
          Offerte anfragen
        </Button>
        <Button href={siteConfig.whatsappUrl} variant="secondaryDark">
          WhatsApp schreiben
        </Button>
        <Button href="/login" variant="ghostDark">
          Kundenlogin
        </Button>
      </div>
    </section>
  );
}
