"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactForm() {
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

      // wait 500ms before redirect (CRITICAL)
      setTimeout(() => {
        router.push("/thank-you");
      }, 500);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
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
  );
}
