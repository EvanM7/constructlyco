import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            About
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            ConstructlyCo helps trades look more professional and win more work
            online
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            We build modern websites for builders, contractors, and trades
            across Ireland with a focus on clarity, trust, and generating real
            enquiries.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold">Why ConstructlyCo was created</h2>

          <p className="mt-6 leading-8 text-stone-600">
            Many trade businesses do excellent work but still rely on outdated
            websites, basic pages, or no online presence at all. In many cases,
            this means losing jobs to competitors who simply look more
            professional online.
          </p>

          <p className="mt-6 leading-8 text-stone-600">
            ConstructlyCo was created to help fix that problem. The goal is
            simple: give trade businesses a clean, modern website that reflects
            the quality of their work and makes it easier for customers to get
            in touch.
          </p>

          <p className="mt-6 leading-8 text-stone-600">
            A strong website is no longer optional. Even if most work comes from
            word of mouth, customers still check online before deciding who to
            contact.
          </p>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold">
              Built specifically for trade businesses
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              ConstructlyCo focuses on one thing: helping trades look better
              online and generate more enquiries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Simple and clear</h3>
              <p className="leading-7 text-stone-600">
                No unnecessary complexity — just clean websites that clearly
                show what you do and how to contact you.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Built for local work</h3>
              <p className="leading-7 text-stone-600">
                Websites are structured to help you attract work in your local
                area, not just exist online.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Focused on enquiries</h3>
              <p className="leading-7 text-stone-600">
                Every page is designed to help turn visitors into calls, emails,
                or quote requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold">Who we work with</h2>
            <p className="mt-4 text-lg text-stone-600">
              ConstructlyCo works with trades that want to improve how they
              present themselves online and win more work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              Builders & contractors
            </div>
            <div className="rounded-xl border p-6">
              Plumbers & electricians
            </div>
            <div className="rounded-xl border p-6">
              All local trade businesses
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Want to improve how your business looks online?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Get in touch with ConstructlyCo and we can discuss your website.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-white font-semibold hover:bg-stone-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}