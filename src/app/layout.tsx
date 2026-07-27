import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Shaheer | Full Stack Developer",
  description: "Building scalable web systems for modern commerce.",
  // themeColor: "#0F172A", // modern Next.js App Router uses camelCase
  icons: [
    { rel: "icon", sizes: "16x16", url: "/icons/favicons/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/icons/favicons/favicon-32x32.png" },
    { rel: "icon", sizes: "64x64", url: "/icons/favicons/favicon-64x64.png" },
    { rel: "apple-touch-icon", url: "/icons/favicons/apple-touch-icon.png" },
  ],
  manifest: "/icons/favicons/site.webmanifest", // optional for PWA
};

export const viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}