import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { COMPANY } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Pretendard 가변폰트 (셀프호스트 — public/fonts 에 woff2 배치)
const pretendard = localFont({
  variable: "--font-pretendard",
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title: {
    default: `${COMPANY.nameKo} ${COMPANY.nameEn} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.nameKo} ${COMPANY.nameEn}`,
  },
  description:
    "씨엠피엠건설(CMPM) — 차수 그라우팅·강관다단 그라우팅 특화, 보유 특허 20+건의 토목 전문기업. 저수지·터널·교량·상하수도 시공 및 유지보수. 광주광역시 소재.",
  keywords: [
    "씨엠피엠건설",
    "씨엠피엠",
    "CMPM",
    "그라우팅",
    "차수 그라우팅",
    "강관다단 그라우팅",
    "특허 토목기업",
    "광주 토목",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `https://${COMPANY.domain}`,
    siteName: `${COMPANY.nameKo} ${COMPANY.nameEn}`,
    title: `${COMPANY.nameKo} ${COMPANY.nameEn} | ${COMPANY.tagline}`,
    description:
      "씨엠피엠건설(CMPM) — 차수·강관다단 그라우팅 특화, 보유 특허 20+건의 토목 전문기업.",
    images: [
      { url: "/hero-tunnel.png", width: 1200, height: 630, alt: `${COMPANY.nameKo} ${COMPANY.nameEn}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.nameKo} ${COMPANY.nameEn} | ${COMPANY.tagline}`,
    description:
      "씨엠피엠건설(CMPM) — 차수·강관다단 그라우팅 특화, 보유 특허 20+건의 토목 전문기업.",
    images: ["/hero-tunnel.png"],
  },
};

// 검색엔진(네이버·구글)에 "씨엠피엠건설 = 이 도메인"을 명시하는 구조화 데이터
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "씨엠피엠건설(주)",
  alternateName: ["씨엠피엠건설", "씨엠피엠", "CMPM", "CMPM건설"],
  url: `https://${COMPANY.domain}`,
  logo: `https://${COMPANY.domain}/logo.png`,
  image: `https://${COMPANY.domain}/hero-tunnel.png`,
  description:
    "씨엠피엠건설(CMPM)은 차수 그라우팅·강관다단 그라우팅에 특화된 특허전문 토목기업입니다. 저수지·터널·교량·상하수도 시공 및 유지보수를 수행합니다.",
  foundingDate: String(COMPANY.established),
  taxID: COMPANY.bizno,
  founder: { "@type": "Person", name: COMPANY.ceo },
  telephone: "+82-62-381-9257",
  faxNumber: "+82-62-381-9258",
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "서구 유림로98번길 43, 6층",
    addressLocality: "광주광역시",
    addressCountry: "KR",
  },
  areaServed: "KR",
  knowsAbout: ["차수 그라우팅", "강관다단 그라우팅", "교량 유지보수", "터널 보강"],
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
