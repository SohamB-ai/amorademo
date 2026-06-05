import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-primary text-primary-foreground">
      {/* Subtle gold line highlights at the borders of the section */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        {/* LEFT — Story Details */}
        <div className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            A Sanctuary of <span className="text-accent italic font-accent font-medium">Flavor</span> & Elegance in Moshi
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Nestled in the prime commercial hub of L Axis Commercial Centre on Spine Road, 
            <strong> Cafe Amora</strong> is Moshi's premier dining destination. Designed for 
            discerning coffee connoisseurs and gourmet food enthusiasts alike, we combine an 
            elegant forest green-and-gold light aesthetic with a masterfully curated menu.
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            From sunrise double-shot espressos to tranquil late-evening dinners, we provide a 
            refined, cozy space where conversations flow as smoothly as our brews. Every corner 
            is crafted to feel premium, offering a luxurious escape with warm, attentive hospitality.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            {["Luxurious Space", "Artisanal Coffee", "Continental Kitchen", "Exquisite Ambience"].map((c) => (
              <span
                key={c}
                className="rounded-full border-2 border-accent bg-accent/10 px-8 py-3.5 text-xs sm:text-sm font-bold text-accent uppercase tracking-widest shadow-sm transition-all hover:bg-accent/20"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Brand Image/Logo (Bigger size) */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Soft gold glow effect behind logo */}
            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full scale-95 group-hover:scale-100 transition-transform duration-500" />
            <img 
              src="/logo.png" 
              alt="Cafe Amora Logo" 
              className="relative z-10 w-full max-w-[440px] sm:max-w-[480px] md:max-w-[520px] aspect-square rounded-full object-cover shadow-2xl border-4 border-accent transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};