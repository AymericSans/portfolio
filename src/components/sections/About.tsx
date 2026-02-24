import { portfolio } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-foreground/10">
      <div className="mx-auto max-w-4xl grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-6">
            About
          </h2>
          <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
            {portfolio.about}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-6">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {portfolio.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground/70"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
