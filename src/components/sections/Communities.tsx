import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { Button } from "@/components/ui/button";
import dynamicIconImports from "lucide-react/dynamicIconImports";

// Lazy icon loader (monochrome, tiny, accessible)
const DynamicIcon = ({ name, className = "", strokeWidth = 2 }: { name: keyof typeof dynamicIconImports; className?: string; strokeWidth?: number }) => {
  const LucideIcon = React.useMemo(() => React.lazy(dynamicIconImports[name]), [name]);
  return (
    <Suspense fallback={<span aria-hidden className={`inline-block size-4 ${className}`} />}>
      <LucideIcon aria-hidden className={className} strokeWidth={strokeWidth} />
    </Suspense>
  );
};

const communities = [
  {
    title: "Machine Learning",
    slug: "ml",
    description:
      "Focuses on predictive systems and data analysis using tools like Python, Scikit-learn, and TensorFlow.",
    icon: "brain",
  },
  {
    title: "Intelligent Systems",
    slug: "is",
    description:
      "Explores AI, smart systems, and IoT for real-world automation and innovation across industries.",
    icon: "cpu",
  },
  {
    title: "Web Development",
    slug: "webdev",
    description:
      "Builds full-stack web applications using HTML, CSS, JavaScript, React, and Node.js.",
    icon: "globe",
  },
  {
    title: "Game & App Development",
    slug: "games-apps",
    description:
      "Designs games and mobile apps using Unity, Unreal Engine, Android Studio, and Flutter.",
    icon: "gamepad-2",
  },
  {
    title: "Cyber Security",
    slug: "cybersec",
    description:
      "Develops skills in ethical hacking, penetration testing, and system security through hands-on practice.",
    icon: "shield",
  },
] as const;

const Communities: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // Respect user's motion preferences

    gsap.registerPlugin(ScrollTrigger);

    const introEl = introRef.current;
    const gridEl = gridRef.current;
    if (!introEl || !gridEl) return;

    const headlineEl = introEl.querySelector("h2");
    const subtitleEl = introEl.querySelector("[data-subtitle]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introEl,
        start: "top top",
        endTrigger: gridEl,
        end: "top 50%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    if (headlineEl) {
      tl.to(
        headlineEl,
        {
          opacity: 0.25,
          scale: 0.92,
          yPercent: -12,
          ease: "none",
        },
        0
      );
    }
    if (subtitleEl) {
      tl.to(
        subtitleEl,
        {
          opacity: 0.2,
          yPercent: -10,
          ease: "none",
        },
        0
      );
    }

    // Cards staggered reveal
    const cards = gridEl.querySelectorAll(".comm-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 }, // 16–20px rise
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridEl,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        const trg = t as ScrollTrigger;
        if (trg.vars && (trg.vars.trigger === gridEl || trg.vars.trigger === introEl)) {
          trg.kill();
        }
      });
    };
  }, []);

  const handleBackToTop = () => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("communities")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="communities" aria-labelledby="communities-heading" ref={sectionRef} className="relative">
      <header ref={introRef} className="relative flex min-h-[100svh] items-center justify-center px-4 pt-[8svh]">
        <div className="text-center mx-auto">
          <ScrollFloat
            containerClassName="text-center font-extrabold tracking-tight overflow-visible"
            textClassName="text-[clamp(2rem,8vw,5rem)] font-extrabold leading-[1.05] hero-heading-shadow"
          >
            {"What communities do we have?"}
          </ScrollFloat>
          <p data-subtitle className="mt-3 text-sm sm:text-base text-muted-foreground">
            Five focused domains • one builder community.
          </p>
        </div>
      </header>

      <div ref={gridRef} className="container pb-12 pt-8 md:pt-10">
        <h2 id="communities-heading" className="sr-only">
          Communities
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {communities.map((c) => (
            <li key={c.slug} className="comm-card group rounded-2xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/10 text-foreground shadow-md p-8 md:p-10 min-h-[260px] md:min-h-[280px] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-ring">
              <article>
                <header className="flex items-center gap-2">
                  <DynamicIcon name={c.icon as keyof typeof dynamicIconImports} className="size-6 text-foreground/70" />
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{c.title}</h3>
                </header>
                <p className="mt-3 text-[0.95rem] md:text-base text-muted-foreground">
                  {c.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="sticky bottom-4 mt-8 flex justify-end">
          <Button variant="ghost" size="sm" onClick={handleBackToTop} aria-label="Back to top">
            Back to top
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Communities;
