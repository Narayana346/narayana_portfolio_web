import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="space-y-8 scroll-mt-24" id="tech-stack">
      <div className="flex items-center gap-3">
        <span className="text-terminal-amber font-mono text-headline-md">&lt;/&gt;</span>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-headline-lg text-on-surface">
          Tech <span className="text-terminal-amber">Stack</span>
        </h2>
        <div className="h-[1px] bg-border-subtle flex-1 ml-4" />
      </div>

      <div className="rounded-xl border border-border-subtle bg-surface-card/90 backdrop-blur-md p-5 sm:p-6 lg:p-8 space-y-8">
        {skillGroups.map((group) => (
          <div className="space-y-3" key={group.title}>
            <div className={`flex items-center gap-2 text-label-sm font-label-sm uppercase tracking-wider font-mono ${group.accent}`}>
              <span className="material-symbols-outlined text-[16px]">{group.icon}</span>
              <span>{group.title}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg bg-surface-container-lowest border border-border-subtle transition-all duration-200 group text-center ${skill.border}`}
                >
                  <span className={`material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform ${skill.color}`}>
                    {skill.icon}
                  </span>
                  <span className="mt-2 text-label-sm font-label-sm font-mono text-on-surface">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
