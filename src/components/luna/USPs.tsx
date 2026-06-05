import { Coffee, Sparkles, UtensilsCrossed, MapPin, PartyPopper } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const usps = [
  { Icon: Coffee, title: "Premium Brews", desc: "Artisanal espresso and freshly crafted beverages" },
  { Icon: Sparkles, title: "Luxurious Vibe", desc: "Fine green and gold light theme interiors" },
  { Icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Curated Chinese, continental, and hot biryanis" },
  { Icon: MapPin, title: "Moshi Hub", desc: "L Axis Commercial Centre, Spine Road" },
  { Icon: PartyPopper, title: "Celebrations", desc: "Host private parties and birthdays with us" },
];

export const USPs = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 bg-primary text-primary-foreground">
      {/* Gold line highlights */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Why Cafe Amora</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white">
            Designed for <span className="text-accent italic font-accent font-medium">Indulgence</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {usps.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10 hover:shadow-neon"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-accent text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
