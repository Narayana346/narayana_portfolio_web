import { useState } from "react";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#featured-projects", label: "Featured Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#", label: "Privacy" },
];

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-surface-container-lowest border-t border-border-subtle">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-headline-md font-headline-md font-bold text-on-surface font-mono flex items-center justify-center md:justify-start gap-2">
            <span className="text-code-cyan">&lt;NM</span>
            <span>/&gt;</span>
            <span className="text-body-sm font-label-sm font-mono text-terminal-amber">Narayana_Maharana</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md">
            © {year} Narayana Maharana. Designed for high-scale backend engineering. All rights
            reserved.
          </p>
          <p className="text-label-sm font-label-sm font-mono text-secondary">
            Keep Rising 🚀 | Bengaluru, Karnataka, India
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-label-sm font-label-sm">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-code-cyan transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
