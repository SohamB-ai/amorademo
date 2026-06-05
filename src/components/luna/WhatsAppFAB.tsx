import { MessageCircle } from "lucide-react";

export const WhatsAppFAB = () => (
  <a
    href="https://wa.me/917498102847"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-xl animate-glow-pulse hover:scale-105 transition-transform"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
