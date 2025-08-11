import React from "react";
import ScrollFloat from "@/components/animations/ScrollFloat";
import CircularGallery from "@/components/CircularGallery";

// Build items from available HackHustle 24 uploads
// If you later move images to public/hackhustle24, just replace the URLs below.
const items = [
  { image: "/lovable-uploads/e774c181-757a-4503-ad0f-d69301464ccd.png", text: "Registration" },
  { image: "/lovable-uploads/010cae5c-715a-4273-b001-27e92bb87a5c.png", text: "Workshop" },
  { image: "/lovable-uploads/66621267-433a-48c7-994f-202cea349acc.png", text: "Mentoring" },
  { image: "/lovable-uploads/a4cf6a30-4ba4-4f1e-9e57-64599d3855a1.png", text: "Judging" },
  { image: "/lovable-uploads/fb60bac4-79d4-46cd-8ec3-3d7936d2322a.png", text: "Speaker" },
  { image: "/lovable-uploads/cc3d4ba5-b379-4340-8776-0147a271aa6a.png", text: "Runners" },
  { image: "/lovable-uploads/eaf23374-5dc2-4e25-bbd2-7ebe43539c68.png", text: "Winners" },
];

const HackHustle24: React.FC = () => {
  return (
    <section id="hackhustle-24" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <div className="relative inline-block">
            {/* Subtle glow/blur behind the text */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-full bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 blur-2xl"
            />
            <ScrollFloat
              containerClassName="text-center font-extrabold tracking-tight"
              textClassName="text-[clamp(2rem,8vw,5rem)]"
            >
              HackHustle 24
            </ScrollFloat>
          </div>
        </header>

        <div className="relative h-[600px] w-full cursor-grab active:cursor-grabbing" aria-hidden="true">
          {/* Optional subtle radial vignette for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.foreground/0.04),transparent_60%)]"
          />
          <CircularGallery items={items} bend={3} textColor="#111111" borderRadius={0.05} scrollEase={0.02} scrollSpeed={1} />
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Highlights from the 24-hour offline hackathon.
        </p>
      </div>
    </section>
  );
};

export default HackHustle24;
