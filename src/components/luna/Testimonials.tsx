import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export const Testimonials = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-primary text-primary-foreground">
      {/* Gold line highlights */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Reviews</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white">
            What Our <span className="text-accent italic font-accent font-medium">Guests</span> Say
          </h2>
          
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-5 py-2">
            <span className="font-display text-2xl text-accent font-bold">4.3</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-accent text-accent" : "text-accent/20"}`} />
              ))}
            </div>
            <span className="text-sm text-white/80 font-semibold">106+ Google reviews</span>
          </div>
        </div>

        <div className="mt-12 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x gap-5 pb-2">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-neon hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-amber font-bold text-primary-foreground text-sm uppercase">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white">{r.name}</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-accent text-accent" : "text-white/20"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-white/80 leading-relaxed text-sm sm:text-base italic">
                    "{r.text}"
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-accent/50 text-white hover:bg-accent/20 bg-accent/5 rounded-full px-8 py-5 text-sm font-semibold uppercase tracking-wider transition-all">
            <a 
              href="https://www.google.com/search?sca_esv=35896ee927ddd118&sxsrf=ANbL-n7qpUrzWi_sPYXEosWWsnXSJsVc_A%3A1780667752999&kgmid=%2Fg%2F11y_3nsc6p&q=Amora%20cafe&shem=dlvsc%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=adb07933e1cddb5a" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
