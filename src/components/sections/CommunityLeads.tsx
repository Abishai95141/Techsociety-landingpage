import React from "react";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { Separator } from "@/components/ui/separator";

interface Community {
  name: string;
  secretary: string;
  jointSecretaries: string[];
}

const communities: Community[] = [
  {
    name: "Machine Learning Community",
    secretary: "Shri Sai Aravind R",
    jointSecretaries: ["Narendran K", "Akash M", "Vasanthi Sivasankar"],
  },
  {
    name: "Cyber Security Community",
    secretary: "?",
    jointSecretaries: ["Jaiyantan S", "Geerthivash J D", "?"],
  },
  {
    name: "Intelligent Systems Community",
    secretary: "Jerowin Geo J A",
    jointSecretaries: ["Narasimhan S", "Balasubramaniam", "Kabelan G K"],
  },
  {
    name: "Web Development Community",
    secretary: "Roopak C S",
    jointSecretaries: ["Bala Saravanan K", "Sanchita Sandeep", "Mukitha V M"],
  },
  {
    name: "Game and App Development Community",
    secretary: "Yohesh Kumar R M",
    jointSecretaries: ["Kavi M S", "Aathi Sakthi S", "Karthik Ganesh G"],
  },
];

const advisors = [
  { name: "Karthick Prabakaran", area: "Web" },
  { name: "Aldrin Lijo J E", area: "ML" },
  { name: "Vikhram S", area: "ML" },
  { name: "V Divyashree", area: "Web" },
];

const CommunityLeads: React.FC = () => {
  return (
    <section id="community-leads" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-10 text-center">
          <ScrollFloat
            containerClassName="text-center font-extrabold tracking-tight"
            textClassName="text-[clamp(2rem,6vw,3.5rem)]"
          >
            Community Leadership
          </ScrollFloat>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {communities.map((c) => (
            <article key={c.name} className="rounded-3xl border border-border bg-card text-foreground p-6 md:p-7 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
              <div className="mt-3 text-sm">
                <p>
                  <span className="text-muted-foreground">Secretary:</span> <span className="font-medium">{c.secretary}</span>
                </p>
                <div className="mt-2">
                  <p className="text-muted-foreground">Joint Secretaries:</p>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    {c.jointSecretaries.map((n) => (
                      <li key={n} className="text-foreground/90">{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Separator className="my-10" />

        <div>
          <h3 className="text-center text-base font-semibold tracking-tight">Advisors</h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advisors.map((a) => (
              <li
                key={a.name}
                className="rounded-2xl border border-border bg-card text-foreground p-4 text-center"
              >
                <span className="font-medium">{a.name}</span>
                <span className="ml-2 text-muted-foreground">— {a.area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunityLeads;
