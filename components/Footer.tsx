import Link from "next/link";
import AnalyticsConsent from "./AnalyticsConsent";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand">
              Constructly<span className="brand-co">Co</span>
              <span className="brand-period">.</span>
            </Link>
            <p>
              Thoughtful websites for Irish trade businesses.
              <br />
              Clear scope. Straightforward delivery.
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <Link href="/services">The €750 package</Link>
            <Link href="/projects">Example website</Link>
            <Link href="/about">About ConstructlyCo</Link>
            <Link href="/contact">Start an enquiry</Link>
          </div>
          <div>
            <p className="eyebrow">Across Ireland</p>
            <Link href="/builder-websites-kerry">Kerry</Link>
            <Link href="/builder-websites-dublin">Dublin</Link>
            <Link href="/builder-websites-cork">Cork</Link>
            <p>Working remotely, nationwide.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ConstructlyCo</span>
          <Link href="/privacy">Privacy &amp; contact information</Link>
          <AnalyticsConsent />
        </div>
      </div>
    </footer>
  );
}
