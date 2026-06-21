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
            <span className="font-display text-xl font-bold tracking-tight text-white">
              씨엠피엠건설
            </span>
          </div>
        </div>

        {/* 바로가기 + 오시는 길 (제목 옆 가로 배치) */}
        <div className="space-y-6 text-sm">
          <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h3 className="font-semibold text-white">바로가기</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h3 className="whitespace-nowrap font-semibold text-white">오시는 길</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-brand-200">
              <li className="basis-full">{COMPANY.address}</li>
              <li>TEL. {COMPANY.tel}</li>
              <li>{COMPANY.email}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-cmpm flex flex-col items-start justify-between gap-2 py-5 text-xs text-brand-300 sm:flex-row sm:items-center">
          <span>
            © {COMPANY.established}–{new Date().getFullYear()} {COMPANY.nameEn}.
            All rights reserved.
          </span>
          <span>{COMPANY.domain}</span>
        </div>
      </div>
    </footer>
  );
}
