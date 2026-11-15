import type { Metadata } from "next";
import Link from "next/link";
import DemoPreview from "@/components/DemoPreview";
import { ClosingCTA } from "@/components/Offer";
export const metadata: Metadata = {
  title: "Explore an Example Trade Website",
  description:
    "Explore the Kerry Stone & Build concept website. A fictional business demonstrating ConstructlyCo’s website design.",
};
export default function Projects() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">See the approach</p>
        <h1>
          A working example.
          <br />
          <em>Picture your business.</em>
        </h1>
        <p>
          This concept shows how a builder’s services, story and work can come
          together in a clear, considered website.
        </p>
      </section>
      <section className="wrap project-showcase">
        <div className="project-toolbar">
          <div>
            <h2>Kerry Stone &amp; Build</h2>
            <p>Concept website · Fictional business</p>
          </div>
          <Link
            className="button button-dark"
            href="/demo/kerry-stone-and-build"
          >
            Explore the demo ↗
          </Link>
        </div>
        <DemoPreview />
        <p className="fine-print">
          This is a design demonstration, not a commissioned client project. The
          business and content are fictional; no performance results are
          claimed.
        </p>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The thinking behind it</p>
            <h2>
              Make the important
              <br />
              things easy to find.
            </h2>
          </div>
        </div>
        <div className="steps">
          {[
            {
              title: "Explain the work",
              text: "Clear descriptions help a visitor understand whether the business takes on their type of project.",
            },
            {
              title: "Show the approach",
              text: "Considered layouts and project photographs give a business room to tell its own story.",
            },
            {
              title: "Make contact simple",
              text: "A visible enquiry route gives interested visitors a clear next step.",
            },
          ].map((s, i) => (
            <div key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ClosingCTA />
    </main>
  );
}
