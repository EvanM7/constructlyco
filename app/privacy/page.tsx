import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy & Contact Information",
  description:
    "How ConstructlyCo uses website enquiry information and optional analytics.",
};
export default function Privacy() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">Your information</p>
        <h1>
          Privacy,
          <br />
          <em>in plain language.</em>
        </h1>
      </section>
      <section className="section wrap prose">
        <h2>Website enquiries</h2>
        <p>
          ConstructlyCo is run by Evan Madden. When you submit an enquiry, we
          receive the name, email address, business details and message you
          provide. We use them to respond, discuss the project and keep a record
          of that conversation. Sending an enquiry does not subscribe you to
          marketing.
        </p>
        <h2>Form processing</h2>
        <p>
          The enquiry form sends your information to Formspree for processing
          and delivery. Formspree processes information under its own{" "}
          <a
            href="https://formspree.io/legal/privacy-policy/"
            rel="noreferrer"
            target="_blank"
          >
            privacy policy
          </a>
          . Information may be processed outside your country. Please avoid
          including sensitive information in your message.
        </p>
        <h2>Optional analytics</h2>
        <p>
          If you allow analytics, this site uses Google Analytics to understand
          page visits and enquiry-form submissions. We do not send the form’s
          name, email or message fields to Google Analytics. Analytics is off
          until you choose to allow it. You can change your choice using “Cookie
          settings” in the footer.
        </p>
        <h2>Keeping and accessing information</h2>
        <p>
          We keep enquiry information while responding and considering a
          project, and retain business records where needed for an ongoing
          relationship or applicable obligations. You can request access,
          correction or deletion, or ask a privacy question, by emailing{" "}
          <a href="mailto:info@constructlyco.ie">info@constructlyco.ie</a>. You
          may also contact Ireland’s Data Protection Commission about a concern.
        </p>
      </section>
    </main>
  );
}
