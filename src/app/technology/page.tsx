import { PageShell, block } from "@/components/site/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/site";

export const metadata = { title: "기술·특허" };

export default function TechnologyPage() {
  return (
    <PageShell
      eyebrow="Technology & Patents"
      title="기술·특허"
      description="차수·강관다단 그라우팅 공법과 20여 건의 보유 특허 — CMPM의 핵심 경쟁력입니다."
    >
      <section className={block}>
        <div className="space-y-12 md:space-y-16">
          {TECHNOLOGIES.map((t, i) => (
            <Reveal key={t.slug} i={i}>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <h2 className="text-2xl font-bold md:text-3xl">{t.name}</h2>
                  <p className="mt-4 text-ink-soft">{t.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${block} text-center`}>
        <p className="eyebrow text-brand-500">Patents</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">보유 특허 20+건</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          특허 번호·명칭·등록일·특허증 이미지가 자료 수령 후 쇼케이스로 정리됩니다.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[3/4] items-center justify-center rounded-xl border border-dashed border-line bg-surface-2 text-xs text-ink-soft"
            >
              특허 #{i + 1}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
