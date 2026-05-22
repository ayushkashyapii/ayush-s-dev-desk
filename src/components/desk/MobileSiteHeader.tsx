/**
 * Mobile-only top bar — lives outside `#hero` so the hero (and body paper grid) are not covered by a solid strip.
 */
export function MobileSiteHeader() {
  return (
    <header className="relative z-40 flex w-full items-start justify-between gap-3 px-4 py-3 md:hidden">
      <a
        href="#hero"
        className="shrink-0 handwritten text-lg text-foreground/80 transition-opacity hover:opacity-80"
      >
        Ayush
      </a>
      <nav
        className="flex max-w-[70%] flex-wrap justify-end gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-wide text-muted-foreground/85"
        aria-label="Page sections"
      >
        <a href="#about" className="nav-link transition-colors hover:text-foreground">
          About
        </a>
        <a href="#work" className="nav-link transition-colors hover:text-foreground">
          Work
        </a>
        <a href="#contact" className="nav-link transition-colors hover:text-foreground">
          Contact
        </a>
      </nav>
    </header>
  );
}
