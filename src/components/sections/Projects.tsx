import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-foreground/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-10">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-foreground/10 p-5 hover:border-foreground/25 hover:bg-foreground/[0.02] transition-all"
            >
              <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-foreground/50 bg-foreground/5 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    Live &rarr;
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
