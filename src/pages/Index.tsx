import { Header } from "@/components/luna/Header";
import { Hero } from "@/components/luna/Hero";
import { About } from "@/components/luna/About";
import { MenuSection } from "@/components/luna/MenuSection";
import { USPs } from "@/components/luna/USPs";
import { Gallery } from "@/components/luna/Gallery";
import { Testimonials } from "@/components/luna/Testimonials";
import { PartyBooking } from "@/components/luna/PartyBooking";
import { FindUs } from "@/components/luna/FindUs";
import { Footer } from "@/components/luna/Footer";
import { WhatsAppFAB } from "@/components/luna/WhatsAppFAB";
import { Preloader } from "@/components/luna/Preloader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <USPs />
        <Gallery />
        <Testimonials />
        <PartyBooking />
        <FindUs />
      </main>
      <Footer />
      <WhatsAppFAB />

      {/* SEO: Restaurant JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Cafe Amora",
            image: "/cafe-insides.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shop No -14 & 15, L Axis commercial Centre, Plot No 12, Spine Rd, PCNTDA, Sector No. 6, Moshi",
              addressLocality: "Pimpri-Chinchwad, Pune",
              addressRegion: "Maharashtra",
              postalCode: "412105",
              addressCountry: "IN",
            },
            servesCuisine: ["Cafe", "Coffee", "Continental", "Desserts", "Pizza", "Burgers"],
            priceRange: "₹₹",
            telephone: "+91-7498102847",
            openingHours: "Mo-Su 11:00-23:00",
          }),
        }}
      />
    </div>
  );
};

export default Index;
