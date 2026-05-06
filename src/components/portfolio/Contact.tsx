import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's <span className="gradient-text">Work Together</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-5">
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
            </p>
            {[
              { icon: Mail, label: "Email", value: "qasimkhanswathi456@gmail.com", href: "mailto:qasimkhanswathi456@gmail.com" },
              { icon: Phone, label: "Phone", value: "0334 8940580", href: "tel:+923348940580" },
              { icon: MapPin, label: "Location", value: "Pakistan" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 card-gradient border border-border rounded-xl p-4 hover:border-primary/50 transition-smooth">
                <div className="h-11 w-11 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="card-gradient border border-border rounded-2xl p-7 space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input required type="text" className="w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-smooth" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input required type="email" className="w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-smooth" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Message</label>
              <textarea required rows={4} className="w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-smooth resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow hover:scale-[1.02] transition-smooth">
              {sent ? "Message Sent!" : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
