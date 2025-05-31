import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Provider from "@app/components/ui/provider";
import Header from "@app/components/header/header";
import "@app/lib/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasty Threats",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
