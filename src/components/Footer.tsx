import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="1010 Grilled Chicken" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-lg font-bold text-primary">1010 Grilled Chicken</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Serving Soweto's finest flame-grilled chicken, ribs & dolo since day one.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Sun: 8:00 – 18:45</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Mon–Thu: 9:30 – 18:30</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Fri–Sat: 8:00 – 18:45</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> 2231 Mahalefele Road, Dube, Soweto</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-primary" /> Contact us for details</div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.ubereats.com/za/store/1010-grilled-chicken-dube/I6jtNtoXUYarTAKykCYGhA" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded font-semibold hover:bg-primary/90 transition-colors">Uber Eats</a>
              <a href="https://www.mrd.com/delivery/restaurant/1010-grilled-chicken-dube-soweto/34043" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded font-semibold hover:bg-primary/90 transition-colors">Mr D</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 1010 Grilled Chicken Dube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
