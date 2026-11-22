"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const sending = useRef(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setLoading(true);
    setSubmitFailed(false);
    try {
      const response = await fetch("https://formspree.io/f/xvzvgnzy", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Unable to send enquiry");
    } catch {
      setSubmitFailed(true);
      sending.current = false;
      setLoading(false);
      return;
    }
    // An analytics error must never make a successful enquiry look unsent.
    try {
      window.gtag?.("event", "generate_lead", {
        event_category: "contact",
        event_label: "trade_website_package",
      });
    } catch {}
    router.push("/thank-you");
  }
  return (
    <form
      action="https://formspree.io/f/xvzvgnzy"
      method="post"
      onSubmit={handleSubmit}
      className="enquiry-form"
      aria-busy={loading}
    >
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
      <fieldset className="project-type" disabled={loading}>
        <legend>What are you thinking?</legend>
        <div className="project-options">
          {["A new website", "Refresh my website", "Not sure yet"].map((type) => (
            <label className="project-choice" key={type}>
              <input type="radio" name="project_type" value={type} defaultChecked={type === "Not sure yet"} />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="form-row">
        <label htmlFor="name">
          Your name
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
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
            placeholder="you@yourbusiness.ie"
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
          placeholder="Your business or trading name"
        />
      </label>
      <details className="form-details">
        <summary>
          Add a little more detail <span>optional</span>
          <span className="details-indicator" aria-hidden="true">+</span>
        </summary>
        <p>Already know what you need? These details help us prepare.</p>
        <div className="form-row">
          <label htmlFor="trade">
            Your trade
            <input
              id="trade"
              name="trade"
              placeholder="e.g. Builder, electrician"
              maxLength={100}
            />
          </label>
          <label htmlFor="area">
            Where do you work?
            <input
              id="area"
              name="service_area"
              placeholder="e.g. Kerry"
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
      </details>
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
      {submitFailed && (
        <p className="form-error" role="alert">
          Your enquiry could not be sent. Your details are still here. Try
          again or email{" "}
          <a className="text-link" href="mailto:info@constructlyco.ie">
            info@constructlyco.ie
          </a>
          .
        </p>
      )}
      <button type="submit" className="button button-dark" disabled={loading}>
        {loading ? "Sending your enquiry…" : "Let’s talk about my website"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status">
        {loading ? "Please wait while your enquiry is sent." : "An enquiry starts a conversation. It doesn’t place an order."}
      </p>
    </form>
  );
}
