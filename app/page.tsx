export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          ConstructlyCo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Helping construction businesses in Ireland generate more leads through modern, high-converting websites.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:info@constructlyco.ie"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Lead Generation</h3>
            <p className="text-gray-600">
              We build websites that attract high-quality construction leads.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Local SEO</h3>
            <p className="text-gray-600">
              Rank higher on Google and get found by customers in your area.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Website Design</h3>
            <p className="text-gray-600">
              Clean, fast and mobile-friendly websites that convert.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}