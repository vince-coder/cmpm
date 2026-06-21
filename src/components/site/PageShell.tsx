import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

// 공통 둥근 블록(카드) 클래스 — 홈/서브페이지 공용
export const block =
  "rounded-3xl bg-surface p-6 ring-1 ring-line sm:p-8 md:p-10 lg:p-14";

/** 서브페이지 공통 셸: 회색 배경 위에 둥근 히어로 + 둥근 블록들 */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-surface-2 pb-6 md:pb-8">
      <div className="container-cmpm pt-4 md:pt-6">
        <PageHero eyebrow={eyebrow} title={title} description={description} />
      </div>
      <div className="container-cmpm mt-5 flex flex-col gap-5 md:mt-6 md:gap-6">
        {children}
      </div>
    </div>
  );
}
