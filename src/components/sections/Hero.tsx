import { portfolio } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-foreground/50 mb-4 tracking-widest uppercase">
          {portfolio.location}
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {portfolio.name}
        </h1>
        <p className="mt-3 text-2xl text-foreground/70 font-light">
          {portfolio.title}
        </p>
        <p className="mt-6 text-lg text-foreground/60 max-w-xl leading-relaxed">
          {portfolio.tagline}
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
