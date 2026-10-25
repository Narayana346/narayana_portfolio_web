import ArchitectureVisualizer from "./ArchitectureVisualizer";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      {/* Left Narrative Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-border-subtle shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
          </span>
          <span className="text-label-sm font-label-sm text-secondary tracking-wider uppercase font-mono">
            Available for Opportunities
          </span>
          <span className="text-outline-variant hidden sm:inline">|</span>
          <span className="hidden sm:flex text-label-sm font-label-sm text-on-surface-variant items-center gap-1 font-mono">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Bengaluru, Karnataka, India
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-label-md font-label-md text-code-cyan font-mono tracking-widest uppercase">Hi I am ,</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface whitespace-nowrap sm:whitespace-normal">
            Narayana_<span className="text-terminal-amber">Maharana</span>
          </h1>
          <p className="text-headline-md font-headline-md text-on-surface-variant font-mono">
            I Am Into{" "}
            <span className="text-code-cyan border-b-2 border-code-cyan/60 pb-0.5">
              Back-End System Architecture
            </span>
          </p>
        </div>

        <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed max-w-xl">
          Java Backend Developer with 3+ years building scalable microservices and RESTful APIs
          with Spring Boot, Hibernate and SQL — across fintech and ERP platforms, with a focus on
          backend performance optimization and clean code practices. Currently building LLM-powered
          developer tools with Spring AI — RAG over vector databases, tool-calling agents, and
          Kafka-driven async pipelines.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-label-sm font-label-sm">
          <div className="px-3 py-1.5 rounded bg-surface-container border border-border-subtle text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[15px]">mail</span>
            <span>maharanan14@gmail.com</span>
          </div>
          <div className="px-3 py-1.5 rounded bg-surface-container border border-border-subtle text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[15px]">call</span>
            <span>+91 6370942090</span>
          </div>
          <div className="px-3 py-1.5 rounded bg-surface-container border border-border-subtle text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[15px]">badge</span>
            <span>Age: 22</span>
          </div>
          <div className="px-3 py-1.5 rounded bg-surface-container border border-border-subtle text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-terminal-amber text-[15px]">smart_toy</span>
            <span>Spring AI / LLM</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-primary text-on-primary font-headline-md text-body-md font-semibold hover:bg-primary-fixed-dim transition-all duration-200 active:scale-95 shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            href="#featured-projects"
          >
            <span>Explore Projects</span>
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-high border border-border-subtle text-on-surface hover:border-border-highlight hover:bg-surface-card-hover transition-all duration-200 active:scale-95 text-body-md font-medium"
            href="#about"
          >
            <span>About Me</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-4 py-3 rounded text-on-surface-variant hover:text-code-cyan transition-colors text-body-md font-mono"
            href="/assets/Narayana_Maharana_Resume.pdf"
            download
          >
            <span>View Resume</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Right: Architecture Visualizer */}
      <div className="lg:col-span-7 min-w-0">
        <ArchitectureVisualizer />
      </div>
    </section>
  );
}
