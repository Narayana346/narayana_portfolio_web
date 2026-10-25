import { useState } from "react";

export default function ArchitectureVisualizer() {
  const [tab, setTab] = useState("arch");

  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 via-code-cyan/20 to-secondary/30 blur-xl opacity-60 group-hover:opacity-85 transition duration-500" />
      <div className="relative rounded-xl border border-border-highlight bg-surface-card/95 backdrop-blur-xl shadow-2xl overflow-hidden font-mono">
        {/* Window Header with Tab Switcher */}
        <div className="bg-surface-container-low px-3 sm:px-4 py-3 border-b border-border-subtle flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
              <span className="w-3 h-3 rounded-full bg-terminal-amber inline-block" />
              <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
            </span>
            <div className="flex items-center flex-wrap gap-1 bg-surface-base p-1 rounded-lg border border-border-subtle text-label-sm font-label-sm">
              <button
                type="button"
                className={`px-2.5 py-1 rounded transition-all duration-150 flex items-center gap-1.5 font-medium whitespace-nowrap ${
                  tab === "arch" ? "bg-surface-container text-code-cyan shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                }`}
                onClick={() => setTab("arch")}
              >
                <span className="material-symbols-outlined text-[14px]">account_tree</span>
                <span className="hidden sm:inline">Reference Architecture</span>
                <span className="sm:hidden">Architecture</span>
              </button>
              <button
                type="button"
                className={`px-2.5 py-1 rounded transition-all duration-150 flex items-center gap-1.5 font-medium whitespace-nowrap ${
                  tab === "code" ? "bg-surface-container text-code-cyan shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                }`}
                onClick={() => setTab("code")}
              >
                <span className="material-symbols-outlined text-[14px]">code</span>
                <span className="hidden sm:inline">ChatController.java</span>
                <span className="sm:hidden">Code</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container border border-border-subtle text-[11px] text-on-surface-variant font-mono">
              <span className="material-symbols-outlined text-[13px] text-code-cyan">travel_explore</span>
              Registry: Eureka
            </span>
            <span className="text-label-sm font-label-sm text-secondary flex items-center gap-1.5 font-mono bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>MATRIX ARCHITECTURE</span>
            </span>
          </div>
        </div>

        {tab === "arch" ? <ArchitectureTab /> : <CodeTab />}

        {/* Footer Status Strip */}
        <div className="bg-surface-container px-4 py-2.5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-label-sm font-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-code-cyan">memory</span>
            <span>Real service topology, illustrative runtime numbers</span>
          </span>
          <span className="text-secondary font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Maven: SUCCESS
          </span>
        </div>
      </div>
    </div>
  );
}

function ArchitectureTab() {
  return (
    <div className="p-4 sm:p-5 bg-[#0a0e18]/90 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3 text-label-sm font-mono text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="text-code-cyan font-semibold">MATRIX — AI CODE GEN AGENT</span>
          <span className="text-outline-variant">|</span>
          <span className="text-terminal-amber">7-Service Spring Cloud Mesh</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Eureka: 7/7 UP
          </span>
          <span className="text-outline-variant">•</span>
          <span className="text-primary-fixed-dim">Runner Pool: 3 idle</span>
        </div>
      </div>

      <div className="relative w-full rounded-lg bg-surface-container-lowest/80 border border-border-subtle p-3 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Layer 1: Client & Gateway */}
          <div className="md:col-span-3 space-y-3">
            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-code-cyan/60 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-outline uppercase tracking-wider font-mono">Ingress</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-code-cyan/15 text-code-cyan font-mono">HTTPS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-code-cyan">devices</span>
                <div>
                  <div className="text-[12px] font-bold text-on-surface">React + Vite Client</div>
                  <div className="text-[10px] text-on-surface-variant">REST + SSE chat stream</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center py-0.5 text-code-cyan">
              <span className="material-symbols-outlined text-[16px] animate-bounce">arrow_downward</span>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-container border border-code-cyan/40 hover:border-code-cyan transition-all shadow-[0_0_12px_rgba(34,211,238,0.12)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-code-cyan font-semibold">SPRING GATEWAY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-code-cyan">route</span>
                <div>
                  <div className="text-[12px] font-bold text-on-surface">Reactive WebFlux Proxy</div>
                  <div className="text-[10px] text-on-surface-variant">JWT Filter • Eureka-routed</div>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-border-subtle/60 flex items-center justify-between gap-2 text-[10px]">
                <span className="text-outline">Latency:</span>
                <span className="text-secondary font-mono">1.2ms</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-1 justify-center items-center h-full">
            <svg className="w-full h-44 overflow-visible" viewBox="0 0 40 180">
              <path className="flow-line-cyan" d="M 0 90 C 20 90, 20 30, 40 30" fill="none" stroke="#22D3EE" strokeWidth="2" />
              <path className="flow-line-green" d="M 0 90 L 40 90" fill="none" stroke="#4edea3" strokeWidth="2" />
              <path className="flow-line-amber" d="M 0 90 C 20 90, 20 150, 40 150" fill="none" stroke="#F59E0B" strokeWidth="2" />
            </svg>
          </div>

          {/* Layer 2: Services */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-primary transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">security</span>
                  <span className="text-[12px] font-bold text-on-surface">Account Service</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary-fixed-dim font-mono">
                  Auth + Stripe
                </span>
              </div>
              <div className="mt-1 text-[10px] text-on-surface-variant flex items-center justify-between gap-2">
                <span>JWT issue • Subscription plans</span>
                <span className="text-secondary font-mono">200 OK</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-container-high border-2 border-secondary/60 hover:border-secondary transition-all shadow-[0_0_15px_rgba(78,222,163,0.18)]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">folder_shared</span>
                  <span className="text-[12px] font-bold text-on-surface">Workspace Service</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary/15 text-secondary font-mono">REST + MinIO</span>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-on-surface-variant">
                <span className="px-1 rounded bg-surface-card border border-border-subtle text-code-cyan">Project</span>
                <span>→</span>
                <span className="px-1 rounded bg-surface-card border border-border-subtle text-terminal-amber">Files</span>
                <span>→</span>
                <span className="px-1 rounded bg-surface-card border border-border-subtle text-secondary">K8s Deploy</span>
              </div>
              <div className="mt-2 pt-1 border-t border-border-subtle flex items-center justify-between gap-2 text-[10px]">
                <span className="text-outline">RBAC:</span>
                <span className="text-code-cyan font-mono font-medium">Owner / Editor / Viewer</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-terminal-amber transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-terminal-amber">smart_toy</span>
                  <span className="text-[12px] font-bold text-on-surface">Intelligence Service</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-terminal-amber/10 text-terminal-amber font-mono">
                  Spring AI
                </span>
              </div>
              <div className="mt-1 text-[10px] text-on-surface-variant flex items-center justify-between gap-2">
                <span>Tool-call: read_files • file-tree context</span>
                <span className="text-secondary font-mono">SSE</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-1 justify-center items-center h-full">
            <svg className="w-full h-44 overflow-visible" viewBox="0 0 40 180">
              <path className="flow-line-cyan" d="M 0 35 L 40 35" fill="none" stroke="#22D3EE" strokeWidth="2" />
              <path className="flow-line-green" d="M 0 90 L 40 90" fill="none" stroke="#4edea3" strokeWidth="2" />
              <path className="flow-line-amber" d="M 0 145 L 40 145" fill="none" stroke="#F59E0B" strokeWidth="2" />
            </svg>
          </div>

          {/* Layer 3: Data */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-tertiary transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">database</span>
                  <span className="text-[12px] font-bold text-on-surface">PostgreSQL</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-tertiary/15 text-tertiary font-mono">Hibernate</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2 text-[10px] font-mono">
                <span className="text-outline shrink-0">DBs:</span>
                <span className="text-secondary truncate">account/workspace/intel</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-[#EF4444] transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#EF4444]">bolt</span>
                  <span className="text-[12px] font-bold text-on-surface">Redis</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EF4444]/15 text-[#ff8f8f] font-mono">Route Cache</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2 text-[10px] font-mono">
                <span className="text-outline">project → pod IP:</span>
                <span className="text-secondary font-semibold">TTL 6h</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-terminal-amber transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-terminal-amber">sync_alt</span>
                  <span className="text-[12px] font-bold text-on-surface">Kafka</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-terminal-amber/15 text-terminal-amber font-mono">
                  Saga Events
                </span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2 text-[10px] font-mono">
                <span className="text-outline truncate">file-storage-request/response</span>
                <span className="text-code-cyan shrink-0">0 lag</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-[11px] font-mono text-on-surface-variant flex items-center gap-2">
          <span className="text-terminal-amber font-semibold">ASYNC</span>
          <span className="text-outline-variant">|</span>
          <span>Durable Writes &amp; Live Preview Infra</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-terminal-amber/60 transition-all">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[16px] text-terminal-amber">fact_check</span>
              <span className="text-[12px] font-bold text-on-surface">Kafka Saga</span>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              LLM file edits are published as events; a saga handler confirms or fails each write
              idempotently once MinIO storage acks back.
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle hover:border-code-cyan/60 transition-all">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[16px] text-code-cyan">deployed_code</span>
              <span className="text-[12px] font-bold text-on-surface">K8s Runner Pool</span>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">
              Warm pods are claimed per project, synced from MinIO via <code>mc mirror</code> and run
              <code> npm run dev</code> — routed through a proxy at project-&lt;id&gt;.domain.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
        <div className="p-2 rounded bg-surface-container border border-border-subtle flex items-center justify-between gap-2">
          <span className="text-outline">Services Up:</span>
          <span className="text-on-surface font-semibold">7 / 7</span>
        </div>
        <div className="p-2 rounded bg-surface-container border border-border-subtle flex items-center justify-between gap-2">
          <span className="text-outline">Kafka Lag:</span>
          <span className="text-secondary font-semibold">0 msgs</span>
        </div>
        <div className="p-2 rounded bg-surface-container border border-border-subtle flex items-center justify-between gap-2">
          <span className="text-outline">Idle Runners:</span>
          <span className="text-code-cyan font-semibold">3 pods</span>
        </div>
        <div className="p-2 rounded bg-surface-container border border-border-subtle flex items-center justify-between gap-2">
          <span className="text-outline">Actuator:</span>
          <span className="text-secondary font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> UP
          </span>
        </div>
      </div>
    </div>
  );
}

function CodeTab() {
  return (
    <div className="p-5 text-label-md font-label-md overflow-x-auto space-y-1.5 leading-relaxed bg-[#0a0e18]/80 font-mono">
      <p className="text-outline-variant font-mono">{"// Intelligence Service — SSE code-gen stream"}</p>
      <p>
        <span className="text-primary-fixed-dim">@RestController</span>
      </p>
      <p>
        <span className="text-primary-fixed-dim">@RequestMapping</span>(<span className="text-code-cyan">&quot;/chat&quot;</span>)
      </p>
      <p className="text-on-surface">
        <span className="text-tertiary">public class</span> <span className="text-terminal-amber">ChatController</span> {"{"}
      </p>
      <p className="pl-4 text-on-surface-variant">
        <span className="text-tertiary">private final</span> AiGenerationService <span className="text-on-surface">aiGenerationService</span>;
      </p>
      <br />
      <p className="pl-4">
        <span className="text-primary-fixed-dim">@PostMapping</span>(value = <span className="text-code-cyan">&quot;/stream&quot;</span>, produces = MediaType.<span className="text-secondary">TEXT_EVENT_STREAM_VALUE</span>)
      </p>
      <p className="pl-4">
        <span className="text-tertiary">public</span> Flux&lt;ServerSentEvent&lt;StreamResponse&gt;&gt; <span className="text-secondary">streamChat</span>(
      </p>
      <p className="pl-8 text-on-surface-variant">
        <span className="text-primary-fixed-dim">@RequestBody</span> ChatRequest request) {"{"}
      </p>
      <p className="pl-8 text-on-surface-variant">
        <span className="text-tertiary">return</span> aiGenerationService
      </p>
      <p className="pl-10 text-on-surface-variant">
        .<span className="text-code-cyan">streamResponse</span>(request.message(), request.projectId())
      </p>
      <p className="pl-10 text-on-surface-variant">
        .<span className="text-code-cyan">map</span>(data -&gt; ServerSentEvent.&lt;StreamResponse&gt;builder().<span className="text-secondary">data</span>(data).<span className="text-secondary">build</span>());
      </p>
      <p className="pl-4 text-on-surface">{"}"}</p>
      <p className="text-on-surface">{"}"}</p>
      <br />
      <p className="text-outline-variant font-mono">{"// AiGenerationServiceImpl — tool-calling + file-tree context"}</p>
      <p className="text-on-surface-variant">
        chatClient.prompt()
      </p>
      <p className="pl-4 text-on-surface-variant">
        .<span className="text-code-cyan">system</span>(PromptUtils.<span className="text-secondary">CODE_GENERATION_SYSTEM_PROMPT</span>)
      </p>
      <p className="pl-4 text-on-surface-variant">
        .<span className="text-code-cyan">tools</span>(<span className="text-terminal-amber">codeGenerationTools</span>) <span className="text-outline-variant">{"// read_files tool"}</span>
      </p>
      <p className="pl-4 text-on-surface-variant">
        .<span className="text-code-cyan">advisors</span>(fileTreeContextAdvisor) <span className="text-outline-variant">{"// injects FILE_TREE"}</span>
      </p>
      <p className="pl-4 text-on-surface-variant">
        .<span className="text-code-cyan">stream</span>().<span className="text-code-cyan">chatResponse</span>();
      </p>
    </div>
  );
}
