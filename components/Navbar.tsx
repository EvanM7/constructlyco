import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ConstructlyCo logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            ConstructlyCo
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Projects
          </Link>
          <Link href="/about" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-stone-700 md:inline-block"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}