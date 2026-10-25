import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#featured-projects", label: "Featured Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-surface-base/80 backdrop-blur-md sticky top-0 z-50 border-b border-border-subtle">
      <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-4">
        <a
          className="text-headline-md font-headline-md font-bold tracking-tight text-on-surface font-mono flex items-center gap-2 group"
          href="#"
        >
          <span className="text-code-cyan group-hover:text-primary transition-colors">&lt;NM</span>
          <span className="text-on-surface">/&gt;</span>
          <span className="hidden sm:inline-block text-body-sm font-label-md px-2 py-0.5 rounded bg-surface-container-high border border-border-subtle text-on-surface-variant font-mono">
            dev.spring
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-on-surface font-medium transition-colors text-label-md font-label-md"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded border border-transparent hover:border-border-subtle transition-all duration-200"
            href="https://github.com/Narayana346"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <GitHubIcon />
          </a>
          <a
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded border border-transparent hover:border-border-subtle transition-all duration-200"
            href="https://www.linkedin.com/in/narayan-maharan"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
          <a
            className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-fixed-dim transition-all duration-200 active:scale-95 px-4 py-2 rounded text-label-md font-label-md font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
            href="/assets/Narayana_Maharana_Resume.pdf"
            download
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
