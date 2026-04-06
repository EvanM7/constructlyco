import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              ConstructlyCo
            </h3>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              We build modern websites for builders, plumbers, electricians and
              trades across Ireland to help generate more enquiries.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Pages
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-stone-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-stone-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-stone-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-stone-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-stone-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              <li>Website Design</li>
              <li>Local SEO Structure</li>
              <li>Lead Generation Websites</li>
              <li>Mobile-Friendly Sites</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Service Areas
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/builder-websites-kerry"
                  className="hover:text-stone-900"
                >
                  Kerry
                </Link>
              </li>
              <li>
                <Link
                  href="/builder-websites-dublin"
                  className="hover:text-stone-900"
                >
                  Dublin
                </Link>
              </li>
              <li>
                <Link
                  href="/builder-websites-cork"
                  className="hover:text-stone-900"
                >
                  Cork
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} ConstructlyCo. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="mailto:info@constructlyco.ie"
              className="underline underline-offset-4"
            >
              info@constructlyco.ie
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}