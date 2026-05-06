import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Founder, Khan Clothing",
    text: "Qasim built our entire e-commerce store from scratch. Fast, beautiful, and exactly what we needed.",
  },
  {
    name: "Sara Ali",
    role: "Product Manager",
    text: "Brilliant developer. He understands requirements deeply and delivers polished work on time.",
  },
  {
    name: "John Carter",
    role: "Startup CEO",
    text: "Our admin dashboard is a game-changer. Clean code, great UX, and excellent communication throughout.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold">Client <span className="gradient-text">Reviews</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-gradient border border-border rounded-2xl p-7 hover:border-primary/50 transition-smooth relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-11 w-11 rounded-full gradient-bg flex items-center justify-center font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
