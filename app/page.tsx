import type { Metadata } from "next";
import Link from "next/link";
import DemoPreview from "@/components/DemoPreview";
import { ClosingCTA, FAQ, OfferCard } from "@/components/Offer";
export const metadata: Metadata = {
  title: {
    absolute: "Websites for Irish Trades · €750 Package | ConstructlyCo",
  },
  description:
    "A five-page website for your Irish trade business. €750 build, clear scope, copywriting help and two revision rounds. View the package and working demo.",
};
export default function Home() {
  return (
    <main>
      <section className="home-hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Websites for Irish trades
          </p>
          <h1>
            Your work
            <br />
            deserves a<br />
            <em>better website.</em>
          </h1>
          <p className="hero-description">
            You take pride in the work. We’ll build a website that shows it,
            explains your services and makes getting in touch easy.
          </p>
          <div className="button-row">
            <Link href="/services" className="button button-dark">
              See the €750 package <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/projects" className="text-link">
              Explore the demo <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="hero-note">
            Five pages. One clear build price. Yours to keep.
          </p>
        </div>
        <div className="hero-preview">
          <div className="browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>Example trade website</span>
            <span aria-hidden="true">↗</span>
          </div>
          <DemoPreview />
          <div className="preview-caption">
            <span className="small-label">
              A fictional business. A working example.
            </span>
            <Link href="/demo/kerry-stone-and-build">Open demo ↗</Link>
          </div>
        </div>
      </section>
      <div className="trade-strip">
        <div className="wrap">
          <span>Built for people who build.</span>
          <span>Builders</span>
          <span>Plumbers</span>
          <span>Electricians</span>
          <span>Roofers &amp; more</span>
        </div>
      </div>
      <section className="section wrap two-column" id="package">
        <div className="section-intro">
          <p className="eyebrow">The offer, made simple</p>
          <h2>
            A proper website.
            <br />A clear price.
          </h2>
          <p>
            Everything a local trade business needs to explain its services,
            show its work and give customers a simple way to enquire.
          </p>
          <div className="numbered-benefits">
            {[
              {
                title: "Your business, clearly explained",
                text: "Services, areas covered and contact details that are easy to find.",
              },
              {
                title: "Your work, front and centre",
                text: "A project gallery using the real photographs you provide.",
              },
              {
                title: "A straightforward enquiry",
                text: "Clear contact options for visitors on a phone or a desktop.",
              },
            ].map((b, i) => (
              <div key={b.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/services" className="text-link">
            See the full scope and ongoing costs →
          </Link>
        </div>
        <OfferCard />
      </section>
      <section className="process-section">
        <div className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From first chat to launch</p>
              <h2>We keep it straightforward.</h2>
            </div>
            <p>
              You bring the business details.
              <br />
              We bring them together online.
            </p>
          </div>
          <div className="steps">
            {[
              {
                title: "Tell us about the business",
                text: "Share your services, service areas, contact details and project photos. We confirm the scope and total before you commit.",
              },
              {
                title: "Review your website",
                text: "We draft the copy and build your five pages. The target is a complete preview in 10 working days once the agreed inputs are received.",
              },
              {
                title: "Make it yours",
                text: "Two revision rounds are included. Once approved and paid, we launch on your domain and hand over the website.",
              },
            ].map((s, i) => (
              <div key={s.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <p className="eyebrow">Before you decide</p>
          <h2>
            Clear answers.
            <br />
            Up front.
          </h2>
          <p className="muted">
            The details that matter when you’re choosing someone to build your
            site.
          </p>
        </div>
        <FAQ />
      </section>
      <ClosingCTA />
    </main>
  );
}
