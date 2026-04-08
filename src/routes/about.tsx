import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Flame, Heart, Users } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <img src={logo} alt="1010 Grilled Chicken" className="h-24 w-24 mx-auto rounded-full object-cover mb-6 border-4 border-primary" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-primary">1010 Grilled Chicken</span>
          </h1>
          <div className="flex items-center justify-center gap-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />)}
            <span className="text-muted-foreground ml-2">4.3★ rated on delivery platforms</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cuisine: Chicken · Braai · South African · Steakhouse · Grill
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Heart className="text-primary" /> Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nestled in the heart of Dube, Soweto, 1010 Grilled Chicken has been a beloved community restaurant serving up the finest flame-grilled chicken, succulent ribs, and hearty dolo (eisbein). What started as a neighbourhood spot has grown into one of Soweto's favourite dining destinations, known for authentic South African braai flavours and generous portions at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Flame size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Quality Ingredients</h3>
              <p className="text-sm text-muted-foreground">We source the freshest chicken, ribs, and produce daily to ensure every meal is top quality.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Users size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Flame-Grilled Tradition</h3>
              <p className="text-sm text-muted-foreground">Our open-flame grilling technique gives our food that authentic smoky taste you won't find anywhere else.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Heart size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Affordable Meals</h3>
              <p className="text-sm text-muted-foreground">Great food doesn't have to break the bank. We keep our prices fair so everyone can enjoy.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
