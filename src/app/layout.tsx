import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florida Roof Restore | 24/7 Emergency Roof Restoration Services",
  description: "Florida's trusted roof restoration specialists. Emergency roof tarping, storm damage repair, and leak repairs. 24/7 service across Miami, Tampa, Orlando, Jacksonville & Fort Lauderdale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* <ChatBot /> */}
        <script
          src="https://crm.llgai.app/chatbot-widget.js"
          data-widget-id="b6a77c31-eaa6-4ebc-850e-cc740596c0c0"
          async
        />
      </body>
    </html>
  );
}
