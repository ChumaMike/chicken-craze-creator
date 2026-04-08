import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Get in touch or visit us at our Dube, Soweto location
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">2231 Mahalefele Road, Dube, Soweto</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">Contact us for details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Operating Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Sunday: 8:00 – 18:45</p>
                    <p>Mon – Thu: 9:30 – 18:30</p>
                    <p>Fri – Sat: 8:00 – 18:45</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://www.ubereats.com/za/store/1010-grilled-chicken-dube/I6jtNtoXUYarTAKykCYGhA" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-bold text-center hover:bg-primary/90 transition-colors">
                Uber Eats
              </a>
              <a href="https://www.mrd.com/delivery/restaurant/1010-grilled-chicken-dube-soweto/34043" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-bold text-center hover:bg-primary/90 transition-colors">
                Mr D
              </a>
            </div>

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

          <div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Send a Message</h2>
              {sent ? (
                <div className="text-center py-12">
                  <Send size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="text-primary text-sm mt-4 underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
