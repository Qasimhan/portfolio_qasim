import { Download, Mail, Github, Linkedin } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for freelance
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.05]">
            Hi, I'm <span className="gradient-text">Qasim Shabir</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            Full Stack Developer · MERN · Web Automation
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
            I craft fast, scalable web applications and automation tools that turn ideas
            into clean, beautiful, production-ready products.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow hover:scale-105 transition-smooth"
            >
              <Mail className="h-4 w-4" /> Hire Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-smooth"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Qasimhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-smooth">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/qasim-shabir-5b12582a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 gradient-bg blur-3xl opacity-40 rounded-full" />
            <div className="relative animate-float">
              <div className="absolute -inset-2 gradient-bg rounded-3xl opacity-60 blur" />
              <img
                src={avatar}
                alt="Qasim Shabir - Full Stack Developer"
                width={400}
                height={400}
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
