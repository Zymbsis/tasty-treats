import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Provider from "@/components/ui/providers";
import Header from "@/components/header/header";
import "@/lib/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasty Threats",
  description: "",
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: ReactNode;
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <Provider>
          <Header />
          {modal}
          <main className="pt-[64px] pb-20 md:pt-[61px] md:pb-[100px] xl:pt-[56px]">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
