const CAPABILITIES = [
  {
    icon: "dns",
    iconBg: "bg-primary/10 text-primary",
    title: "Core Stack",
    desc: "Core Java (17/21), OOP, Concurrency, Spring Boot, Hibernate ORM, Maven build pipelines.",
  },
  {
    icon: "database",
    iconBg: "bg-secondary/10 text-secondary",
    title: "Databases & ORM",
    desc: "MySQL schemas, MongoDB document persistence, JDBC connection pools, indexing & query optimization.",
  },
  {
    icon: "api",
    iconBg: "bg-code-cyan/10 text-code-cyan",
    title: "API & Architecture",
    desc: "RESTful Web Services, JSON serialization, Spring Security JWT authentication, MVC clean layers.",
  },
  {
    icon: "terminal",
    iconBg: "bg-tertiary/10 text-tertiary",
    title: "Engineering Tooling",
    desc: "IntelliJ IDEA Ultimate, Eclipse IDE, VS Code, Git branching & pull request workflows, GitHub Actions.",
  },
];

// Doubled so the -50% translateX loop lands back on an identical frame.
const TRACK = [...CAPABILITIES, ...CAPABILITIES];

export default function CapabilityMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-1 rounded-xl group/marquee">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-surface-base to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-surface-base to-transparent z-10" />
      <div className="animate-marquee-scroll gap-4 items-stretch">
        {TRACK.map((cap, i) => (
          <div
            key={`${cap.title}-${i}`}
            className="w-[260px] sm:w-[300px] shrink-0 p-5 rounded-xl border border-border-subtle bg-surface-card hover:border-border-highlight transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`p-2 rounded material-symbols-outlined text-[20px] ${cap.iconBg}`}>{cap.icon}</span>
              <h4 className="text-[1.125rem] font-headline-md text-on-surface">{cap.title}</h4>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
