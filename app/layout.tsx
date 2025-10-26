import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import TopBarInfoAndLinks from "@/components/shared/TopBarInfoAndLinks";
import Navbar from "@/components/shared/navbar/Navbar";
import Container from "@/components/shared/Container";
import Footer from "@/components/shared/Footer";
import "react-pagination-bar/dist/index.css";

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quite Learning",
    template: "%s | Quite Learning",
  },
  description: "If have enough time to assignments. Find solution here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${montserrat.variable} antialiased`}
      >
        <TopBarInfoAndLinks />
        <div>
          <Navbar />
        </div>
        <div className="xl:py-16 md:py-10 py-8">
          <Container className="min-h-[calc(100vh-190px)]">
            {children}
          </Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
