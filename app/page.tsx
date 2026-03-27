export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          More Leads for Construction Businesses
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We help builders, plumbers, and tradespeople across Ireland get more jobs through high-converting websites and local SEO.
        </p>

        <a
          href="mailto:info@constructlyco.ie"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Get a Free Quote
        </a>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
            <p className="text-gray-600">
              We create websites designed to bring in consistent, high-quality leads.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
            <p className="text-gray-600">
              Get found on Google when customers search for services in your area.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Website Design</h3>
            <p className="text-gray-600">
              Fast, modern and mobile-friendly websites that convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">1. We Build</h4>
              <p>We create a high-performing website tailored to your trade and location.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. We Rank</h4>
              <p>We optimise your site to appear on Google for relevant searches.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. You Get Leads</h4>
              <p>Customers contact you directly for jobs in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Getting More Jobs Today
        </h2>
        <p className="mb-6 text-gray-300">
          Get in touch and we’ll show you how we can generate leads for your business.
        </p>

        <a
          href="mailto:info@constructlyco.ie"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}