"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
const links = [
  { href: "/services", label: "The package" },
  { href: "/projects", label: "Example website" },
  { href: "/about", label: "About" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="wrap nav-inner">
        <Link
          href="/"
          className="brand"
          aria-label="ConstructlyCo home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon" aria-hidden="true">
            <i />
          </span>
          Constructly<span className="brand-co">Co</span>
          <span className="brand-period">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((l) => (
            <Link
              href={l.href}
              key={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-dark nav-cta">
          Start your website <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav wrap"
        >
          {[...links, { href: "/contact", label: "Start your website · €750" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
