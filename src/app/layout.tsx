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
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: `${COMPANY.nameKo} ${COMPANY.nameEn}`,
    title: `${COMPANY.nameKo} ${COMPANY.nameEn} | ${COMPANY.tagline}`,
    description:
      "씨엠피엠건설(CMPM) — 차수·강관다단 그라우팅 특화, 보유 특허 20+건의 토목 전문기업.",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
