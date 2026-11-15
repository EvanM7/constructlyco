import Link from "next/link";
import { offer } from "@/lib/offer";
export function OfferCard({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="offer-card">
      <div className="offer-top">
        <span className="eyebrow">{offer.name}</span>
        <span className="small-label">One-off build</span>
      </div>
      <div className="offer-price">
        {offer.price}
        <span>website build</span>
      </div>
      <p>
        A complete home for your business online, with the important details
        taken care of.
      </p>
      <ul className="check-list">
        {(detailed
          ? offer.includes
          : [
              "Five pages, designed for your business",
              "Copywriting help and your project photos",
              "Mobile layout and enquiry form",
              "Search foundations and two revision rounds",
            ]
        ).map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="button button-dark">
        Enquire about this package <span aria-hidden="true">↗</span>
      </Link>
      <p className="fine-print">
        Hosting, domain and email costs are separate. Optional care:{" "}
        {offer.carePrice}/month. Any applicable VAT is confirmed in your written
        quote.
      </p>
    </div>
  );
}
export function ClosingCTA() {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <div>
          <p className="eyebrow">Let’s make a start</p>
          <h2>
            Put your work
            <br />
            in a better light.
          </h2>
          <p>
            Tell us what you do and where you work. We’ll confirm whether the
            €750 package fits.
          </p>
        </div>
        <Link href="/contact" className="button button-light">
          Tell us about your business <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <div className="faq-list">
      {offer.faqs.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
