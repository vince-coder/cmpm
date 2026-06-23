import Link from "next/link";
import Image from "next/image";
import { NAV, COMPANY } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="container-cmpm grid gap-10 py-14 md:grid-cols-[1.4fr_2fr]">
        {/* 회사 */}
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-white.png"
              alt={`${COMPANY.nameEn} 로고`}
              width={528}
              height={104}
              className="h-7 w-auto"
            />
            <span className="font-display text-base font-bold tracking-tight text-white">
              씨엠피엠건설(주)
            </span>
          </div>
        </div>

        {/* 바로가기 + 오시는 길 (제목 옆 가로 배치) */}
        <div className="space-y-6 pl-2 text-sm sm:pl-0">
          <nav className="flex flex-wrap items-baseline gap-x-3 gap-y-3 sm:gap-x-5">
            <h3 className="w-16 shrink-0 font-semibold text-white sm:w-auto">바로가기</h3>
            <ul className="grid grid-cols-3 gap-x-4 gap-y-1 text-xs sm:flex sm:flex-wrap sm:text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-3 sm:gap-x-5">
            <h3 className="w-16 shrink-0 whitespace-nowrap font-semibold text-white sm:w-auto">오시는 길</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-200 sm:text-sm">
              <li className="basis-full sm:basis-auto">{COMPANY.address}</li>
              <li>T. {COMPANY.tel}</li>
              <li>F. {COMPANY.fax}</li>
              <li className="basis-full">E. {COMPANY.email}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-cmpm flex flex-col items-start justify-between gap-3 py-5 text-xs text-brand-300 sm:flex-row sm:items-start">
          <div className="space-y-1">
            <p>씨엠피엠건설(주) · 대표 {COMPANY.ceo}</p>
            <p>사업자등록번호 {COMPANY.bizno}</p>
            <p>업태: {COMPANY.bizType} · 종목: {COMPANY.bizItem}</p>
          </div>
          <div className="space-y-1 sm:text-right">
            <p>© {COMPANY.established}–{new Date().getFullYear()} {COMPANY.nameEn}. All rights reserved.</p>
            <p>{COMPANY.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
