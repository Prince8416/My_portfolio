import { useState } from "react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Webhook,
} from "lucide-react";
import { profile } from "../data";
import ArchDiagram from "./ArchDiagram";

const DEFAULT_STACK = [
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "REST APIs",
];

const REST_TILT = { x: 6, y: -6 };

// -- Avatar with rotating ring
function Avatar() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative shrink-0">
      <div
        className="hero-spin absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#0ea5e9,#6366f1,#10b981,#0ea5e9)] opacity-40 blur-[3px] transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-md">
        {profile.photo && !failed ? (
          <img
            src="images/prince.png"
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="grid h-full w-full place-items-center font-display text-2xl font-extrabold text-slate-900">
            {profile.name.charAt(0)}
          </span>
        )}
      </div>
    </div>
  );
}

// -- Interactive 3D stack card
function StackMatrix({ stack }) {
  const [tilt, setTilt] = useState(REST_TILT);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -12, y: px * 12 });
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt(REST_TILT)}
    >
      <div
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-sky-950/10 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-red-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-xs tracking-wider text-slate-400">
            stack.matrix
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-px bg-slate-200">
          {stack.map((t, i) => (
            <li
              key={t}
              className={`group relative h-28 overflow-hidden p-5 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/80"
              }`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-sky-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="absolute left-5 top-5 h-2 w-2 rounded-full bg-slate-300 transition-all duration-300 group-hover:bg-sky-500 group-hover:shadow-[0_0_8px_rgba(14,165,233,0.6)]"
                aria-hidden="true"
              />
              <Webhook
                size={16}
                className="absolute right-4 top-4 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-500"
                aria-hidden="true"
              />
              <p className="relative mt-8 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                Node {String(i + 1).padStart(2, "0")}
              </p>
              <p className="relative mt-1.5 text-xl font-bold tracking-tight text-slate-900">
                {t}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// -- Headline: last 2 words gradient
function Headline({ text }) {
  const words = String(text).split(" ");
  const cut = Math.max(words.length - 2, 0);
  const head = words.slice(0, cut).join(" ");
  const tail = words.slice(cut).join(" ");

  return (
    <h1 className="text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.3rem]">
      {head && <>{head} </>}
      <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
        {tail}
      </span>
    </h1>
  );
}

// -- Main
export default function Hero() {
  const social = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ].filter((s) => s.href);

  const base = profile.stack?.length ? profile.stack : DEFAULT_STACK;
  const stack = Array.from(new Set([...base, "MongoDB"]));
  const marquee = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hero-rise { opacity: 0; animation: hero-rise .8s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-marquee { animation: hero-marquee 30s linear infinite; }
        .hero-spin { animation: hero-spin 8s linear infinite; }
        .hero-marquee-wrap:hover .hero-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise { opacity: 1; animation: none; }
          .hero-marquee, .hero-spin { animation: none; }
        }
      `}</style>

      {/* background subtle grid + clean soft glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 100%)",
          }}
        />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <section
        id="top"
        className="relative mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 lg:pb-20 lg:pt-20"
      >
        {/* ROW 1: intro + stack */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div
              className="hero-rise flex items-center gap-4"
              style={{ animationDelay: "0ms" }}
            >
              <Avatar />
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-slate-900">
                  {profile.name}
                </p>
                <p className="text-sm text-slate-600">
                  {profile.role} · {profile.location}
                </p>
              </div>
            </div>

            <p
              className="hero-rise mt-8 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-slate-600 shadow-sm"
              style={{ animationDelay: "80ms" }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </p>

            <div className="hero-rise mt-6" style={{ animationDelay: "160ms" }}>
              <Headline text={profile.headline} />
            </div>

            <p
              className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
              style={{ animationDelay: "240ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="hero-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                View projects
                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <Download size={18} />
                Resume
              </a>

              <ul className="ml-1 flex items-center gap-2">
                {social.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600"
                    >
                      <Icon size={19} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="hero-rise lg:col-span-5"
            style={{ animationDelay: "260ms" }}
          >
            <StackMatrix stack={stack} />
          </div>
        </div>

        {/* ROW 2: ArchDiagram */}
        <div
          className="hero-rise mt-16 lg:mt-24"
          style={{ animationDelay: "380ms" }}
        >
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 text-slate-900 shadow-xl shadow-slate-200/50 backdrop-blur sm:p-8 lg:p-10">
            <ArchDiagram />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="hero-marquee-wrap relative border-y border-slate-200 bg-slate-50 py-4">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <ul
            className="hero-marquee flex w-max items-center gap-10 whitespace-nowrap"
            aria-label="Tech stack"
          >
            {marquee.map((t, i) => (
              <li
                key={`${t}-${i}`}
                className="flex items-center gap-10 font-mono text-sm font-medium uppercase tracking-widest text-slate-600"
                aria-hidden={i >= stack.length ? "true" : undefined}
              >
                {t}
                <span
                  className="h-1.5 w-1.5 rounded-full bg-sky-500"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
