import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HtmlLang from "@/components/HtmlLang";

const SITE_URL = "https://hkmed.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Arama motorlarında site adı "hkmed.org" yerine "HKMED" görünsün diye
  // uygulama adı, og:site_name ve aşağıdaki WebSite JSON-LD'si aynı adı taşır.
  applicationName: "HKMED",
  title: {
    default: "HKMED | Halil Kale Fen Lisesi Mezunlar Derneği",
    template: "%s | HKMED",
  },
  description:
    "Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) resmi web sitesi. Mezunlarımızı bir araya getiren etkinlikler, duyurular ve mezun ağı.",
  keywords: [
    "HKMED",
    "Halil Kale Fen Lisesi",
    "mezunlar derneği",
    "fen lisesi mezunları",
    "HKFL",
    "Manisa",
    "Turgutlu",
  ],
  openGraph: {
    siteName: "HKMED",
    title: "HKMED | Halil Kale Fen Lisesi Mezunlar Derneği",
    description:
      "Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz. Halil Kale Fen Lisesi Mezunlar Derneği.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "HKMED",
      alternateName: ["Halil Kale Fen Lisesi Mezunlar Derneği", "HKFL Mezunlar Derneği"],
      inLanguage: ["tr", "en"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Halil Kale Fen Lisesi Mezunlar Derneği",
      alternateName: "HKMED",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.jpg`,
      email: "iletisim@hkmed.org",
      telephone: "+905392459454",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Subaşı, Seyfi Demirsoy Sk. No:45",
        addressLocality: "Turgutlu",
        addressRegion: "Manisa",
        postalCode: "45400",
        addressCountry: "TR",
      },
      sameAs: [
        "https://www.instagram.com/hkflmezunlar",
        "https://www.linkedin.com/company/halil-kale-fen-lisesi-mezunlar%C4%B1-toplulu%C4%9Fu/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <HtmlLang />
        {/* Kaydırırken sabit duran, yarı saydam logo filigranı; açık zeminli bölümlerin arasından görünür. */}
        <div className="site-watermark" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-watermark.png" alt="" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
