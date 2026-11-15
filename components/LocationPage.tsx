import Link from "next/link";
import { ClosingCTA, OfferCard } from "./Offer";
export default function LocationPage({
  county,
  towns,
}: {
  county: string;
  towns: string[];
}) {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">Websites for trades in {county}</p>
        <h1>
          Your local business.
          <br />
          <em>A better online home.</em>
        </h1>
        <p>
          A five-page website for builders, plumbers, electricians and other
          trade businesses across {county}. Clear services, your own project
          photographs and a simple way to enquire.
        </p>
      </section>
      <section className="section wrap two-column">
        <div>
          <p className="eyebrow">The same clear package</p>
          <h2>
            A website that
            <br />
            shows your work.
          </h2>
          <p className="muted">
            We work remotely with trade businesses in {towns.join(", ")} and
            throughout {county}. Your website explains the services you actually
            provide and the areas you genuinely cover.
          </p>
          <p className="muted">
            The €750 package includes five pages, help with copy, an enquiry
            form, search foundations and two revision rounds. Hosting and domain
            costs are separate; optional care is €49/month.
          </p>
          <p className="muted">
            Search setup helps search engines understand the website. Rankings,
            traffic and enquiries are not guaranteed.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link className="text-link" href="/services">
              Read the full package and costs →
            </Link>
          </div>
        </div>
        <OfferCard />
      </section>
      <ClosingCTA />
    </main>
  );
}
