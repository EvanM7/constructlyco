import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You | ConstructlyCo",
  description: "Thank you for contacting ConstructlyCo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-white text-stone-900">
      <Navbar />

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Thank You
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your enquiry has been sent
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Thanks for getting in touch with ConstructlyCo. We have received
            your message and will get back to you as soon as possible.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Back to Home
            </Link>

            <Link
              href="/services"
              className="rounded-lg border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-stone-50"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}