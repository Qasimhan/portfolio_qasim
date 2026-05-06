import { Globe, ShoppingBag, Bot, LayoutDashboard } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Modern, responsive websites built with React and Tailwind." },
  { icon: ShoppingBag, title: "E-commerce Stores", desc: "Custom online stores with cart, payments, and admin tools." },
  { icon: Bot, title: "Automation Tools", desc: "Web scrapers and bots that save hours of repetitive work." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Powerful dashboards with charts, tables, and analytics." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I <span className="gradient-text">Offer</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card-gradient border border-border rounded-2xl p-7 hover:border-primary/50 hover:-translate-y-2 transition-smooth"
            >
              <div className="h-14 w-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
