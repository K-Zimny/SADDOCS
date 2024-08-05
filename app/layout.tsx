import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KZ",
  description: "Kenneth Zimny | Programmer | Creator | Philosopher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
