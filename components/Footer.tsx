import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-stone-900">ConstructlyCo</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            We build modern websites for builders, contractors, and tradespeople
            across Ireland.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
            Navigation
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-stone-600">
            <Link href="/" className="transition hover:text-stone-900">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-stone-900">
              Services
            </Link>
            <Link href="/projects" className="transition hover:text-stone-900">
              Projects
            </Link>
            <Link href="/about" className="transition hover:text-stone-900">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-stone-900">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm text-stone-600">
            <p>Ireland</p>
            <p>
              <a
                href="mailto:info@constructlyco.ie"
                className="transition hover:text-stone-900"
              >
                info@constructlyco.ie
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-stone-500">
          © {new Date().getFullYear()} ConstructlyCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}