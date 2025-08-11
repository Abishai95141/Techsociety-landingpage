import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart, QrCode, Car, Building2, PawPrint, Users } from "lucide-react";

const projects = [
  {
    title: "Automating Register Number and Subject Code Extraction",
    desc: "OCR-based automation for processing academic answer sheets.",
    tags: ["OCR", "Automation", "Education"],
    Icon: FileText,
  },
  {
    title: "FlipVision – Next-Gen E-commerce Platform",
    desc: "A scalable e-commerce site with smart recommendations and dynamic UI.",
    tags: ["E-commerce", "Recommendations", "UI"],
    Icon: ShoppingCart,
  },
  {
    title: "Library Entry/Exit Management System",
    desc: "A real-time student tracking system integrated with QR authentication.",
    tags: ["QR", "Realtime", "Management"],
    Icon: QrCode,
  },
  {
    title: "AWS DeepRacer: Autonomous Driving AI",
    desc: "Reinforcement learning-based self-driving car simulation using AWS.",
    tags: ["RL", "Simulation", "AWS"],
    Icon: Car,
  },
  {
    title: "College Replication in Unity",
    desc: "A virtual model of the campus built in Unity for immersive walkthroughs.",
    tags: ["Unity", "3D", "Campus"],
    Icon: Building2,
  },
  {
    title: "A Bionic Dog with Interactive Coordination",
    desc: "An AI-powered robotic dog designed for responsive movements and coordination.",
    tags: ["Robotics", "AI", "Control"],
    Icon: PawPrint,
  },
  {
    title: "Mentor Selection System",
    desc: "Decision support to match students with mentors using preferences & expertise.",
    tags: ["Matching", "Decision Support", "Students"],
    Icon: Users,
  },
] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsSection: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "CreativeWork",
      position: i + 1,
      name: p.title,
      description: p.desc,
    })),
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28"
    >
      <header className="mb-8 md:mb-12">
        <div className="relative inline-block">
          <span className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-2xl" aria-hidden />
          <h2 id="projects-title" className="text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Elemental, animated cards showcasing our recent work and explorations.
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
      >
        {projects.map(({ title, desc, tags, Icon }) => (
          <motion.article key={title} variants={item}>
            <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40">
              <Card className="rounded-2xl bg-card text-card-foreground shadow-sm transition-transform duration-200 will-change-transform motion-safe:group-hover:-translate-y-0.5">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-foreground/[0.04] to-transparent pointer-events-none" aria-hidden />
                <CardHeader className="relative p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-xl border border-border/60 bg-background p-2 shadow-sm transition-transform duration-200 motion-safe:group-hover:scale-105">
                      <Icon aria-hidden className="size-6 text-foreground/70" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative px-6 md:px-7 pb-6 md:pb-7 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <Button
                        key={t}
                        type="button"
                        variant="pill"
                        size="sm"
                        className="border border-border bg-card text-foreground/90"
                        aria-label={t}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default ProjectsSection;
