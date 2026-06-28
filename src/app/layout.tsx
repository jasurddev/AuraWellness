import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurawellness.vercel.app"),
  title: "Aura Aesthetics by Studio Satu Akun",
  description: "Aura Aesthetics Digital Ecosystem Prototype",
  openGraph: {
    title: "Aura Aesthetics by Studio Satu Akun",
    description: "Premium Digital Ecosystem for Holistic Beauty & Wellness.",
    url: "https://aurawellness.vercel.app",
    siteName: "Aura Aesthetics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aura Aesthetics Social Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Aesthetics by Studio Satu Akun",
    description: "Premium Digital Ecosystem for Holistic Beauty & Wellness.",
    images: ["/og-image.png"],
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
      className={`${inter.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans">{children}</body>
    </html>
  );
}
