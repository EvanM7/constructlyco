import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Websites for Builders in Kerry | ConstructlyCo",
  description:
    "ConstructlyCo builds modern, high-converting websites for builders in Kerry to help generate more enquiries and win more jobs.",
};

export default function BuilderWebsitesKerry() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Websites for Builders in Kerry
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We build modern, high-converting websites for builders in Kerry to
          help you get more enquiries, win more jobs, and stand out from
          competitors.
        </p>

        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">
          Why builders in Kerry need a strong website
        </h2>
        <p className="mb-6">
          Most customers search online before choosing a builder. If your
          business doesn’t appear or your website looks outdated, you’re losing
          potential jobs to competitors.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What we build</h2>
        <ul className="space-y-2 mb-6">
          <li>• Professional, modern design</li>
          <li>• Mobile-friendly and fast</li>
          <li>• Clear services and project showcase</li>
          <li>• Easy contact and quote requests</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Built to generate enquiries
        </h2>
        <p>
          Our websites are designed to turn visitors into real enquiries,
          helping builders across Kerry grow their business consistently.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Get More Jobs in Kerry</h2>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Request a Quote
        </Link>
      </section>

      <Footer />
    </main>
  );
}