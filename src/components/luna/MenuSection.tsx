import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { useReveal } from "@/hooks/use-reveal";

export const MenuSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState(menu[0]?.id || "chinese");

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-secondary/20">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Eat & Sip</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-primary">
            Our <span className="text-accent italic font-accent font-medium">Curated</span> Menu
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Savor our handcrafted coffee, gourmet continental bites, and fresh delicacies.{" "}
            <span className="block mt-2 text-sm font-semibold text-primary/80">Average Price: ₹200 – ₹500 per item</span>
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center">
              <TabsList className="bg-background/80 border border-primary/10 p-1.5 rounded-full flex flex-wrap justify-center h-auto max-w-full">
                {menu.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menu.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-10 animate-fade-in-up">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-glow hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3.5 py-1 rounded-full border-2 border-white shadow-md">
                          <span className="text-sm font-bold">₹{item.price}</span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Would you like to experience it in person?</p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-5 text-sm font-semibold uppercase tracking-wider shadow-sm transition-all">
            <a href="#visit">Get Location & Directions</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
