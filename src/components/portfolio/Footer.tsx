import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="text-xl font-display font-bold gradient-text">Qasim.dev</a>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Qasim Shabir. Built with <Heart className="inline h-3 w-3 fill-primary text-primary" /> in Pakistan.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/Qasimhan", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/qasim-shabir-5b12582a2", label: "LinkedIn" },
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:gradient-bg hover:text-primary-foreground transition-smooth"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
