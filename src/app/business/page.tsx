import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/site";

export const metadata = { title: "사업분야" };

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Business"
        title="사업분야"
        description="그라우팅 시공을 핵심으로 교량·상하수도 유지보수까지, 토목 인프라의 안전을 지원합니다."
      />
      <section className="container-cmpm py-20 md:py-24">
        <div className="space-y-12">
          {BUSINESS.map((b, i) => (
            <Reveal key={b.slug} i={i}>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <h2 className="text-2xl font-bold md:text-3xl">{b.name}</h2>
                  <p className="mt-4 text-ink-soft">{b.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {b.fields.map((f) => (
                      <span key={f} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-600">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
