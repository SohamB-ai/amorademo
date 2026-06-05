import { useState } from "react";
import { gallery } from "@/data/gallery";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useReveal } from "@/hooks/use-reveal";

export const Gallery = () => {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/20">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-primary">Moments at Cafe Amora</h2>
        </div>

        {/* TODO: Replace gallery images with real photos from Google Business Profile and Instagram @thelunadriveinnhyd */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((g) => (
            <button
              key={g.src}
              onClick={() => setActive(g.src)}
              className="group block w-full overflow-hidden rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-[0_0_25px_rgba(194,154,67,0.35)] hover:border-accent/40"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-border bg-card p-2">
          {active && <img src={active} alt="" className="w-full rounded-lg" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};
