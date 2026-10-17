import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data";

const links = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main"
      >
        <a href="#top" className="font-display text-xl font-extrabold">
          {profile.name}
          <span className="text-cobalt">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-mute transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
