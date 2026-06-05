import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Minimum 2 seconds to show the animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Completely remove from DOM after fade animation
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out",
        !loading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Logo in center */}
        <div className={cn(
          "relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl transition-transform duration-1000",
          loading ? "scale-100" : "scale-110"
        )}>
          <img
            src="/logo.png"
            alt="Amora Cafe"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Loading Bar */}
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-indeterminate-bar" />
        </div>
      </div>
    </div>
  );
};
