import type { Metadata } from "next";
import Link from "next/link";
import DemoPreview from "@/components/DemoPreview";
export const metadata: Metadata = {
  title: "Kerry Stone & Build · Website Demo",
  robots: { index: false, follow: true },
};
export default function Demo() {
  return (
    <main className="demo-page">
      <div className="demo-notice wrap">
        <span>Concept website · Fictional business</span>
        <Link href="/projects">← Back to the example</Link>
      </div>
      <div className="wrap">
        <DemoPreview full />
        <div className="demo-end" id="demo-enquiry">
          <p>Want to present your business like this?</p>
          <Link className="button button-dark" href="/contact">
            Discuss your website ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
