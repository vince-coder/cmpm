import Link from "next/link";
import { NAV, COMPANY } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="container-cmpm grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* 회사 */}
        <div>
          <div className="font-display text-2xl font-bold tracking-tight text-white">
            {COMPANY.nameEn}
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-200">
            {COMPANY.tagline}. 차수·강관다단 그라우팅 공법과 20여 건의 특허로
            지반의 안전을 책임집니다.
          </p>
        </div>

        {/* 바로가기 */}
        <nav className="text-sm">
          <h3 className="mb-3 font-semibold text-white">바로가기</h3>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 연락처 */}
        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-white">오시는 길</h3>
          <ul className="space-y-2 text-brand-200">
            <li>{COMPANY.address}</li>
            <li>TEL. {COMPANY.tel}</li>
            <li>{COMPANY.email}</li>
          </ul>
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
