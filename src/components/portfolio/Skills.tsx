const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "MongoDB", level: 80 },
  { name: "Python", level: 82 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">My <span className="gradient-text">Tech Stack</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-smooth"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">{s.name}</span>
                <span className="text-primary font-semibold">{s.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-bg rounded-full transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
