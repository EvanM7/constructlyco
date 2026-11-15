import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Enquiry Sent",
  robots: { index: false, follow: false },
};
export default function Thanks() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">Thank you</p>
        <h1>
          Your enquiry
          <br />
          <em>has been sent.</em>
        </h1>
        <p>
          We’ll review your business details and reply about the scope, total
          and proposed schedule. There’s no commitment until you agree a written
          quote.
        </p>
        <div className="button-row" style={{ marginTop: 30 }}>
          <Link href="/services" className="button button-dark">
            Review the package ↗
          </Link>
          <Link href="/" className="text-link">
            Back to home →
          </Link>
        </div>
      </section>
    </main>
  );
}
