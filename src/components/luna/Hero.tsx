import { Button } from "@/components/ui/button";
import { Clock, Star, Coffee, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "30+", label: "Cafe Delicacies" },
  { value: "4.3★", label: "Google Rating" },
  { value: "100%", label: "Luxurious Ambience" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden bg-background"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(253,252,247,0.92) 0%, rgba(245,240,228,0.85) 100%), url(/cafe-insides.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative premium elements */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      {/* Noise Texture Overlay for high-end texture feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1b3a24 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-4 py-16 sm:py-20 lg:py-6 pt-24 sm:pt-28 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* LEFT — Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 sm:py-2 backdrop-blur-sm mb-4 sm:mb-6 lg:mb-4 animate-fade-in-up">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary/80 font-semibold">
                Spine Road, Moshi · 11:00 AM – 11:00 PM
              </span>
            </div>
 
            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] leading-[1.05] sm:leading-[1.0] tracking-tight text-primary animate-fade-in-up">
              Elegant Space.
              <br />
              <span className="text-accent font-accent italic font-medium">Exquisite Taste.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 lg:mt-3 max-w-md text-base sm:text-lg text-foreground/80 leading-relaxed animate-fade-in-up [animation-delay:120ms]">
              Welcome to Cafe Amora. Indulge in artisanal coffees, handcrafted continental dishes, gourmet burgers, and rich desserts in a stunning light gold and green luxury ambiance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 lg:mt-4 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up [animation-delay:240ms]">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/95 shadow-glow rounded-full px-6 sm:px-8 py-4 sm:py-5 lg:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all"
              >
                <a href="#menu">Explore Menu</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-6 sm:px-8 py-4 sm:py-5 lg:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all"
              >
                <a href="#booking">Book A Table</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 lg:mt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-foreground/60 text-xs sm:text-sm animate-fade-in-up [animation-delay:360ms] font-semibold">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>4.3 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-accent" />
                <span>Artisanal Brews</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Premium Ambience</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Hero Image */}
          <div className="relative flex items-center justify-center animate-fade-in-up [animation-delay:200ms] mt-8 lg:mt-0">
            {/* Glow ring behind the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-full bg-accent/5 blur-[60px] sm:blur-[80px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[75%] h-[75%] sm:w-[70%] sm:h-[70%] rounded-full border-2 border-dashed border-accent/20"
                style={{ animation: "spin-slow 30s linear infinite" }}
              />
            </div>

            <img
              src="/gallery/unnamed.jpg"
              alt="Artisanal Latte Art at Cafe Amora"
              className="relative z-10 w-4/5 sm:w-full max-w-[280px] sm:max-w-md lg:max-w-[340px] xl:max-w-lg drop-shadow-xl rounded-3xl object-cover aspect-square border-4 border-white"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            />

            {/* Floating stat cards */}
            <div className="absolute top-0 right-0 sm:top-8 sm:right-0 lg:top-2 lg:right-4 z-20 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 px-3 py-2 sm:px-4 sm:py-3 text-center shadow-md animate-fade-in-up [animation-delay:500ms]">
              <span className="block text-lg sm:text-2xl font-bold text-primary font-display">4.3★</span>
              <span className="text-[10px] sm:text-xs text-foreground/75 uppercase tracking-wider">Rating</span>
            </div>
            <div className="absolute bottom-0 left-0 sm:bottom-12 sm:left-0 lg:bottom-2 lg:left-4 z-20 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 px-3 py-2 sm:px-4 sm:py-3 text-center shadow-md animate-fade-in-up [animation-delay:600ms]">
              <span className="block text-lg sm:text-2xl font-bold text-accent font-display">106+</span>
              <span className="text-[10px] sm:text-xs text-foreground/75 uppercase tracking-wider">Reviews</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-10 lg:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up [animation-delay:480ms]">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={cn(
                "rounded-2xl border border-primary/10 bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 lg:py-3 text-center transition-all hover:border-accent/40 hover:bg-white/80",
                idx === 2 ? "col-span-2 sm:col-span-1" : ""
              )}
            >
              <span
                className="block text-2xl sm:text-3xl lg:text-2xl font-bold text-primary font-display animate-pulse"
              >
                {s.value}
              </span>
              <span className="mt-1 block text-[10px] sm:text-xs uppercase tracking-widest text-foreground/60 font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
};