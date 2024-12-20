import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/NavBar/NavBar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const neueFont = localFont({
  src: "../assets/fonts/NeueHaasDisplayRoman.ttf",
  display: "swap",
  variable: "--font-neue",
});
const neueFontMedium = localFont({
  src: "../assets/fonts/NeueHaasDisplayLight.ttf",
  display: "swap",
  variable: "--font-neue-medium",
});
const neueFontBold = localFont({
  src: "../assets/fonts/NeueHaasDisplayMediu.ttf",
  display: "swap",
  variable: "--font-neue-bold",
});

export const metadata: Metadata = {
  title: "Jobs Finder",
  description: "Find your dream job today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${neueFont.variable} ${neueFontBold.variable} ${neueFontMedium.variable}
        
        antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
