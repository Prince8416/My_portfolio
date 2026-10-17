import { skills } from "../data";
import { Code2, Server, Database, Wrench, Terminal } from "lucide-react";

// Category ke basis par icons + colors map karne ke liye helper
const getCategoryStyle = (group) => {
  const g = group.toLowerCase();
  if (g.includes("frontend"))
    return {
      icon: <Code2 size={20} />,
      box: "bg-sky-100 text-sky-600 ring-sky-200",
      dot: "bg-sky-500",
    };
  if (g.includes("backend"))
    return {
      icon: <Server size={20} />,
      box: "bg-indigo-100 text-indigo-600 ring-indigo-200",
      dot: "bg-indigo-500",
    };
  if (g.includes("database"))
    return {
      icon: <Database size={20} />,
      box: "bg-emerald-100 text-emerald-600 ring-emerald-200",
      dot: "bg-emerald-500",
    };
  return {
    icon: <Wrench size={20} />,
    box: "bg-amber-100 text-amber-600 ring-amber-200",
    dot: "bg-amber-500",
  };
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden border-t border-slate-200 bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900"
    >
      {/* Background: dot pattern + soft glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(148 163 184 / 0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sky-200/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
        {/* Header Section */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 shadow-sm">
            <Terminal size={14} />
            <span>TECHNICAL STACK</span>
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            The technologies, frameworks, and tools I use every day to engineer
            production-ready web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((s) => {
            const style = getCategoryStyle(s.group);
            return (
              <div
                key={s.group}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100 sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className={`rounded-xl p-2.5 ring-1 ${style.box}`}>
                    {style.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                    {s.group}
                  </h3>
                </div>

                {/* Skill Pills */}
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="group/pill flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 font-mono text-xs font-medium text-slate-700 transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-transform group-hover/pill:scale-125 ${style.dot}`}
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
