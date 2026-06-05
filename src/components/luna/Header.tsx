import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo — compact */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="Cafe Amora"
            className="h-10 w-10 rounded-full object-cover border border-accent/30 transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline font-display text-xl text-primary tracking-tight">
            Cafe Amora
          </span>
        </a>

        {/* Desktop nav links — minimal */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative text-[13px] tracking-wide font-medium transition-colors py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — small, gold accent */}
        <a
          href="#booking"
          className="hidden md:inline-flex items-center rounded-full bg-accent text-white text-xs font-semibold tracking-wide px-5 py-2 hover:bg-accent/90 transition-colors shadow-sm"
        >
          Book a Table
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur-lg">
          <ul className="container mx-auto flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-foreground/80 hover:text-accent font-medium border-b border-border/30 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-accent text-white text-sm font-semibold py-2.5 hover:bg-accent/90 transition-colors"
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};