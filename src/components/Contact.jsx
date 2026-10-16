import { useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const CONTACT_EMAIL = "maharanan14@gmail.com";
const EMPTY_FORM = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill in your name, email and message." });
      return;
    }

    const subject = encodeURIComponent(`Message from ${form.name} via portfolio`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "-"}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus({ type: "success", text: "Opening your email client to send the message…" });
    setForm(EMPTY_FORM);
  };

  return (
    <section className="space-y-8 scroll-mt-24" id="contact">
      <div className="flex items-center gap-3">
        <span className="text-terminal-amber font-mono text-headline-md">@</span>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-headline-lg text-on-surface">
          Get In <span className="text-terminal-amber">Touch</span>
        </h2>
        <div className="h-[1px] bg-border-subtle flex-1 ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Contact */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-border-subtle bg-surface-card/90 backdrop-blur-md p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-headline-md font-headline-md text-on-surface">Let&apos;s Build Something High-Scale</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Whether you have an open Java backend position, a technical query, or want to discuss
                Spring Boot architecture, my inbox is always open.
              </p>
            </div>

            <div className="space-y-3 font-mono">
              <div className="p-4 rounded-lg bg-surface-container-lowest border border-border-subtle flex items-center justify-between gap-2 group hover:border-primary transition-colors">
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <span className="p-2 rounded bg-primary/10 text-primary material-symbols-outlined text-[20px] shrink-0">
                    mail
                  </span>
                  <div className="truncate">
                    <p className="text-label-sm font-label-sm text-outline">DIRECT EMAIL</p>
                    <p className="text-body-sm font-body-sm text-on-surface truncate">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <a
                  className="p-2 text-on-surface-variant hover:text-primary transition-colors shrink-0"
                  href={`mailto:${CONTACT_EMAIL}`}
                  title="Send email"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </a>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-lowest border border-border-subtle flex items-center justify-between gap-2 group hover:border-secondary transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded bg-secondary/10 text-secondary material-symbols-outlined text-[20px] shrink-0">
                    call
                  </span>
                  <div>
                    <p className="text-label-sm font-label-sm text-outline">PHONE / WHATSAPP</p>
                    <p className="text-body-sm font-body-sm text-on-surface">+91 6370942090</p>
                  </div>
                </div>
                <a
                  className="p-2 text-on-surface-variant hover:text-secondary transition-colors shrink-0"
                  href="tel:+916370942090"
                  title="Call"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </a>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-lowest border border-border-subtle flex items-center justify-between gap-2 group hover:border-tertiary transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded bg-tertiary/10 text-tertiary material-symbols-outlined text-[20px] shrink-0">
                    location_on
                  </span>
                  <div>
                    <p className="text-label-sm font-label-sm text-outline">LOCATION</p>
                    <p className="text-body-sm font-body-sm text-on-surface">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                <span className="text-label-sm font-label-sm text-secondary bg-secondary/10 px-2 py-1 rounded shrink-0">
                  IST (UTC+5:30)
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                className="w-full sm:flex-1 py-3 px-4 rounded bg-surface-container hover:bg-surface-card-hover border border-border-subtle text-on-surface flex items-center justify-center gap-2 text-label-md font-label-md font-mono transition-colors"
                href="https://github.com/Narayana346"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                className="w-full sm:flex-1 py-3 px-4 rounded bg-surface-container hover:bg-surface-card-hover border border-border-subtle text-on-surface flex items-center justify-center gap-2 text-label-md font-label-md font-mono transition-colors"
                href="https://www.linkedin.com/in/narayan-maharan"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Terminal Contact Form */}
        <div className="lg:col-span-7">
          <form
            className="rounded-xl border border-border-subtle bg-surface-card/90 backdrop-blur-md p-6 lg:p-8 space-y-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="border-b border-border-subtle pb-4 mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-label-md font-label-md font-mono text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                <span>Send Dispatch Message</span>
              </span>
              <span className="text-label-sm font-label-sm text-secondary font-mono">Direct &amp; Private</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-label-sm font-label-sm font-mono text-outline">FULL NAME</label>
                <input
                  className="w-full bg-surface-container-lowest border border-border-subtle focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-2.5 text-on-surface placeholder:text-outline text-body-md font-body-md outline-none transition"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-label-sm font-label-sm font-mono text-outline">EMAIL ADDRESS</label>
                <input
                  className="w-full bg-surface-container-lowest border border-border-subtle focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-2.5 text-on-surface placeholder:text-outline text-body-md font-body-md outline-none transition"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-label-sm font-label-sm font-mono text-outline">PHONE / CONTACT NUMBER</label>
              <input
                className="w-full bg-surface-container-lowest border border-border-subtle focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-2.5 text-on-surface placeholder:text-outline text-body-md font-body-md outline-none transition"
                name="phone"
                placeholder="+91 9876543210 (Optional)"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-label-sm font-label-sm font-mono text-outline">MESSAGE CONTENT</label>
              <textarea
                className="w-full bg-surface-container-lowest border border-border-subtle focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-2.5 text-on-surface placeholder:text-outline text-body-md font-body-md outline-none transition"
                name="message"
                placeholder="Hi Narayana, we would love to speak with you regarding our backend engineering requirements..."
                required
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status && (
              <p className={`text-label-sm font-label-sm font-mono ${status.type === "success" ? "text-secondary" : "text-error"}`}>
                {status.text}
              </p>
            )}

            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded bg-primary text-on-primary font-headline-md text-label-md font-semibold hover:bg-primary-fixed-dim transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.25)] font-mono"
              type="submit"
            >
              <span>Submit Message</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
