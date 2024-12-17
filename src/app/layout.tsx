import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PageSpark | Drag-and-Drop Landing Page Builder",
  description:
    "Build, preview, and deploy beautiful landing pages effortlessly. Drag-and-drop components, integrate SEO, forms, marketing tools, and export code with ease.",
  keywords: [
    "landing page builder",
    "drag and drop builder",
    "SEO optimized landing pages",
    "marketing tools integration",
    "export to Vercel",
    "PageSpark",
  ],
  applicationName: "PageSpark",
  authors: [{ name: "Rajan Shrestha", url: "https://rajanbuilds.com" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "PageSpark - Build Stunning Landing Pages",
    description:
      "A powerful drag-and-drop builder to create and deploy SEO-friendly landing pages. Export to Vercel or Netlify with ease.",
    url: "https://pagespark.rajanbuilds.com",
    siteName: "PageSpark",
    images: [
      {
        url: "/og-image.png", // Add an OG image in the public directory
        width: 1200,
        height: 630,
        alt: "PageSpark Landing Page Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PageSpark - Build Stunning Landing Pages",
    description:
      "A powerful drag-and-drop builder to create and deploy SEO-friendly landing pages. Export to Vercel or Netlify with ease.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
