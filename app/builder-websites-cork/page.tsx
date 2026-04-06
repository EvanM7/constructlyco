import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites for Builders in Cork | ConstructlyCo",
  description:
    "ConstructlyCo builds modern, high-converting websites for builders in Cork to help generate more enquiries and win more jobs.",
};

export default function BuilderWebsitesCork() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Websites for Builders in Cork
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We build modern, high-converting websites for builders in Cork to help
          you get more enquiries, win more jobs, and stand out from competitors.
        </p>

        <Link
          href="/contact"
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-gray-700">
        <h2 className="mb-4 text-2xl font-semibold">
          Why builders in Cork need a strong website
        </h2>
        <p className="mb-6">
          Most customers search online before choosing a builder. If your
          business doesn’t appear or your website looks outdated, you’re losing
          potential jobs to competitors.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">What we build</h2>
        <ul className="mb-6 space-y-2">
          <li>• Professional, modern design</li>
          <li>• Mobile-friendly and fast</li>
          <li>• Clear services and project showcase</li>
          <li>• Easy contact and quote requests</li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">
          Built to generate enquiries
        </h2>
        <p>
          Our websites are designed to turn visitors into real enquiries,
          helping builders across Cork grow their business consistently.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Get More Jobs in Cork</h2>
        <Link
          href="/contact"
          className="rounded-lg bg-white px-6 py-3 text-black"
        >
          Request a Quote
        </Link>
      </section>

      <Footer />
    </main>
  );
}