import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden bg-background"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(253,252,247,0.94) 0%, rgba(245,240,228,0.88) 100%), url(/cafe-insides.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative premium elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container relative mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm mb-6 animate-fade-in-up">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary/80 font-semibold">
              Spine Road, Moshi · 11:00 AM – 11:00 PM
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-tight tracking-tight text-primary animate-fade-in-up">
            Cafe Amora
            <br />
            <span className="text-accent font-accent italic font-medium text-4xl sm:text-5xl md:text-6xl block mt-2">
              Elegant Space, Exquisite Taste
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up [animation-delay:120ms]">
            Experience a curated sanctuary of artisanal coffee, gourmet continental creations, and premium hospitality in a luxurious, serene ambiance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:240ms]">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/95 shadow-glow rounded-full px-8 py-5 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all"
            >
              <a href="#menu">Explore Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8 py-5 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all"
            >
              <a href="#booking">Book A Table</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};