export function Reveal({ children }: { children: React.ReactNode }) {
  return <div className="motion-safe:animate-fade-in">{children}</div>;
}
