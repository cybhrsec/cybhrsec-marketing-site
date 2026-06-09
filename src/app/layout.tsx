import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cybhrsec.com"),
  title: "CybHrSec | Cybersecurity GRC Consultancy and Platform",
  description:
    "Cybersecurity GRC support for individuals, creators, and small to growing businesses, helping reduce risk, improve compliance readiness, and address the human risk layer.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "CybHrSec | Cybersecurity GRC Consultancy and Platform",
    description:
      "Practical cybersecurity GRC support for businesses and individuals, with CybHrSec Pro as the GRC platform for risk, policy, remediation, and reporting.",
    url: "https://www.cybhrsec.com",
    siteName: "CybHrSec",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "CybHrSec",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CybHrSec | Cybersecurity, Compliance, and GRC Consulting",
    description:
      "Practical cybersecurity, compliance, privacy, and GRC support for businesses and individuals.",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
