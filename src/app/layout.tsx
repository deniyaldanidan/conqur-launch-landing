import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../styles/globals.css";
import NotifsProvider from "@/app/_components/NotifsProvider";
import dynamic from "next/dynamic";

const NotifComp = dynamic(() => import("./_components/NotifComp"), {
  ssr: false,
});

const fontFamily = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Conqur",
  description: "Conqur - Empowering Freelancers one task at a time",
  creator: "Deniyal Dani K",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <NotifsProvider>
          <NotifComp />
          {children}
        </NotifsProvider>
      </body>
    </html>
  );
}
