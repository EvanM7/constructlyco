import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Design Services for Irish Trades",
  description:
    "Website design, local SEO setup and lead-focused pages for Irish trades. Packages from €300. Mobile-friendly sites built to generate real enquiries.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Website services built for trades across Ireland
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            ConstructlyCo helps builders, plumbers, electricians, roofers, and
            other trade businesses build a stronger online presence with modern,
            professional websites designed to generate more enquiries.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A better online presence for your trade business
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              Many trade businesses do excellent work but still rely on weak
              websites, outdated pages, or no website at all. That can make it
              harder for potential customers to trust the business or get in
              touch quickly.
            </p>
            <p className="mt-5 leading-8 text-stone-600">
              ConstructlyCo creates websites that help trade businesses look
              established, explain their services clearly, and turn visitors
              into real enquiries.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Who this is for</h3>
            <ul className="mt-6 space-y-4 text-stone-600">
              <li>• Builders and contractors</li>
              <li>• Plumbers and electricians</li>
              <li>• Roofers and carpenters</li>
              <li>• Painters and decorators</li>
              <li>• Any local trade business that wants more enquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Core Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What is included
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Every ConstructlyCo website is built with the goal of making your
              business easier to find, easier to trust, and easier to contact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Website Design</h3>
              <p className="leading-7 text-stone-600">
                We build clean, modern websites that give your business a more
                professional appearance and clearly present your services.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Local SEO Structure</h3>
              <p className="leading-7 text-stone-600">
                Your site is structured in a way that supports local visibility
                when people search online for your trade and your area.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Lead-Focused Setup</h3>
              <p className="leading-7 text-stone-600">
                We use clear calls to action, strong page layouts, and simple
                contact paths to help turn visitors into enquiries.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Mobile-Friendly Pages</h3>
              <p className="leading-7 text-stone-600">
                Most potential customers will visit your website on their phone,
                so your site needs to look good and work properly on mobile.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Clear Service Messaging</h3>
              <p className="leading-7 text-stone-600">
                We help present what you do in a way that is simple, clear, and
                easy for customers to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Contact Form Setup</h3>
              <p className="leading-7 text-stone-600">
                Your website can include contact forms that send enquiries
                directly to your business so you do not miss leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Why It Matters
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A strong website helps you win work
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Your website is often one of the first things a customer sees.
              Even if most of your work comes from referrals, people still check
              online before deciding to contact you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Build trust</h3>
              <p className="leading-7 text-stone-600">
                A professional website gives customers more confidence in your
                business before they ever speak to you.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Look established</h3>
              <p className="leading-7 text-stone-600">
                A strong online presence helps smaller trade businesses appear
                more credible and more competitive.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Get more enquiries</h3>
              <p className="leading-7 text-stone-600">
                Clear pages and easy contact options increase the chances of a
                visitor becoming a paying customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="mb-3 text-xl font-semibold">
                1. Tell us about your business
              </h3>
              <p className="leading-7 text-stone-300">
                We learn about your trade, your service area, and what kind of
                website you need.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="mb-3 text-xl font-semibold">
                2. We build your website
              </h3>
              <p className="leading-7 text-stone-300">
                We create a clean, modern site that presents your business
                professionally and clearly.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="mb-3 text-xl font-semibold">
                3. You start receiving enquiries
              </h3>
              <p className="leading-7 text-stone-300">
                Once your site is live, customers can discover your business and
                contact you more easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple pricing for trade businesses
          </h2>

          <div className="mt-12 rounded-3xl border border-stone-200 p-10 shadow-sm">
            <h3 className="text-2xl font-semibold">Website Package</h3>
            <p className="mt-4 text-4xl font-bold">From €300</p>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              A professional website package for trade businesses that want a
              stronger online presence and a better first impression.
            </p>

            <ul className="mt-8 space-y-3 text-stone-600">
              <li>5-page professional website</li>
              <li>Mobile-friendly design</li>
              <li>Contact form setup</li>
              <li>Clear service pages</li>
              <li>SEO-ready page structure</li>
            </ul>

            <div className="mt-8">
              <a
                href="mailto:info@constructlyco.ie"
                className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Get Started
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Need a website for your trade business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Get in touch with ConstructlyCo and we can discuss your business,
            your goals, and the kind of website you need.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Contact ConstructlyCo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}