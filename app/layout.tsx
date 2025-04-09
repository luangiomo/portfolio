import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: "400",
  subsets: ["latin"],
});

const IBMPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: "600",
  subsets: ["latin"],
});

const customIntegralFont = localFont({
  variable: "--custom-font-integral",
  src: "../public/integral.otf",
});

export const metadata: Metadata = {
  title: "Luan Giomo - Desenvolvedor Front-end",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexSans.variable} ${IBMPlexMono.variable} ${customIntegralFont.variable} antialiased`}
      >
        <main className="flex flex-col gap-20 px-6 sm:px-0 md:px-0 lg:px-6 w-full xl:max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
