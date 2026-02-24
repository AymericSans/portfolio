import { portfolio } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-between text-sm text-foreground/50">
        <span>
          &copy; {new Date().getFullYear()} {portfolio.name}
        </span>
        <div className="flex items-center gap-4">
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
