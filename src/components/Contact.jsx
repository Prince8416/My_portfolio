import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { profile } from "../data";

// Number se sirf digits nikaal ke wa.me link banata hai (10 digit ho to 91 add karta hai)
const getWhatsAppLink = (phone, message) => {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.length === 10) digits = `91${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export default function Contact() {
  const waLink = getWhatsAppLink(
    profile.phone,
    `Hi ${profile.name}, I saw your portfolio and would like to connect.`,
  );

  const cardClass =
    "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/10 hover:shadow-xl hover:shadow-sky-500/10";

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-black text-white"
    >
      {/* Background: dot pattern + soft glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(255 255 255 / 0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-sky-400">
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Let's build{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              something together.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
            I'm looking for a full-stack role in the NCR region. Send me a
            message and I'll reply within a day.
          </p>
        </div>

        {/* Primary actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-sky-300"
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${String(profile.phone || "").replace(/\s/g, "")}`}
            className={cardClass}
          >
            <div className="rounded-xl bg-sky-500/15 p-2.5 text-sky-400 ring-1 ring-sky-500/30">
              <Phone size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Call
              </p>
              <p className="truncate text-sm font-semibold text-white">
                {profile.phone}
              </p>
            </div>
          </a>

          <a href={`mailto:${profile.email}`} className={cardClass}>
            <div className="rounded-xl bg-indigo-500/15 p-2.5 text-indigo-400 ring-1 ring-indigo-500/30">
              <Mail size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Email
              </p>
              <p className="truncate text-sm font-semibold text-white">
                {profile.email}
              </p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cardClass}
          >
            <div className="rounded-xl bg-sky-500/15 p-2.5 text-sky-400 ring-1 ring-sky-500/30">
              <Linkedin size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                LinkedIn
              </p>
              <p className="truncate text-sm font-semibold text-white">
                Connect with me
              </p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={cardClass}
          >
            <div className="rounded-xl bg-white/10 p-2.5 text-white ring-1 ring-white/20">
              <Github size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                GitHub
              </p>
              <p className="truncate text-sm font-semibold text-white">
                View my code
              </p>
            </div>
          </a>
        </div>
      </div>

      <p className="relative border-t border-white/10 px-5 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {profile.name}. Built with React and
        Tailwind CSS.
      </p>
    </section>
  );
}
