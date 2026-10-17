import {
  Check,
  ExternalLink,
  Github,
  Sparkles,
  FolderCode,
} from "lucide-react";
import { featuredProject as f, otherProjects } from "../data";
import Links from "./Links";
import ProjectPreview from "./ProjectPreview";

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-xs font-medium text-sky-700 transition-all hover:border-sky-400 hover:bg-sky-100"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white text-zinc-900"
    >
      {/* Background Mesh Glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-sky-400/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-600">
            <Sparkles size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Featured Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Real-world web applications, client websites, and full-stack systems
            I have designed, developed, and deployed.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <article className="group relative mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/60 transition-all duration-500 hover:border-sky-300 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Project Preview */}
            <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-zinc-200 shadow-lg shadow-zinc-200/60 transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectPreview image={f.image} title={f.title} />
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-5">
              <div className="inline-block rounded-full bg-sky-50 px-3 py-1 font-mono text-xs font-semibold text-sky-600">
                FEATURED SHIP
              </div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {f.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-sky-600">
                {f.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {f.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2.5">
                {f.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-zinc-700"
                  >
                    <div className="mt-0.5 rounded-full bg-sky-100 p-1 text-sky-600">
                      <Check size={14} />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-6">
                <Stack items={f.stack} />
              </div>

              {/* Live & Source Code Links */}
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <Links live={f.live} github={f.github} />
              </div>
            </div>
          </div>
        </article>

        {/* OTHER PROJECTS SECTION */}
        <div className="mt-24">
          <div className="flex items-center gap-3">
            <FolderCode size={24} className="text-sky-600" />
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              More Live Client Work
            </h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {otherProjects.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-xl font-bold text-zinc-900 transition-colors group-hover:text-sky-600">
                      {p.title}
                    </h4>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 transition-colors hover:text-sky-600"
                        title="Visit Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {p.description}
                  </p>

                  <div className="mt-5">
                    <Stack items={p.stack} />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200">
                  <Links live={p.live} github={p.github} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
