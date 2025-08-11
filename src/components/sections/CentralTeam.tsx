import React, { useEffect, useRef } from "react";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Separator } from "@/components/ui/separator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Member {
  name: string;
  role: string;
  featured?: boolean;
}

const members: Member[] = [
  { name: "Karnala Santhan Kumar", role: "Coordinator", featured: true },
  { name: "S Mohamed Ahsan", role: "Assistant Coordinator" },
  { name: "Jai Surya R", role: "Assistant Coordinator" },
  { name: "Abishai K C", role: "Assistant Coordinator" },
];

const leaders = [
  { name: "Mr. C. Obed Otto", role: "Community Head, Dean – SCOFT (ICT)" },
  { name: "Ms. Akila Mohan", role: "Overall Faculty Coordinator" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const CentralTeam: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".team-card");
    if (!cards || cards.length === 0) return;

    if (prefersReduced) {
      cards.forEach((c) => {
        (c as HTMLElement).style.opacity = "1";
      });
      return;
    }

    gsap.set(cards, { opacity: 0, y: 20 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: { each: 0.08, from: "start" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="central-team" ref={sectionRef} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-10 text-center">
          <ScrollFloat
            containerClassName="text-center font-extrabold tracking-tight"
            textClassName="text-[clamp(2rem,6vw,3.5rem)]"
          >
            Central Team
          </ScrollFloat>
          <p className="mt-2 text-sm text-muted-foreground">TechSociety Core • 2024–25</p>
        </header>

        {/* Leadership strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="rounded-2xl border border-border bg-card text-foreground p-4 md:p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="size-10 shrink-0 rounded-full border border-border bg-background" />
                <div>
                  <p className="font-semibold leading-tight">{l.name}</p>
                  <p className="text-sm text-muted-foreground leading-tight">{l.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Central Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((m) => (
            <SpotlightCard
              key={m.name}
              spotlightColor="rgba(0,0,0,0.10)"
              className={[
                "team-card p-6 md:p-7 rounded-3xl bg-card border border-border text-foreground transition-transform",
                (m.featured || m.role === "Assistant Coordinator") ? "sm:col-span-2 lg:col-span-2" : "",
                "hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <Avatar className={m.featured ? "size-24" : "size-20"}>
                  <AvatarFallback className="bg-muted text-foreground/80">
                    {getInitials(m.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className={m.featured ? "text-xl font-semibold" : "text-lg font-semibold"}>{m.name}</h3>
                  <div className="mt-1 inline-flex items-center gap-2">
                    <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                      {m.role}
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentralTeam;
