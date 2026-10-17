import { ExternalLink, Github } from "lucide-react";

export default function Links({ live, github }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  return (
    <div className="flex flex-wrap gap-3">
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className={`${base} bg-ink text-white hover:bg-cobalt`}>
          <ExternalLink size={16} />
          Live demo
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className={`${base} border border-ink/20 bg-white hover:border-ink`}>
          <Github size={16} />
          Source code
        </a>
      )}
    </div>
  );
}
