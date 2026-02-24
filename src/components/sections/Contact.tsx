import { portfolio } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-foreground/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-6">
          Contact
        </h2>
        <p className="text-3xl font-semibold tracking-tight max-w-md leading-snug mb-8">
          Let&apos;s work together on something great.
        </p>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={`mailto:${portfolio.email}`}
            className="w-fit text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4"
          >
            {portfolio.email}
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={portfolio.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
