import Image from "next/image";
import { PageShell, block } from "@/components/site/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, HISTORY, VENTURE } from "@/lib/site";
import { MapPin, Phone, Mail, BadgeCheck, FileText } from "lucide-react";

export const metadata = { title: "회사소개" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="회사소개"
      description="그라우팅 특화·특허전문 토목기업 CMPM을 소개합니다."
    >
      {/* 연혁 */}
      <section className={block}>
        <Reveal>
          <p className="eyebrow text-brand-500">History</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">연혁</h2>
          <p className="mt-3 text-ink-soft">
            {COMPANY.established}년 설립 이래 그라우팅·토목 분야의 면허와 전문성을 차곡차곡
            쌓아왔습니다.
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {HISTORY.map((group, gi) => (
            <Reveal key={group.year} i={gi}>
              <div className="grid gap-4 md:grid-cols-[120px_1fr]">
                <div className="font-display text-2xl font-bold text-brand-600">
                  {group.year}
                </div>
                <ul className="space-y-3 border-l border-line pl-6">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="relative">
                      <span className="absolute -left-[1.625rem] top-2 h-2 w-2 rounded-full bg-brand-400" />
                      <span className="block font-semibold text-ink sm:inline-block sm:w-12">
                        {item.month}월
                      </span>
                      <span className="mt-0.5 block text-sm text-ink-soft sm:mt-0 sm:inline sm:text-base">
                        {item.event}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 인증 — 벤처기업확인서 */}
      <section className={block}>
        <Reveal>
          <p className="eyebrow text-brand-500">Certification</p>
          <h2 className="mt-2 hidden text-2xl font-bold tracking-tight md:block md:text-3xl">인증 현황</h2>
          <p className="mt-3 hidden text-ink-soft md:block">
            기술력과 성장성을 공인받은 벤처기업입니다.
          </p>
          {/* 모바일 전용 배지 — 이미지 위 */}
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 md:hidden">
            <BadgeCheck size={16} />
            {VENTURE.badge}
          </span>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-[280px_1fr] md:gap-8">
            {/* 확인서 이미지 — 클릭 시 원본 PDF */}
            <a
              href={VENTURE.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-sm ring-1 ring-line transition hover:ring-brand-400 hover:shadow-lg"
            >
              <Image
                src={VENTURE.image}
                alt={`${COMPANY.nameKo} 벤처기업확인서`}
                width={560}
                height={727}
                className="h-auto w-full transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* 상세 정보 + 다운로드 */}
            <div>
              <span className="hidden items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 md:inline-flex">
                <BadgeCheck size={16} />
                {VENTURE.badge}
              </span>
              <h3 className="hidden text-xl font-bold tracking-tight md:mt-4 md:block">벤처기업확인서</h3>
              <p className="mt-2 hidden text-ink-soft md:block">
                「벤처기업육성에 관한 특별법」에 따라 기술의 혁신성과 사업의 성장성을
                인정받아 벤처기업으로 확인받았습니다.
              </p>

              <dl className="mt-0 grid gap-px overflow-hidden rounded-sm bg-line ring-1 ring-line sm:grid-cols-2 md:mt-6">
                <CertRow label="확인유형" value={VENTURE.type} />
                <CertRow label="확인번호" value={VENTURE.number} />
                <CertRow
                  label="유효기간"
                  value={`${VENTURE.validFrom} ~ ${VENTURE.validTo}`}
                />
                <CertRow label="확인기관" value={VENTURE.issuer} />
              </dl>

              <a
                href={VENTURE.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-fit items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm md:inline-flex"
              >
                <FileText size={16} />
                확인서 원본 보기 (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 오시는 길 */}
      <section className={block}>
        <Reveal>
          <p className="eyebrow text-brand-500">Location</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">오시는 길</h2>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <Info icon={<MapPin size={20} />} label="주소" value={COMPANY.address} />
            <Info icon={<Phone size={20} />} label="전화" value={COMPANY.tel} />
            <Info icon={<Mail size={20} />} label="이메일" value={COMPANY.email} />
          </div>
          <div className="overflow-hidden rounded-sm ring-1 ring-line">
            <iframe
              title="오시는 길"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                COMPANY.address
              )}&hl=ko&z=16&output=embed`}
              className="aspect-[16/10] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CertRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-4 py-3">
      <dt className="text-xs font-semibold text-brand-600">{label}</dt>
      <dd className="mt-0.5 text-sm text-ink">{value}</dd>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="mt-0.5 text-xs text-ink-soft sm:text-base">{value}</div>
      </div>
    </div>
  );
}
