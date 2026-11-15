import type { Metadata } from "next";
import { ClosingCTA, FAQ, OfferCard } from "@/components/Offer";
import { offer } from "@/lib/offer";
export const metadata: Metadata = {
  title: "The €750 Trade Website Package",
  description:
    "See exactly what is included in the five-page package, payment stages, revisions, ownership and optional care costs.",
};
export default function Services() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">One focused package</p>
        <h1>
          Your website.
          <br />
          <em>All the essentials.</em>
        </h1>
        <p>
          A defined five-page build for trade businesses that want to explain
          their services, show their work and make enquiries easier.
        </p>
      </section>
      <section className="section wrap two-column package-detail">
        <div>
          <p className="eyebrow">What we’ll build</p>
          <h2>
            Five pages.
            <br />
            Built around your business.
          </h2>
          <div className="page-list">
            {offer.pages.map((p, i) => (
              <div key={p}>
                <span>0{i + 1}</span>
                <h3>{p}</h3>
                <p>
                  {
                    [
                      "Your services, service area and a clear first impression.",
                      "Explain the work you take on and who you help.",
                      "Show your photographs and describe your work.",
                      "Introduce the people and approach behind the business.",
                      "Give visitors an easy way to call or send an enquiry.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
        <OfferCard detailed />
      </section>
      <section className="process-section">
        <div className="section wrap two-column">
          <div>
            <p className="eyebrow">After launch</p>
            <h2>
              Choose how
              <br />
              it’s looked after.
            </h2>
            <p className="muted">
              You own the completed website after full payment. Taking a care
              plan is optional.
            </p>
          </div>
          <div className="care-card">
            <div className="offer-top">
              <h3>Website care</h3>
              <span className="care-price">
                €49<span>/month</span>
              </span>
            </div>
            <ul className="check-list">
              <li>
                <span aria-hidden="true">✓</span>Hosting and HTTPS
              </li>
              <li>
                <span aria-hidden="true">✓</span>Monthly website and
                enquiry-form checks
              </li>
              <li>
                <span aria-hidden="true">✓</span>Up to 15 minutes of content
                updates each month
              </li>
              <li>
                <span aria-hidden="true">✓</span>A monthly copy of your website
                files
              </li>
            </ul>
            <p className="fine-print">
              Domain registration and email are separate. Updates cover existing
              text and photographs; unused minutes don’t roll over. New pages
              and features are quoted separately. Cancel before the next billing
              month; we hand over your files so you can move hosting.
            </p>
            <p className="fine-print">
              Prefer to manage it yourself? We can launch into your own hosting
              account. The provider’s costs are agreed separately before work
              begins.
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <p className="eyebrow">The important details</p>
          <h2>
            Know what
            <br />
            you’re agreeing to.
          </h2>
        </div>
        <FAQ />
      </section>
      <ClosingCTA />
    </main>
  );
}
