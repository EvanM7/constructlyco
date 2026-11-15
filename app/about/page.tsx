import type { Metadata } from "next";
import { ClosingCTA } from "@/components/Offer";
export const metadata: Metadata = {
  title: "About ConstructlyCo",
  description:
    "ConstructlyCo is an independent website business run by Evan Madden, creating straightforward websites for trade businesses across Ireland.",
};
export default function About() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">A small business, for yours</p>
        <h1>
          A direct conversation.
          <br />
          <em>A considered website.</em>
        </h1>
        <p>
          ConstructlyCo is an independent website business run by Evan Madden.
          You work directly with the person building your site.
        </p>
      </section>
      <section className="section wrap two-column about-section">
        <div className="about-mark" aria-hidden="true">
          <span>
            C<span>Co.</span>
          </span>
          <p>CLARITY IN EVERY DETAIL.</p>
        </div>
        <div>
          <p className="eyebrow">Why ConstructlyCo</p>
          <h2>
            Good work deserves
            <br />
            to be seen clearly.
          </h2>
          <p>
            A website should help someone understand what you do, see the work
            you’re proud of and know how to reach you.
          </p>
          <p>
            ConstructlyCo brings those pieces together for Irish trade
            businesses. The package has a defined scope, help with your copy, a
            review process and a clear handover.
          </p>
          <p>
            The work is delivered remotely, so we can work together wherever
            your business is based in Ireland. We’ll agree the project schedule
            and communication arrangements before starting.
          </p>
          <p>
            You’ll see your website before it goes live, and you retain the
            completed files after full payment.
          </p>
        </div>
      </section>
      <ClosingCTA />
    </main>
  );
}
