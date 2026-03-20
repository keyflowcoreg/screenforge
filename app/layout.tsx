import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { AnnouncementBar } from "@/components/AnnouncementBar";
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
    title: "ScreenForge — App Store Screenshot Generator",
    description:
      "Professional App Store and Play Store screenshots with AI",
    type: "website",
    siteName: "ScreenForge",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScreenForge — App Store Screenshot Generator",
    description:
      "Professional App Store and Play Store screenshots with AI",
    images: ["/api/og"],
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
        <NoiseOverlay />
        <AnnouncementBar items={['LAUNCH WEEK \u2014 Limited time pricing', 'App Store screenshots done right \u2014 $19 per set']} />
        <Analytics product="screenforge" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
