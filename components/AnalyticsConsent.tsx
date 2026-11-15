"use client";
import Script from "next/script";
import { useSyncExternalStore, useState } from "react";
const storageKey = "constructlyco-analytics-consent-v1";
const subscribe = (callback: () => void) => {
  window.addEventListener("analytics-choice", callback);
  return () => window.removeEventListener("analytics-choice", callback);
};
function readChoice() {
  try {
    return localStorage.getItem(storageKey) || "unset";
  } catch {
    return "unset";
  }
}
export default function AnalyticsConsent() {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "loading");
  const [temporaryChoice, setTemporaryChoice] = useState<string | null>(null);
  const effectiveChoice = temporaryChoice ?? choice;
  const [show, setShow] = useState(false);
  function choose(value: string) {
    setTemporaryChoice(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch {}
    window.dispatchEvent(new Event("analytics-choice"));
    setShow(false);
    if (value === "declined" && effectiveChoice === "accepted")
      window.location.reload();
  }
  return (
    <>
      {effectiveChoice === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2EJGHCNFEN"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2EJGHCNFEN');`}</Script>
        </>
      )}
      <button className="cookie-settings" onClick={() => setShow(true)}>
        Cookie settings
      </button>
      {(effectiveChoice === "unset" || show) && (
        <section className="cookie-banner" aria-label="Analytics preferences">
          <div>
            <strong>A small choice about analytics</strong>
            <p>
              Optional analytics helps us understand how the website is used.
              You can browse and enquire without it.
            </p>
            <a href="/privacy">Privacy information</a>
          </div>
          <div className="cookie-actions">
            <button
              className="button button-outline"
              onClick={() => choose("declined")}
            >
              Essential only
            </button>
            <button
              className="button button-dark"
              onClick={() => choose("accepted")}
            >
              Allow analytics
            </button>
          </div>
        </section>
      )}
    </>
  );
}
