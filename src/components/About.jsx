import { experience } from "../data/experience";
import CapabilityMarquee from "./CapabilityMarquee";

const FACTS = [
  { icon: "badge", color: "text-tertiary", value: "Age: 22" },
  { icon: "location_on", color: "text-secondary", value: "Bengaluru, Karnataka, India" },
  { icon: "mail", color: "text-primary", value: "maharanan14@gmail.com" },
  { icon: "call", color: "text-secondary", value: "+91 6370942090" },
];

export default function About() {
  return (
    <section className="space-y-8 scroll-mt-24" id="about">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-terminal-amber font-mono text-headline-md">#</span>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-headline-lg text-on-surface">
          About &amp; <span className="text-terminal-amber">Experience</span>
        </h2>
        <div className="h-[1px] bg-border-subtle flex-1 ml-4 min-w-[2rem]" />
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-border-subtle text-label-sm font-label-sm font-mono text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span>PROFILE &amp; BACKGROUND</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Portrait & Personal Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group rounded-xl overflow-hidden border border-border-subtle bg-surface-card p-3 shadow-lg">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-tr from-surface-container to-surface-container-high relative">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                alt="Narayana Maharana"
                src="/assets/images/Arjun_protfolio.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60" />
            </div>
            <div className="pt-4 px-2 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-headline-md font-headline-md text-on-surface">Narayana Maharana</span>
                <span className="shrink-0 px-2 py-0.5 rounded text-label-sm font-label-sm bg-primary/20 text-primary-fixed-dim font-mono">
                  BE / B.Tech
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-code-cyan font-mono">Java Backend Developer</p>

              <div className="flex flex-wrap items-center gap-2 pt-3 font-mono text-label-sm font-label-sm">
                {FACTS.map((fact) => (
                  <div
                    key={fact.value}
                    className="px-2.5 py-1 rounded bg-surface-container border border-border-subtle text-on-surface-variant flex items-center gap-1.5"
                  >
                    <span className={`material-symbols-outlined text-[14px] ${fact.color}`}>{fact.icon}</span>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary-fixed-dim transition-all duration-200 px-5 py-2.5 rounded font-label-md text-label-md font-semibold active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                  href="/assets/Narayana_Maharana_Resume.pdf"
                  download
                >
                  <span>Download Resume</span>
                  <span className="material-symbols-outlined text-[16px]">download</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Career Journey */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-xl border border-border-subtle bg-surface-card/90 backdrop-blur-md p-6 space-y-6" id="experience">
            <div className="flex items-center justify-between gap-2 border-b border-border-subtle pb-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-symbols-outlined text-terminal-amber text-[20px] shrink-0">history_edu</span>
                <h3 className="text-[1.25rem] font-headline-md text-on-surface truncate">Career Journey &amp; Education</h3>
              </div>
              <span className="text-label-sm font-label-sm font-mono text-outline shrink-0">TIMELINE</span>
            </div>

            <div className="relative border-l border-border-highlight ml-3 pl-6 space-y-6">
              {experience.map((item) => (
                <div className="relative group" key={item.title}>
                  <span
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-surface-base ${item.dot}`}
                  />
                  <div className="rounded-lg border border-border-subtle bg-surface-container-lowest p-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-[1.125rem] font-headline-md text-on-surface">{item.title}</h4>
                      <span
                        className={`shrink-0 text-label-sm font-label-sm font-mono ${item.badgeColor} bg-surface-container px-2.5 py-0.5 rounded border border-border-subtle w-fit`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className={`text-body-sm font-body-sm font-mono flex items-center gap-1 ${item.placeColor}`}>
                      <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                      <span>{item.place}</span>
                    </p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width capability row */}
      <CapabilityMarquee />
    </section>
  );
}
