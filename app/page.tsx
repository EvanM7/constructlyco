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
            Give the people looking you up a clear reason to get in touch.
            A considered website that shows your work, explains your services
            and feels like your business.
          </p>
          <dl className="hero-facts" aria-label="The website package at a glance">
            <div><dt>€750</dt><dd>one-off build</dd></div>
            <div><dt>5 pages</dt><dd>made for your business</dd></div>
            <div><dt>Yours</dt><dd>after full payment</dd></div>
          </dl>
          <div className="button-row">
            <Link href="/contact" className="button button-dark">
              Let’s build your website <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#package" className="text-link">
              What’s included <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <p className="hero-note">
            Hosting, domain and email separate. Care is optional at €49/month.
          </p>
        </div>
        <div className="hero-preview">
          <div className="browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>Explore a working website</span>
            <span aria-hidden="true">↗</span>
          </div>
          <Link
            href="/demo/kerry-stone-and-build"
            className="demo-preview-link"
            aria-label="Explore the Kerry Stone and Build demo website"
          >
            <DemoPreview />
            <span className="demo-preview-action">Take a look inside <span aria-hidden="true">↗</span></span>
          </Link>
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
      <div className="assurance-strip wrap" aria-label="How we work">
        <p><span aria-hidden="true">✓</span> Copywriting help included</p>
        <p><span aria-hidden="true">✓</span> Work directly with your designer</p>
        <p><span aria-hidden="true">✓</span> No compulsory care subscription</p>
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
      <section className="section wrap founder-section" aria-labelledby="founder-heading">
        <div className="founder-card">
          <div className="founder-monogram" aria-hidden="true">EM<span>.</span></div>
          <div>
            <p className="eyebrow">The person behind ConstructlyCo</p>
            <h3>Evan Madden</h3>
            <p>Independent website designer.<br />Irish roots. Working remotely.</p>
          </div>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">A small business, for yours</p>
          <h2 id="founder-heading">One person to talk to.<br /><em>From start to finish.</em></h2>
          <p>
            I’m Evan. I’ll help shape your content, build your website and walk
            you through it before launch. You’ll know who’s doing the work and
            who to ask when you have a question.
          </p>
          <p>
            We’ll agree the scope, cost and schedule in writing first. Then
            you can get on with your business while I bring your site together.
          </p>
          <Link href="/about" className="text-link">A little more about ConstructlyCo <span aria-hidden="true">→</span></Link>
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
