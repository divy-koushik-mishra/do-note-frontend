import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Do Note",
  description: "Next-gen note-taking app infused with A.I.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="px-4 py-1 bg-slate-200">
          <Navbar />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
