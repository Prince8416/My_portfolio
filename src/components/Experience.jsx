import { experience } from "../data";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 border-t border-slate-200 bg-white text-slate-900"
    >
      {/* Background Subtle Soft Glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-1/4 h-[35rem] w-[35rem] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-700 shadow-sm">
            <Sparkles size={14} />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Experience & Journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            My professional career path, internships, and hands-on full-stack
            software development experience.
          </p>
        </div>

        {/* Timeline List */}
        <ol className="relative mt-16 max-w-3xl border-l-2 border-slate-200 pl-6 sm:pl-8">
          {experience.map((e, index) => (
            <li key={index} className="relative pb-12 last:pb-0">
              {/* Timeline Indicator Dot */}
              <span
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-sky-600 text-white shadow-md ring-4 ring-sky-100"
                aria-hidden="true"
              >
                <Briefcase size={12} />
              </span>

              {/* Card Container */}
              <div className="group relative rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 sm:p-8">
                {/* Period & Place Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-600">
                    <Calendar size={13} />
                    <span>{e.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <MapPin size={13} className="text-slate-400" />
                    <span>{e.place}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900">
                  {e.title}
                </h3>

                {/* Points */}
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
