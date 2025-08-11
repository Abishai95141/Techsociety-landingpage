import ScrollFloat from "@/components/animations/ScrollFloat";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const pillars = ["Learn", "Collaborate", "Innovate", "Develop"];

const AboutSection = () => {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title Row */}
        <div>
          <ScrollFloat
            containerClassName="font-extrabold tracking-tight text-balance text-foreground"
            textClassName="text-[clamp(2rem,6vw,4rem)]"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            {"What is Tech Society"}
          </ScrollFloat>
          <div className="mt-5 md:mt-6">
            <Separator />
          </div>
        </div>

        {/* About blurb */}
        <div className="mt-8 md:mt-10">
          <Card className="relative overflow-hidden rounded-2xl bg-card text-card-foreground shadow-sm">
            {/* subtle spotlight / sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(800px_300px_at_20%_-10%,hsl(var(--accent)/0.2),transparent_60%)] hover:opacity-100" />
            <div className="p-6 md:p-8">
              <p className="text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-muted-foreground">
                Tech Society is a community dedicated to learning, collaboration, innovation, and skill development across various technology domains through events and projects. It was initiated by Mr. C. Obed Otto, Dean – ICT, in 2023. He collaborated with students to establish this community, providing them with a platform to learn new tech skills, collaborate on projects and events, innovate in real-world scenarios, and develop both technical and soft skills.
              </p>
            </div>
          </Card>
        </div>

        {/* Vision & Mission grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <article>
            <ScrollReveal
              containerClassName="mb-2"
              textClassName="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-foreground"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
            >
              {"Our Vision"}
            </ScrollReveal>
            <ScrollReveal
              containerClassName="-mt-2"
              textClassName="text-[clamp(1rem,2.2vw,1.125rem)] text-neutral-700 leading-relaxed"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
            >
              {"Our vision is to build a vibrant college tech community where diverse learners unite to explore, innovate, and advance technology. Through collaboration, mentorship, and cutting-edge research, we empower learners to become experts and drive positive impact with technology."}
            </ScrollReveal>
          </article>

          <article>
            <ScrollReveal
              containerClassName="mb-2"
              textClassName="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-foreground"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
            >
              {"Our Mission"}
            </ScrollReveal>
            <ScrollReveal
              containerClassName="-mt-2"
              textClassName="text-[clamp(1rem,2.2vw,1.125rem)] text-neutral-700 leading-relaxed"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
            >
              {"Fueled by passion, we shape tech titans—transforming raw talent into masterful coders, game creators, and AI pioneers. Through collaboration and innovation, we push boundaries and solve real-world challenges with code. Join us and ignite the future, one breakthrough at a time."}
            </ScrollReveal>
          </article>
        </div>

        {/* Pillars strip */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-2 md:gap-3">
          {pillars.map((p, i) => (
            <span
              key={p}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs md:text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: `${0.05 * i + 0.1}s` }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
