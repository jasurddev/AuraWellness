import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurawellness.vercel.app"),
  title: "Aura Wellness by Studio Satu Akun",
  description: "Aura Wellness Digital Ecosystem Prototype",
  openGraph: {
    title: "Aura Wellness by Studio Satu Akun",
    description: "Premium Digital Ecosystem for Holistic Beauty & Wellness.",
    url: "https://aurawellness.vercel.app",
    siteName: "Aura Wellness",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aura Wellness Social Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Wellness by Studio Satu Akun",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans">{children}</body>
    </html>
  );
}
