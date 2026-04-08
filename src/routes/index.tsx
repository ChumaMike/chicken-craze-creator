import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Flame, Leaf, DollarSign, UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const popularPicks = [
  { name: "Full Chicken Meal", desc: "Full flame-grilled chicken with 2 pap & salad", price: "R224" },
  { name: "Full Dolo (Eisbein)", desc: "Hearty full eisbein, slow-cooked to perfection", price: "R152" },
  { name: "300g Ribs", desc: "Tender flame-grilled ribs with smoky flavour", price: "R102" },
  { name: "Half Chicken Meal", desc: "Half chicken served with pap & salad", price: "R125" },
];

const features = [
  { icon: Flame, title: "Flame-Grilled", desc: "Authentic fire-cooked flavour" },
  { icon: Leaf, title: "Fresh Daily", desc: "Quality ingredients every day" },
  { icon: DollarSign, title: "Affordable Prices", desc: "Great food, great value" },
  { icon: UtensilsCrossed, title: "Dine-in & Takeaway", desc: "Your choice, your way" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-card" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.705 0.191 41.116 / 0.3), transparent 70%)" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="1010 Grilled Chicken" className="h-32 w-32 mx-auto rounded-full object-cover mb-6 border-4 border-primary shadow-lg shadow-primary/20" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-primary">Flame-Grilled</span> Perfection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Serving Soweto's finest flame-grilled chicken, ribs & dolo since day one. Located at 2231 Mahalefele Road, Dube, Soweto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors">
              View Our Menu
            </Link>
            <a href="https://www.ubereats.com/za/store/1010-grilled-chicken-dube/I6jtNtoXUYarTAKykCYGhA" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary/10 transition-colors">
              Order Online
            </a>
          </div>
          <div className="flex items-center justify-center gap-1 mt-6 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />)}
            <span className="text-muted-foreground text-sm ml-2">4.3 rating on delivery platforms</span>
          </div>
        </div>
      </section>

      {/* Popular Picks */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular <span className="text-primary">Picks</span></h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Our most loved dishes, straight from the flames to your plate</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPicks.map((item) => (
            <div key={item.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-2 mb-3">
                <Flame size={20} className="text-primary" />
                <span className="text-xl font-bold text-primary">{item.price}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose <span className="text-primary">Us</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Banner */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, oklch(0.705 0.191 41.116 / 0.15), oklch(0.705 0.191 41.116 / 0.05))" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Order <span className="text-primary">Now</span></h2>
          <p className="text-muted-foreground mb-8">Get your favourite flame-grilled meals delivered to your door</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.ubereats.com/za/store/1010-grilled-chicken-dube/I6jtNtoXUYarTAKykCYGhA" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
              Order on Uber Eats
            </a>
            <a href="https://www.mrd.com/delivery/restaurant/1010-grilled-chicken-dube-soweto/34043" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
              Order on Mr D
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Clock className="text-primary" /> Operating Hours</h2>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between border-b border-border pb-3"><span className="text-muted-foreground">Sunday</span><span className="font-semibold">8:00 – 18:45</span></div>
              <div className="flex justify-between border-b border-border pb-3"><span className="text-muted-foreground">Monday – Thursday</span><span className="font-semibold">9:30 – 18:30</span></div>
              <div className="flex justify-between border-b border-border pb-3"><span className="text-muted-foreground">Friday – Saturday</span><span className="font-semibold">8:00 – 18:45</span></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><MapPin className="text-primary" /> Find Us</h2>
            <p className="text-muted-foreground mb-4">2231 Mahalefele Road, Dube, Soweto</p>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.88!3d-26.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzI0LjAiUyAyN8KwNTInNDguMCJF!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1010 Grilled Chicken Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
