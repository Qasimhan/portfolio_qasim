import { Code2, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "15+" },
  { icon: Rocket, label: "Years Coding", value: "3+" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Passionate about <span className="gradient-text">building</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a student and self-driven <span className="text-foreground font-medium">MERN Stack Developer</span> who
              loves transforming ideas into real-world digital products.
            </p>
            <p>
              From e-commerce platforms to admin dashboards and automation tools, I focus on writing clean,
              maintainable code and delivering experiences users love.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open source, or learning
              about web automation and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-gradient border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
