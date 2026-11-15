import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
export const metadata: Metadata = {
  title: "Websites for Builders & Trades in Kerry",
  description:
    "A €750 five-page website package for trade businesses in Kerry. Clear services, project photographs and contact options. View the scope and costs.",
};
export default function Page() {
  return (
    <LocationPage
      county="Kerry"
      towns={["Tralee", "Killarney", "Killorglin", "Kenmare", "Listowel"]}
    />
  );
}
