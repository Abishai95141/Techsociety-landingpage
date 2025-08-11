import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const StatPill = ({ value, label }: { value: number; label: string }) => (
  <div className="rounded-full bg-card text-card-foreground shadow px-4 py-3 text-center">
    <div className="text-lg font-bold leading-none">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

const useSEO = () => {
  useEffect(() => {
    document.title = "TechSociety — Build Together, Learn Faster";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Build together, learn faster, and ship more with TechSociety.");

    const canonicalId = 'canonical-link';
    let canonical = document.getElementById(canonicalId) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.id = canonicalId;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = '/';
  }, []);
};

export const Hero = () => {
  useSEO();
  return (
    <section className={cn("relative min-h-[92vh] overflow-hidden")}
      aria-label="TechSociety hero section with interactive 3D model">
      {/* 3D Model - zoomed slightly to hide watermark */}
      <div className="absolute inset-0">
        <spline-viewer
          url="https://prod.spline.design/cHtCkE-h4TAM0pqI/scene.splinecode"
          className="w-full h-full block"
          style={{ transform: 'scale(1.35) translateY(2%)', transformOrigin: 'center' }}
          aria-label="Interactive 3D robot model"
        ></spline-viewer>
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 h-full pointer-events-none">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 h-[92vh] items-center">
            {/* Left CTA stack */}
            <aside className="col-span-12 md:col-span-3 flex md:block justify-center md:justify-start gap-3 md:gap-4 pointer-events-none">
              <div className="flex md:flex-col gap-3 md:gap-4 pointer-events-auto">
                <Button asChild variant="hero" size="xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLScUka6EpJNCxI_t6v84On8aAHKIefQMzJC-3Ds_T8-prerOow/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Join TechSociety</a></Button>
                <Button variant="pill" size="default">Explore Events</Button>
                <Button variant="pill" size="default">See Projects</Button>
                <Button variant="outline" size="sm" className="rounded-full">Drag to explore</Button>
              </div>
            </aside>

            {/* Center giant heading */}
            <header className="relative col-span-12 md:col-span-6 text-center">
              {/* Subtle Gaussian-like glow behind heading */}
              <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[min(85vw,900px)] h-[min(45vh,420px)] rounded-[999px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)] blur-2xl" />
              </div>
              <h1 className="select-none font-extrabold leading-[0.85] tracking-tight text-hero hero-heading-shadow"
                  style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}>
                <span className="block">Tech</span>
                <span className="block">Society</span>
              </h1>
            </header>

            {/* Right copy and stats */}
            <aside className="col-span-12 md:col-span-3 flex md:block justify-center md:justify-end gap-6">
              <div className="flex flex-col items-center md:items-end gap-6 pointer-events-none">
                <div className="text-right space-y-2 pointer-events-auto">
                  <p className="text-lg md:text-xl font-medium">Build Together.</p>
                  <p className="text-lg md:text-xl font-medium">Learn Faster.</p>
                  <p className="text-lg md:text-xl font-medium">Ship More.</p>
                </div>
                <div className="flex gap-3 md:gap-4 pointer-events-auto">
                  <StatPill value={4} label="Projects" />
                  <StatPill value={3} label="Events" />
                  <StatPill value={0} label="Members" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Subtle gradient surface for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[60%] opacity-60" style={{ background: "var(--gradient-subtle)" }} />
    </section>
  );
};

export default Hero;
