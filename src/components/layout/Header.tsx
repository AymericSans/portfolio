import { portfolio } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="mx-auto max-w-4xl px-6 flex h-14 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {portfolio.name}
        </a>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
