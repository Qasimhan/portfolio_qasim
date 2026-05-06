import { ExternalLink, Github } from "lucide-react";
import khan from "@/assets/project-khan.jpg";
import car from "@/assets/project-rentcar.jpg";
import quiz from "@/assets/project-quiz.jpg";

const projects = [
  {
    title: "Khan Clothing",
    description: "Full-featured e-commerce store with cart, checkout, admin panel and Stripe-ready payments.",
    image: khan,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Rent a Car System",
    description: "Booking platform with availability calendar, user dashboard, and admin fleet management.",
    image: car,
    tags: ["MERN", "Express", "JWT"],
  },
  {
    title: "Quiz System",
    description: "Interactive online quiz app with timed questions, scoring, and result analytics.",
    image: quiz,
    tags: ["React", "Tailwind", "API"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="gradient-text">Work</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group card-gradient border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-2 transition-smooth shadow-elegant"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="inline-flex items-center gap-1.5 gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-smooth">
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-smooth">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
