import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScreenForge — AI App Store Screenshots in Seconds",
  description:
    "Upload your app screenshots. AI generates professional App Store & Play Store images with device frames, text, gradients. $19/set.",
  keywords: [
    "app store screenshots",
    "play store screenshots",
    "app screenshot generator",
    "app store optimization",
    "ASO",
    "device frames",
    "screenshot maker",
    "AI screenshots",
  ],
  openGraph: {
    title: "ScreenForge — AI App Store Screenshots in Seconds",
    description:
      "Upload raw screenshots. AI adds device frames, headlines, gradients. Download App Store-ready images.",
    type: "website",
    siteName: "ScreenForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScreenForge — AI App Store Screenshots in Seconds",
    description:
      "Upload raw screenshots. AI adds device frames, headlines, gradients. Download App Store-ready images.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ScreenForge",
          "description": "App Store screenshot generator",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "19",
            "priceCurrency": "USD"
          }
        }) }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Analytics product="screenforge" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
