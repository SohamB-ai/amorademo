import { Instagram, MapPin, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-4">
        {/* Branding Column */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Cafe Amora Logo" className="h-16 w-auto rounded-full border border-primary/10 shadow-sm" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elegant Space. Exquisite Taste. Moshi's premier luxury cafe serving premium coffee, continental cuisines, and fine desserts.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-primary text-base">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-accent font-semibold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-bold text-primary text-base">Contact Us</h4>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground font-medium">
            <li className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-4 w-4 text-accent" /> 074981 02847
            </li>
            <li className="leading-relaxed">
              Shop No -14 & 15, L Axis commercial Centre,<br />
              Plot No 12, Spine Rd, PCNTDA, Sector No. 6,<br />
              Moshi, Pimpri-Chinchwad, Pune 412105
            </li>
            <li className="mt-2 text-primary font-semibold">
              Daily: 11:00 AM – 11:00 PM
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h4 className="font-bold text-primary text-base">Follow Us</h4>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Join us on social media for live updates and special offers.</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/cafeamora/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary hover:border-accent hover:text-accent shadow-sm transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.google.com/search?sca_esv=35896ee927ddd118&sxsrf=ANbL-n7qpUrzWi_sPYXEosWWsnXSJsVc_A%3A1780667752999&kgmid=%2Fg%2F11y_3nsc6p&q=Amora%20cafe&shem=dlvsc%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=adb07933e1cddb5a"
              target="_blank" rel="noopener noreferrer"
              aria-label="Google Maps"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary hover:border-accent hover:text-accent shadow-sm transition-colors"
            >
              <MapPin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Row */}
      <div className="container mx-auto mt-10 pt-6 border-t border-border/80 text-center text-xs text-muted-foreground font-semibold">
        © 2026 Cafe Amora. All rights reserved.
      </div>
    </footer>
  );
};
