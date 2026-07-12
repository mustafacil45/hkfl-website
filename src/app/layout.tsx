import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Halil Kale Fen Liseliler Derneği",
  description:
    "Halil Kale Fen Liseliler Derneği resmi web sitesi. Mezunlarımızı bir araya getiren etkinlikler, duyurular ve topluluk ağı.",
  keywords: [
    "Halil Kale Fen Lisesi",
    "mezun derneği",
    "fen lisesi mezunları",
    "HKFL",
    "Manisa",
  ],
  openGraph: {
    title: "Halil Kale Fen Liseliler Derneği",
    description:
      "Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz. Halil Kale Fen Lisesi mezun topluluğuna katılın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
