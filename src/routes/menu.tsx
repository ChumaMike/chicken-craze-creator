import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

type Category = "all" | "chicken" | "ribs" | "dolo" | "sides";

const menuItems = [
  { category: "chicken" as const, name: "Full Chicken", price: "R172", desc: "Whole flame-grilled chicken, golden and juicy" },
  { category: "chicken" as const, name: "Half Chicken", price: "R102", desc: "Half a flame-grilled chicken, perfect portion" },
  { category: "chicken" as const, name: "1/4 Chicken", price: "R53", desc: "Quarter chicken, great for a quick meal" },
  { category: "chicken" as const, name: "Full Chicken Meal", price: "R224", desc: "Full chicken served with 2 pap & salad" },
  { category: "chicken" as const, name: "Half Chicken Meal", price: "R125", desc: "Half chicken with pap & salad" },
  { category: "chicken" as const, name: "1/4 Chicken Meal", price: "R79", desc: "Quarter chicken with pap & salad" },
  { category: "ribs" as const, name: "600g Ribs", price: "R182", desc: "Generous portion of smoky flame-grilled ribs" },
  { category: "ribs" as const, name: "300g Ribs", price: "R102", desc: "Tender ribs with rich smoky flavour" },
  { category: "ribs" as const, name: "Chips & Russian", price: "R82", desc: "Classic chips paired with a hearty Russian sausage" },
  { category: "dolo" as const, name: "Full Dolo (Eisbein)", price: "R152", desc: "Full eisbein, slow-cooked and tender" },
  { category: "dolo" as const, name: "Half Dolo (Eisbein)", price: "R79", desc: "Half portion of our famous dolo" },
  { category: "sides" as const, name: "Pap", price: "R15", desc: "Traditional South African maize porridge" },
  { category: "sides" as const, name: "Chips", price: "R30", desc: "Golden crispy chips" },
  { category: "sides" as const, name: "Salad", price: "R15", desc: "Fresh garden salad" },
  { category: "sides" as const, name: "Atchaar", price: "R20", desc: "Spicy pickled mango condiment" },
  { category: "sides" as const, name: "Chilli Sauce", price: "R15", desc: "Hot chilli sauce for extra kick" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "chicken", label: "Chicken" },
  { value: "ribs", label: "Ribs" },
  { value: "dolo", label: "Dolo (Eisbein)" },
  { value: "sides", label: "Sides" },
];

function MenuPage() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Our <span className="text-primary">Menu</span>
        </h1>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Fresh, flame-grilled and made with love. All prices in South African Rands.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold">{item.category}</span>
                <span className="text-xl font-bold text-primary">{item.price}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Flame size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
