import { PageShell, block } from "@/components/site/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, HISTORY } from "@/lib/site";
import { MapPin, Phone, Mail } from "lucide-react";

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
                      <span className="inline-block w-12 font-semibold text-ink">
                        {item.month}월
                      </span>
                      <span className="text-ink-soft">{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
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
        <div className="mt-0.5 text-ink-soft">{value}</div>
      </div>
    </div>
  );
}
