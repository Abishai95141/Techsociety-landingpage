import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Globe, Gamepad2, Shield, Layers } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const domains = [
  {
    title: "Machine Learning",
    desc:
      "Data Odyssey, Create Your Own AI Chatbot, From Code to Cognition, Beginner’s Guide to ML",
    Icon: Brain,
  },
  {
    title: "Intelligent Systems",
    desc:
      "Robo-AI Fusion, AI in Industrial Automation, Exploring Intelligent Systems, Deep Learning",
    Icon: Bot,
  },
  {
    title: "Web Development",
    desc:
      "Frontend Craftathon, Build Your Web Portfolio, Web DesignScape, UX Bootcamps, Web Security",
    Icon: Globe,
  },
  {
    title: "Game & App Development",
    desc:
      "Rookie Realms, Game Craft, Flutter + Firebase, Unity & Unreal Engine Workshops",
    Icon: Gamepad2,
  },
  {
    title: "Cyber Security",
    desc: "Web Hacking Tools, Securing Web Apps",
    Icon: Shield,
  },
  {
    title: "General Tech",
    desc: "A Tour to Web3, GitGuru, Flexi Exam Debate, Bitcoin & Ethereum Sessions",
    Icon: Layers,
  },
] as const;

const chips = [
  "Hands-on Workshops",
  "Industry-Relevant Topics",
  "Cross-Domain Collaboration",
] as const;

const outcomes = [
  {
    title: "Skill Development",
    desc: "Hands-on learning that elevates technical proficiency.",
  },
  {
    title: "Project Building",
    desc: "Turn ideas into working prototypes and apps.",
  },
  {
    title: "Innovation Culture",
    desc: "Foster experimentation, collaboration, and creativity.",
  },
] as const;

const EventsShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bandRef = useRef<HTMLDivElement | null>(null);
  const domainsRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);
  const outcomesRef = useRef<HTMLDivElement | null>(null);

  // Count-up setup
  const counterRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(counterRef, { once: true, margin: "-20% 0px -20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 20 });
  const [display, setDisplay] = useState(0);
  const [showPlus, setShowPlus] = useState(false);

  // Respect reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round((v as number) || 0)));
    return () => unsub();
  }, [spring]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(120);
      setShowPlus(true);
      return;
    }
    if (inView) mv.set(120);
  }, [inView, prefersReducedMotion, mv]);

  useEffect(() => {
    if (display >= 120) setShowPlus(true);
  }, [display]);

  // GSAP reveals
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion) {
      // Ensure content is visible without transforms
      gsap.set([bandRef.current], { opacity: 1, y: 0 });
      if (domainsRef.current) gsap.set(domainsRef.current.children, { opacity: 1, y: 0 });
      if (chipsRef.current) gsap.set(chipsRef.current.children, { opacity: 1, y: 0 });
      if (outcomesRef.current) gsap.set(outcomesRef.current.children, { opacity: 1, y: 0 });
      return;
    }

    if (bandRef.current) {
      gsap.fromTo(
        bandRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bandRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    const revealChildren = (container: HTMLDivElement | null, stagger = 0.1) => {
      if (!container) return;
      const items = Array.from(container.children) as HTMLElement[];
      gsap.set(items, { opacity: 0, y: 16 });
      ScrollTrigger.batch(items, {
        batchMax: 6,
        interval: 0.1,
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger,
          }),
        once: true,
      });
    };

    revealChildren(domainsRef.current, 0.09);
    revealChildren(chipsRef.current, 0.08);
    revealChildren(outcomesRef.current, 0.08);
  }, [prefersReducedMotion]);

  return (
    <section
      id="events"
      ref={sectionRef}
      aria-labelledby="events-title"
      className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28"
    >
      <header ref={bandRef} className="rounded-2xl border bg-card text-card-foreground shadow-sm p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div className="space-y-2">
            <h2 id="events-title" className="text-3xl md:text-4xl font-semibold tracking-tight">
              Tech Society Highlights
            </h2>
            <p className="text-sm text-muted-foreground">A snapshot of our impact</p>
          </div>

          <div ref={counterRef} className="flex items-baseline gap-3 md:gap-4">
            <div className="flex items-baseline">
              <span
                className="tabular-nums font-mono text-5xl md:text-6xl font-bold leading-none tracking-tight"
                aria-label="Events Conducted"
              >
                {display}
              </span>
              {showPlus && (
                <span className="ml-1 text-4xl md:text-5xl font-semibold" aria-hidden>
                  +
                </span>
              )}
            </div>
            <div className="pb-1 md:pb-1.5 text-muted-foreground text-sm md:text-base">Events Conducted</div>
          </div>
        </div>
      </header>

      <div className="mt-12 md:mt-16">
        <h3 className="text-lg font-semibold tracking-tight mb-5">Domains Covered</h3>
        <div ref={domainsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {domains.map(({ title, desc, Icon }) => (
            <Card
              key={title}
              className="rounded-2xl border bg-card text-card-foreground shadow-sm transition-transform duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              <CardHeader className="flex flex-row items-start gap-4 p-6 md:p-7">
                <div className="mt-1">
                  <Icon aria-hidden className="size-6 text-foreground/70" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">{desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h3 className="text-lg font-semibold tracking-tight mb-5">Engagement</h3>
        <div ref={chipsRef} className="flex flex-wrap items-center gap-3 md:gap-4">
          {chips.map((label) => (
            <Button
              key={label}
              type="button"
              variant="pill"
              size="xl"
              className="border border-border bg-card text-foreground shadow-sm motion-safe:hover:scale-[1.02] motion-reduce:transform-none"
              aria-label={label}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h3 className="text-lg font-semibold tracking-tight mb-5">Outcomes</h3>
        <div ref={outcomesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {outcomes.map(({ title, desc }) => (
            <Card
              key={title}
              className="rounded-2xl border bg-card text-card-foreground shadow-sm transition-transform duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              <CardHeader className="p-6 md:p-7">
                <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-6 md:pb-7 px-6 md:px-7">
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsShowcase;
