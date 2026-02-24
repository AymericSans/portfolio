"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="py-24 px-6 border-t border-foreground/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-10">
          Projects
        </h2>

        {/* Tab bar */}
        <div className="flex gap-1 border-b border-foreground/10 mb-10">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm transition-colors relative -mb-px ${
                active === i
                  ? "text-foreground border-b-2 border-foreground font-medium"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active project */}
        <div key={project.title} className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-foreground/20 px-4 py-1.5 hover:bg-foreground/5 transition-colors"
                >
                  View live &rarr;
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  Repo &rarr;
                </a>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-3">
              Stack
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
