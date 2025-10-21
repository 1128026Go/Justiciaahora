import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "JUSTICIA AHORA ABOGADOS",
    template: "%s | JUSTICIA AHORA ABOGADOS",
  },
  description: "Despacho jurídico en Bogotá. Soluciones legales claras y efectivas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JUSTICIA AHORA ABOGADOS",
    description: "Despacho jurídico en Bogotá. Soluciones legales claras y efectivas.",
    url: siteUrl,
    siteName: "JUSTICIA AHORA ABOGADOS",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "JUSTICIA AHORA ABOGADOS",
    description: "Despacho jurídico en Bogotá. Soluciones legales claras y efectivas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-white text-slate-800 antialiased`}>        
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Header />
        <main id="contenido" className="min-h-dvh">
          {children}
        </main>
        <Footer />
        <WhatsAppButton floating />
        <Toaster position="top-right" />
        <CookieBanner />
      </body>
    </html>
  );
}
