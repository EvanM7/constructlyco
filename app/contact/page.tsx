import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
export const metadata: Metadata = {
  title: "Enquire About Your Trade Website",
  description:
    "Discuss the €750 five-page website package. No payment or commitment is required to enquire.",
};
export default function Contact() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">Let’s talk about your website</p>
        <h1>
          Tell us about
          <br />
          <em>your business.</em>
        </h1>
        <p>
          A few details are enough to start. We’ll review what you need and
          confirm the scope, total and schedule before any work begins.
        </p>
      </section>
      <section className="section wrap contact-grid">
        <div className="contact-card">
          <h2>Your website enquiry</h2>
          <p className="muted">No payment or commitment at this stage.</p>
          <ContactForm />
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">The Trade Website</p>
          <div className="contact-price">
            €750<span>one-off website build</span>
          </div>
          <p>
            Five pages, copywriting help, search foundations and two rounds of
            revisions.
          </p>
          <Link href="/services" className="text-link">
            Review the complete package →
          </Link>
          <hr />
          <h3>What happens next?</h3>
          <ol>
            <li>We review your services and what you need.</li>
            <li>We confirm whether the package fits.</li>
            <li>You receive a written scope, costs and proposed schedule.</li>
          </ol>
          <p className="fine-print">
            Hosting, domain and email costs are separate. Optional website care
            is €49/month. Any applicable VAT is confirmed in your written quote.
          </p>
        </aside>
      </section>
    </main>
  );
}
