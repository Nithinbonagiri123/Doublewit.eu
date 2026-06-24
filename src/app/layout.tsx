import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doublewit.eu"),
  title: {
    default:
      "Doublewit Consultancy Limited | Business Growth & Strategy Consulting Ireland",
    template: "%s | Doublewit Consultancy Limited",
  },
  description:
    "Doublewit Consultancy Limited provides professional business consultancy services including strategy, management consulting, process improvement, and operational efficiency solutions in Ireland.",
  keywords: [
    "business consultancy Ireland",
    "management consulting",
    "business strategy",
    "process improvement",
    "operational efficiency",
    "Doublewit Consultancy",
  ],
  authors: [{ name: "Doublewit Consultancy Limited" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://doublewit.eu",
    title:
      "Doublewit Consultancy Limited | Business Growth & Strategy Consulting Ireland",
    description:
      "Strategic consulting solutions that help businesses improve performance, optimize operations, and achieve long-term success.",
    siteName: "Doublewit Consultancy Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doublewit Consultancy Limited",
    description:
      "Strategic consulting solutions that help businesses improve performance, optimize operations, and achieve long-term success.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
