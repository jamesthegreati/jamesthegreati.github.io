import type { Metadata } from "next";
import { Poppins, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SoundProvider } from "@/components/SoundProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Jules - Magnetic Portfolio",
  description: "A destination, not just a portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${firaCode.variable} font-sans bg-midnight-blue text-white antialiased`}
      >
        <SoundProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
