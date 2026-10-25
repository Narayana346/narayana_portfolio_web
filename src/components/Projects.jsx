import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="space-y-8 scroll-mt-24" id="featured-projects">
      <div className="flex items-center gap-3">
        <span className="text-terminal-amber font-mono text-headline-md">{"{ }"}</span>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-headline-lg text-on-surface">
          Featured <span className="text-terminal-amber">Projects</span>
        </h2>
        <div className="h-[1px] bg-border-subtle flex-1 ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border-subtle bg-surface-card hover:border-primary/50 transition-all duration-300 overflow-hidden group"
          >
            <div className="bg-surface-container px-5 py-4 border-b border-border-subtle flex items-center justify-between gap-2">
              <div className={`flex items-center gap-2 font-mono text-label-sm font-label-sm ${project.serviceColor} min-w-0`}>
                <span className="material-symbols-outlined text-[16px] shrink-0">{project.serviceIcon}</span>
                <span className="truncate">{project.service}</span>
              </div>
              <span
                className={`shrink-0 px-2 py-0.5 rounded text-label-sm font-label-sm font-mono ${project.versionColor}`}
              >
                {project.version}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{project.desc}</p>
                <ul className="space-y-2 text-body-sm font-body-sm text-on-surface-variant font-mono text-[13px] pt-1">
                  {project.highlights.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border-subtle gap-2">
                  {project.code ? (
                    <a
                      className="text-code-cyan hover:text-primary transition-colors text-label-md font-label-md font-mono flex items-center gap-1.5"
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[16px]">code</span>
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-outline text-label-md font-label-md font-mono flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      <span>Private Repository</span>
                    </span>
                  )}
                  <span className="text-outline text-label-sm font-label-sm font-mono shrink-0">{project.status}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
