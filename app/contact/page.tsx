"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvzvgnzy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: "form_submission",
          value: 1,
        });
      }

      form.reset();
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500"
              />

              <input
                type="text"
                name="trade"
                placeholder="Your Trade (e.g. Builder, Plumber)"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500"
              />

              <textarea
                name="message"
                placeholder="Tell us about your business and what kind of website you need..."
                rows={5}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500"
              />

              {error ? (
                <p className="text-sm font-medium text-red-600">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
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