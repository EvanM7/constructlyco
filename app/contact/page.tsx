import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us for a Website Quote",
  description:
    "Contact ConstructlyCo for a free quote on a modern website for your Irish trade business. Builders, plumbers, electricians and tradesmen welcome.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Contact
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Get a Website That Brings You More Work
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Fill out the form below and we will get back to you about your
            website, your business, and what you need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Request a Quote</h2>
            <ContactForm />
          </div>

          <div className="rounded-2xl border border-stone-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact Details</h2>

            <div className="mt-6 space-y-4 text-stone-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@constructlyco.ie"
                  className="underline underline-offset-4"
                >
                  info@constructlyco.ie
                </a>
              </p>

              <p>
                <span className="font-semibold">Location:</span> Ireland
              </p>

              <p>
                <span className="font-semibold">Response time:</span> Within 24
                hours
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-3 text-lg font-semibold">What happens next?</h3>
              <ul className="space-y-3 text-stone-600">
                <li>• We review your business</li>
                <li>• We suggest a website structure</li>
                <li>• We give you a clear price</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
