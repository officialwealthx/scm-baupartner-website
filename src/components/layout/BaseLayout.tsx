import { MainNavigation } from "@/components/navigation/MainNavigation";
import { SiteFooter } from "@/components/footer/SiteFooter";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main className="mx-auto w-full max-w-[1200px] flex-1 overflow-x-clip px-4 py-10 sm:px-6 lg:px-8">{children}</main>
      <SiteFooter />
    </>
  );
}
