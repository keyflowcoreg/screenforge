import type { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service -- ScreenForge",
  description:
    "Terms of Service for ScreenForge. Read the terms governing your use of the ScreenForge screenshot generator.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <TermsOfService
        companyName="AI Business Factory"
        productName="ScreenForge"
        contactEmail="hello@screenforge.ai"
        websiteUrl="https://screenforge-ten.vercel.app"
        lastUpdated="2026-03-20"
      />
    </main>
  );
}
