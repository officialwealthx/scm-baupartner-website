import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="mt-14 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Bereit, Ihr Projekt sauber zu planen?</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/offerte">Offerte anfragen</Button>
        <Button href={siteConfig.whatsappUrl} variant="secondary">
          WhatsApp schreiben
        </Button>
        <Button href="/login" variant="ghost" className="text-white hover:bg-white/10">
          Kundenlogin
        </Button>
      </div>
    </section>
  );
}
