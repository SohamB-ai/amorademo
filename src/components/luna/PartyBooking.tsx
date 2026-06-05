import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+0-9\s-]{7,15}$/, "Enter a valid phone"),
  date: z.string().min(1, "Pick a date"),
  size: z.coerce.number().min(1).max(500),
  message: z.string().trim().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export const PartyBooking = () => {
  const ref = useReveal<HTMLDivElement>();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", date: "", size: 4, message: "" },
  });

  const onSubmit = (_values: FormValues) => {
    toast.success("Inquiry received! We'll call you shortly to plan your event.");
    form.reset();
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-secondary/20">
      <div ref={ref} className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        {/* LEFT — Celebration Copy */}
        <div className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Book With Us</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
            Host Your <span className="text-accent italic font-accent font-medium">Special</span> Celebrations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From intimate birthday celebrations and social gatherings to premium corporate dinners, 
            we provide a sophisticated space, exquisite customizable menus, and elegant setups 
            to make your event truly memorable.
          </p>
          <ul className="space-y-3 text-foreground/80 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg font-bold">•</span> Customizable gourmet menus & dessert platters
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg font-bold">•</span> Reserved premium lounge zones for your guests
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg font-bold">•</span> Impeccable hospitality and aesthetic arrangements
            </li>
          </ul>
          <div className="pt-4">
            <a
              href="tel:+917498102847"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-amber px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition-opacity"
            >
              <Phone className="h-4 w-4" /> Call Us: 074981 02847
            </a>
          </div>
        </div>

        {/* RIGHT — Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Name</FormLabel>
                  <FormControl><Input placeholder="Your name" {...field} className="bg-background border-border focus:ring-accent" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="phone" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Phone</FormLabel>
                  <FormControl><Input placeholder="+91 ..." inputMode="tel" {...field} className="bg-background border-border focus:ring-accent" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="date" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Date</FormLabel>
                  <FormControl><Input type="date" {...field} className="bg-background border-border focus:ring-accent text-muted-foreground" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="size" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Party Size</FormLabel>
                  <FormControl><Input type="number" min={1} {...field} className="bg-background border-border focus:ring-accent" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField name="message" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">Message</FormLabel>
                <FormControl><Textarea placeholder="Tell us about your event details..." rows={4} {...field} className="bg-background border-border focus:ring-accent" /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl py-6 tracking-wide shadow-sm">
              Send Inquiry
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
