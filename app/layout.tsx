import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

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

export const metadata: Metadata = {
  title: "Luan Giomo - Desenvolvedor Front-end",
  description: "Conheça um pouco mais sobre meu perfil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexSans.variable} ${IBMPlexMono.variable} antialiased flex flex-col gap-20 px-6 sm:px-0 md:px-0 lg:px-6 w-full xl:max-w-7xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
