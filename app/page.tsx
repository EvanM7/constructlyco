import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ConstructlyCo | Websites for Trades in Ireland",
  description:
    "ConstructlyCo builds modern websites for builders, plumbers, electricians, roofers, and trades across Ireland to help generate more enquiries.",
};

export default function Home() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              ConstructlyCo
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">
              Websites for Builders & Trades in Ireland That Generate More
              Enquiries
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
              ConstructlyCo builds modern websites for builders, plumbers,
              electricians, roofers, and other trade businesses across Ireland.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@constructlyco.ie"
                className="rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Get a Free Quote
              </a>

              <a
                href="#services"
                className="rounded-lg border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-stone-50"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-4 text-center text-sm font-medium text-stone-600 md:grid-cols-3">
            <p>Built for Irish trade businesses</p>
            <p>Fast, modern and mobile-friendly</p>
            <p>Designed to turn visits into enquiries</p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Who We Work With
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for trades across Ireland
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            We build websites for local trade businesses that want to look more
            professional, build trust, and win more enquiries online.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">
                Builders & Contractors
              </h3>
              <p className="leading-7 text-stone-600">
                Showcase your services, previous work, and business details in a
                way that helps you win more residential and commercial jobs.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">
                Plumbers & Electricians
              </h3>
              <p className="leading-7 text-stone-600">
                Get found locally when customers need urgent or planned work and
                make it easy for them to contact you quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">
                All Trade Businesses
              </h3>
              <p className="leading-7 text-stone-600">
                From roofing and carpentry to plastering and painting, we help
                trade businesses look credible online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need to Look Professional Online
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              We help trade businesses build a strong online presence with
              websites that look professional, rank locally, and make it easy
              for customers to get in touch.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Website Design</h3>
              <p className="leading-7 text-stone-600">
                Clean, modern websites built to showcase your services, build
                trust, and help convert visitors into real enquiries.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Local SEO</h3>
              <p className="leading-7 text-stone-600">
                We structure your site so your business has a better chance of
                appearing when people search for your trade in your local area.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Lead-Focused Setup</h3>
              <p className="leading-7 text-stone-600">
                From contact forms to strong calls to action, every page is
                designed to help customers call, email, or request a quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Why It Matters
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Most trade businesses are losing jobs online
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            If your business does not have a strong website, many customers will
            move on to a competitor who looks more established and easier to
            contact.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">No website</h3>
              <p className="leading-7 text-stone-600">
                Customers may struggle to find your business or may question
                whether you are active and professional.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Outdated website</h3>
              <p className="leading-7 text-stone-600">
                An old or poorly designed site can make good businesses look
                less trustworthy than they really are.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">No clear contact path</h3>
              <p className="leading-7 text-stone-600">
                If people cannot quickly call, email, or request a quote, you
                will lose enquiries to competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
            Pricing
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple, affordable websites for trades
          </h2>

          <div className="mt-12 rounded-3xl bg-white/5 p-10 ring-1 ring-white/10">
            <h3 className="text-2xl font-semibold">Website Package</h3>
            <p className="mt-4 text-4xl font-bold">€300 – €500</p>

            <p className="mx-auto mt-4 max-w-2xl text-stone-300">
              A clean, professional website package for trade businesses that
              want a stronger online presence without unnecessary complexity.
            </p>

            <ul className="mt-8 space-y-3 text-stone-300">
              <li>5-page professional website</li>
              <li>Mobile-friendly design</li>
              <li>Clear contact call-to-actions</li>
              <li>SEO-ready structure</li>
              <li>Fast, modern layout</li>
            </ul>

            <a
              href="mailto:info@constructlyco.ie"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A Simple Process for More Enquiries
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                1. Tell Us About Your Business
              </h3>
              <p className="leading-7 text-stone-600">
                We learn about your trade, service area, and the kind of jobs
                you want to win more of.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                2. We Build Your Website
              </h3>
              <p className="leading-7 text-stone-600">
                We create a professional website that clearly presents your
                services and encourages people to contact you.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                3. You Get More Leads
              </h3>
              <p className="leading-7 text-stone-600">
                Your business gets a stronger online presence and a better
                chance of turning local searches into paying work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Service Areas
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Builder website services in key locations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            We are building location-focused pages to help trades and builders
            in major Irish markets find the right website support more easily.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/builder-websites-kerry"
              className="rounded-lg border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-white"
            >
              Builder Websites Kerry
            </Link>
            <Link
              href="/builder-websites-dublin"
              className="rounded-lg border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-white"
            >
              Builder Websites Dublin
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Get Started
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Need a Better Website for Your Trade Business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            ConstructlyCo helps tradespeople across Ireland create a stronger
            first impression online and generate more enquiries.
          </p>

          <div className="mt-10">
            <a
              href="mailto:info@constructlyco.ie"
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