import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy -- ScreenForge",
  description:
    "Privacy Policy for ScreenForge. Learn how AI Business Factory collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyPolicy
        companyName="AI Business Factory"
        contactEmail="hello@screenforge.ai"
        websiteUrl="https://screenforge-ten.vercel.app"
        lastUpdated="2026-03-20"
      />
    </main>
  );
}
