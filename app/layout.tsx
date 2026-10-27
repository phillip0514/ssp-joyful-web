import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://sspjoyful.com";
const TITLE = "元朗僱傭中心｜永諾意 SSP Joyful｜菲傭・印傭・本地及海外女傭";
const DESCRIPTION =
  "永諾意僱傭中心—優質菲傭及印傭、本地完約與海外女傭、文件代辦。勞工處職業介紹所牌照 63253。元朗合益廣場。";
const OG_IMAGE = "/images/PHOTO-2025-04-03-00-01-24.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "永諾意僱傭中心 SSP Joyful",
    locale: "zh_HK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 1600, alt: "永諾意僱傭中心元朗門市" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  verification: {
    google: "6l5ihA4yyJHgZYSwdwjllh-kxh8MCShvqThqcOE6v-g",
  },
};

// Opening hours are left out on purpose: the site says "請以店內公布為準".
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "永諾意僱傭中心",
  alternateName: ["SSP Joyful", "永諾意僱傭"],
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: DESCRIPTION,
  telephone: "+852 3111 9771",
  address: {
    "@type": "PostalAddress",
    streetAddress: "合益廣場一樓 C31A",
    addressLocality: "元朗",
    addressRegion: "新界",
    addressCountry: "HK",
  },
  areaServed: "香港",
  sameAs: ["https://instagram.com/ssp_joyful_helper"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "勞工處職業介紹所牌照 63253",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans text-[15px] leading-normal tracking-normal sm:text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
