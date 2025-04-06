import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { METADATA } from "@/utils/metaData";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  authors: [{ name: METADATA.creator }],
  keywords: METADATA.keywords.split(', '),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body >
        {" "}
        <header className="shadow text-black py-4 px-8 flex justify-between items-center fixed top-0 bg-white w-full z-50">
          <div className="text-2xl font-bold cursor-pointer">
          <Link href="/"> Test-Demo</Link></div>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="text-black py-4 text-center fixed bottom-0 w-full bg-gray-100">
          <p>&copy; 2025 Test-Demo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
