"use client";
import Link from "next/link";
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
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://formspree.io/f/xvzvgnzy", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Unable to send enquiry");
      window.gtag?.("event", "generate_lead", {
        event_category: "contact",
        event_label: "trade_website_package",
      });
      router.push("/thank-you");
    } catch {
      setError(
        "Your enquiry could not be sent. Your details are still here; please try again.",
      );
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="enquiry-form" aria-busy={loading}>
      <input
        type="hidden"
        name="_subject"
        value="ConstructlyCo · €750 Trade Website enquiry"
      />
      <input
        type="text"
        name="_gotcha"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-label="Leave this field empty"
      />
      <div className="form-row">
        <label htmlFor="name">
          Your name
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label htmlFor="email">
          Email address
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label htmlFor="business">
        Business name
        <input
          id="business"
          name="business"
          autoComplete="organization"
          required
          maxLength={150}
        />
      </label>
      <div className="form-row">
        <label htmlFor="trade">
          Your trade
          <input
            id="trade"
            name="trade"
            placeholder="e.g. Builder, electrician"
            required
            maxLength={100}
          />
        </label>
        <label htmlFor="area">
          Where do you work?
          <input
            id="area"
            name="service_area"
            placeholder="e.g. Kerry"
            required
            maxLength={150}
          />
        </label>
      </div>
      <label htmlFor="website">
        Existing website <span>(optional)</span>
        <input
          id="website"
          name="website"
          placeholder="Your website address, if you have one"
          autoComplete="url"
          maxLength={300}
        />
      </label>
      <label htmlFor="message">
        Anything else we should know? <span>(optional)</span>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={3000}
          placeholder="A new site, a refresh, or the kind of work you’d like to show…"
        />
      </label>
      <p className="fine-print">
        We use these details to respond to your enquiry. The form is processed
        by Formspree. <Link href="/privacy">Read the privacy information.</Link>
      </p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="button button-dark" disabled={loading}>
        {loading ? "Sending your enquiry…" : "Send my enquiry"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status">
        {loading ? "Please wait while your enquiry is sent." : ""}
      </p>
    </form>
  );
}
