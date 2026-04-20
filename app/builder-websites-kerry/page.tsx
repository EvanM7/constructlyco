import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Builder Websites Kerry | Web Design for Kerry Tradesmen",
  },
  description:
    "Website design for builders, contractors and tradesmen in Kerry. ConstructlyCo builds modern, mobile-friendly sites that rank locally and drive leads.",
};

export default function BuilderWebsitesKerry() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Kerry
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Websites for Builders and Trades in Kerry
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            ConstructlyCo builds modern, high-converting websites for builders,
            contractors, and tradesmen across County Kerry. Whether you run a
            building firm in Tralee, a plumbing service in Killarney, or a
            contracting business covering rural Kerry, a well-designed website
            helps you get found, build trust, and turn local searches into real
            enquiries.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Why It Matters
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why builders in Kerry need a strong website
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            Homeowners and commercial clients across Kerry rely on Google
            before they ever pick up the phone. They search for things like
            &ldquo;builders near me,&rdquo; &ldquo;extensions in Tralee,&rdquo;
            or &ldquo;roofers in Killarney&rdquo; &mdash; and if your business
            does not appear, or your website looks out of date, the enquiry
            quietly goes to a competitor who looks more professional online.
          </p>

          <p className="mt-6 leading-8 text-stone-600">
            Kerry is also a diverse county. You might be covering everything
            from urban jobs in Tralee to rural projects deep in the Iveragh
            Peninsula, or splitting your time between coastal towns and inland
            villages. A strong website for Kerry trades does three things
            well: it gives first-time visitors confidence in your business, it
            makes it easy to see exactly what services you offer and where you
            work, and it gives them a clear, low-friction way to get in touch.
            ConstructlyCo designs every page with those three goals in mind.
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Service Area
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Local website design across County Kerry
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Kerry is made up of distinct towns, villages, and rural service
              areas, and each one brings different types of jobs. We build
              websites that help trade businesses target the parts of the
              county they actually work in.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Tralee</h3>
              <p className="leading-7 text-stone-600">
                As the county town, Tralee is a hub for new-builds, commercial
                fit-outs, and domestic extensions. A clear Tralee-focused
                website helps local builders, carpenters, and plumbers rank
                for searches like &ldquo;builders Tralee&rdquo; or
                &ldquo;extensions Tralee.&rdquo;
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Killarney</h3>
              <p className="leading-7 text-stone-600">
                Killarney&rsquo;s mix of residential, holiday-home, and
                hospitality property creates steady demand for renovations,
                roofing, and general building work. Trades here often need a
                website that reassures both local homeowners and tourism
                business owners.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Listowel</h3>
              <p className="leading-7 text-stone-600">
                Listowel and the surrounding North Kerry area have a steady
                pipeline of agricultural, rural, and domestic jobs. A website
                that clearly lists your service area helps you win local work
                without competing against bigger Dublin-based firms.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Kenmare</h3>
              <p className="leading-7 text-stone-600">
                Kenmare&rsquo;s high-end residential and holiday-home market
                means builders, stone masons, and finish trades often need a
                website that reflects premium quality and craftsmanship.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Killorglin</h3>
              <p className="leading-7 text-stone-600">
                Killorglin and the wider Mid Kerry area are home to a strong
                community of independent tradesmen, with plenty of renovation
                and extension work along the Ring of Kerry and beyond.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">The rest of Kerry</h3>
              <p className="leading-7 text-stone-600">
                From Dingle and Castleisland to Cahersiveen and Caherdaniel,
                ConstructlyCo builds websites that let Kerry trades win work
                anywhere in the county &mdash; not just where they are based.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              What We Build
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What a ConstructlyCo website for Kerry trades includes
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Every Kerry trade website we build is designed from the ground up
              to generate enquiries &mdash; not just to look good. From the
              headlines to the call-to-actions, every page is built to help a
              homeowner or commercial client decide that your business is the
              one to call.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Clean, modern design
              </h3>
              <p className="leading-7 text-stone-600">
                Professional layouts that look sharp on both mobile and
                desktop and give your business instant credibility.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Clear service pages
              </h3>
              <p className="leading-7 text-stone-600">
                Dedicated pages for extensions, roofing, plumbing, electrical
                work, renovations, and whatever else your trade covers.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Project gallery</h3>
              <p className="leading-7 text-stone-600">
                A showcase of your previous work so prospective customers can
                see the quality before they ever ring you.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Contact forms &amp; click-to-call
              </h3>
              <p className="leading-7 text-stone-600">
                Quick contact options so a homeowner browsing on a phone can
                request a quote in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Local SEO structure
              </h3>
              <p className="leading-7 text-stone-600">
                On-page structure built around Kerry towns and trade-specific
                keywords so Google can understand exactly who you serve.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Fast &amp; mobile-friendly
              </h3>
              <p className="leading-7 text-stone-600">
                Most Kerry customers browse on their phone. Every page is
                built to load quickly and work smoothly on small screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
            Local SEO
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Local SEO for Kerry builders and tradesmen
          </h2>

          <p className="mt-6 leading-8 text-stone-300">
            When someone types &ldquo;website for builders Kerry,&rdquo;
            &ldquo;building contractors Tralee,&rdquo; or &ldquo;extensions
            Killarney&rdquo; into Google, the businesses that show up are not
            always the best &mdash; they are usually just the ones with a
            properly-structured website. ConstructlyCo builds your pages with
            Kerry-specific keywords, service-area mentions where appropriate,
            and clean on-page structure so Google can understand exactly who
            you are and where you work.
          </p>

          <p className="mt-6 leading-8 text-stone-300">
            We focus on sustainable local SEO, not tricks &mdash; clear page
            titles, meta descriptions, and proper heading structure so your
            website actually has a shot at ranking for the searches that bring
            in real jobs. Combined with a consistent Google Business Profile
            and genuine customer reviews, a well-built website gives you a
            long-term presence in local search results across Kerry.
          </p>
        </div>
      </section>

      {/* TRADES */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Who We Work With
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Website design Kerry trades can trust
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Our websites are not just for builders. ConstructlyCo works with
              a wide range of Kerry trade businesses &mdash; from sole traders
              covering one town to larger firms servicing the whole county.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Builders &amp; general contractors
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Plumbers &amp; gas engineers
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Electricians
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Roofers &amp; chimney specialists
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Carpenters &amp; joiners
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Stone masons &amp; blockwork
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Plasterers &amp; painters
            </div>
            <div className="rounded-xl border border-stone-200 p-5 text-stone-700">
              Kitchens, bathrooms &amp; flooring
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                1. Tell us about your business
              </h3>
              <p className="leading-7 text-stone-600">
                We learn about your trade, your service area in Kerry, and
                what kind of work you want to win.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                2. We design and build
              </h3>
              <p className="leading-7 text-stone-600">
                We create a clean, modern Kerry website that presents your
                business professionally and clearly.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                3. Your site goes live
              </h3>
              <p className="leading-7 text-stone-600">
                Customers in Tralee, Killarney, and across the county can find
                you, see what you do, and contact you easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Common questions from Kerry trades
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                How much does a website for a Kerry builder cost?
              </h3>
              <p className="mt-3 leading-8 text-stone-600">
                Our website packages for Kerry trades start from €300. The
                final price depends on the size of the site and the features
                you need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Will my website show up on Google for Kerry searches?
              </h3>
              <p className="mt-3 leading-8 text-stone-600">
                We build every site with local SEO in mind, but organic
                ranking also depends on your Google Business Profile, reviews,
                and a consistent online presence. A ConstructlyCo website
                gives you the right foundation to rank for Kerry-based
                searches over time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you update my existing website instead of building a new
                one?
              </h3>
              <p className="mt-3 leading-8 text-stone-600">
                Yes. If your current website needs a refresh rather than a
                full rebuild, we can talk through what makes sense for your
                business and budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you only build websites for builders?
              </h3>
              <p className="mt-3 leading-8 text-stone-600">
                No. We work with builders, plumbers, electricians, roofers,
                carpenters, plasterers, and other trades across Kerry.
              </p>
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
            Ready to get started in Kerry?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Whether you are a builder in Tralee, a plumber in Killarney, or a
            sole trader working across the county, ConstructlyCo can design
            you a website that wins more local work.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
