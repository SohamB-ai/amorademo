import { useState } from "react";
import { Copy, Check, MapPin, Phone, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const ADDRESS = "Shop No -14 & 15, L Axis commercial Centre, Plot No 12, Spine Rd, PCNTDA, Sector No. 6, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 412105";
const PHONE = "074981 02847";

const timingCategories = [
  {
    title: "Cafe Hours",
    hours: [
      { d: "Mon – Sun", t: "11:00 AM – 11:00 PM" }
    ]
  }
];

const QUICK_ACTIONS = [
  {
    name: "Directions",
    url: "https://www.google.com/search?sca_esv=35896ee927ddd118&sxsrf=ANbL-n7qpUrzWi_sPYXEosWWsnXSJsVc_A%3A1780667752999&kgmid=%2Fg%2F11y_3nsc6p&q=Amora%20cafe&shem=dlvsc%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=adb07933e1cddb5a",
    icon: <ExternalLink className="h-4 w-4" />,
    label: "Get Directions",
  },
  {
    name: "Call",
    url: "tel:+917498102847",
    icon: <Phone className="h-4 w-4" />,
    label: "Call Now",
  },
];

export const FindUs = () => {
  const ref = useReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { }
  };

  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-primary text-primary-foreground">
      {/* Gold line highlights */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Visit & Contact</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white">
            Find <span className="text-accent italic font-accent font-medium">Cafe Amora</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* LEFT — Map and Quick Actions */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <iframe
                title="Cafe Amora Moshi location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2727653551576!2d73.84157077592476!3d18.662973165158694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7dfcd6b7381%3A0xe54e3d360055cb15!2sL%20Axis%20Commercial%20Centre!5e0!3m2!1sen!2sin!4v1717625000000!5m2!1sen!2sin"
                loading="lazy"
                className="h-[320px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              {QUICK_ACTIONS.map((action) => (
                <a
                  key={action.name}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 text-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent/20 transition-colors"
                >
                  {action.icon}
                  {action.label}
                </a>
              ))}
              <a
                href="https://wa.me/917498102847"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-emerald-400/10 text-emerald-400 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-400/20 transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Instagram CTA */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Button
                asChild
                variant="outline"
                className="w-full h-14 rounded-xl border-accent/30 bg-accent/5 hover:border-accent hover:bg-accent/15 text-white group"
              >
                <a href="https://www.instagram.com/amoracafe.pune/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  Follow @amoracafe.pune on Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT — Contact Info & Timing */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-accent text-lg sm:text-xl">Our Location</h3>
                  <p className="mt-2 text-white/80 leading-relaxed text-sm sm:text-base">{ADDRESS}</p>

                  <div className="mt-4 flex flex-col gap-1.5 text-sm sm:text-base font-semibold text-accent">
                    <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white transition-colors">
                      <Phone className="h-4 w-4" /> Call: {PHONE}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={copy}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs text-accent font-medium hover:bg-accent/15 transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy address"}
                  </button>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 space-y-6">
                <h3 className="font-bold text-white text-lg">Opening Hours</h3>
                {timingCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="font-bold text-accent text-xs uppercase tracking-wider mb-2">{category.title}</h4>
                    <table className="w-full text-sm sm:text-base">
                      <tbody>
                        {category.hours.map((h) => (
                          <tr key={h.d} className="border-b border-white/5 last:border-0">
                            <td className="py-3 text-white/70 font-medium">{h.d}</td>
                            <td className="py-3 text-right text-accent font-bold">{h.t}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-accent/10 p-4 border border-accent/20 text-center">
              <p className="text-xs sm:text-sm font-bold text-accent uppercase tracking-widest">
                Valet Parking & Wi-Fi Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
