import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
export const metadata: Metadata = {
  title: "Websites for Builders & Trades in Dublin",
  description:
    "A €750 five-page website package for trade businesses in Dublin. Clear services, project photographs and contact options. View the scope and costs.",
};
export default function Page() {
  return (
    <LocationPage
      county="Dublin"
      towns={["Dublin city", "Swords", "Tallaght", "Dún Laoghaire"]}
    />
  );
}
