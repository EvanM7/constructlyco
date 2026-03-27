import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Projects
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Example project for a builder in Kerry
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            This sample project shows the type of website ConstructlyCo can
            build for a local construction company that wants to look more
            professional online and generate more enquiries.
          </p>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Project Overview
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Kerry Stone & Build
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              This is a demo concept for a building contractor based in Kerry.
              The goal of the website is to help the business present its
              services clearly, show the quality of its work, and make it easy
              for potential customers to request a quote.
            </p>
            <p className="mt-5 leading-8 text-stone-600">
              For many construction companies, the website needs to do three
              things well: build trust, explain services, and create a simple
              path for enquiries. This demo is designed around those goals.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Project Details</h3>
            <div className="mt-6 space-y-4 text-stone-600">
              <p>
                <span className="font-semibold text-stone-900">Industry:</span>{" "}
                Construction / Building
              </p>
              <p>
                <span className="font-semibold text-stone-900">Location:</span>{" "}
                Kerry, Ireland
              </p>
              <p>
                <span className="font-semibold text-stone-900">Focus:</span>{" "}
                Trust, visibility, and enquiries
              </p>
              <p>
                <span className="font-semibold text-stone-900">Type:</span>{" "}
                Demo website concept
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE SITE INCLUDES */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              What the site includes
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A strong website structure for a local builder
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              This example project is designed to show the main sections a
              builder website should include to look credible and convert
              visitors into leads.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Homepage</h3>
              <p className="leading-7 text-stone-600">
                A clear first impression with a strong headline, service
                overview, and contact call-to-actions.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Services Page</h3>
              <p className="leading-7 text-stone-600">
                Dedicated sections for extensions, renovations, roofing, block
                work, and general building services.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Contact Page</h3>
              <p className="leading-7 text-stone-600">
                A simple enquiry form and clear contact details so potential
                customers can get in touch quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS GOALS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Business Goals
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What this type of website is meant to achieve
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Look more established</h3>
              <p className="leading-7 text-stone-600">
                A professional website helps a builder appear more credible and
                more trustworthy from the first visit.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Show the right services</h3>
              <p className="leading-7 text-stone-600">
                Clear service pages help homeowners or commercial customers
                quickly understand what the business offers.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Generate more enquiries</h3>
              <p className="leading-7 text-stone-600">
                Strong layout, messaging, and calls to action can turn a visitor
                into a real quote request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE SERVICE AREAS */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
              Example Service Areas
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built with local visibility in mind
            </h2>
            <p className="mt-4 text-lg text-stone-300">
              A builder website can be structured to target specific counties,
              towns, or service areas where the business wants more work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Killarney
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Tralee
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Castleisland
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              County Kerry
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
            Want a website like this for your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            ConstructlyCo can build a modern website tailored to your trade,
            your service area, and the type of work you want to win.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}