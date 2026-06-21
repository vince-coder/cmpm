import { PageShell, block } from "@/components/site/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { BUSINESS, ACCENT_COLORS } from "@/lib/site";

export const metadata = { title: "사업분야" };

const items = BUSINESS.map((b, i) => ({
  no: String(i + 1).padStart(2, "0"),
  title: b.name,
  description: b.summary,
  tags: b.fields,
  color: ACCENT_COLORS[i % ACCENT_COLORS.length],
}));

export default function BusinessPage() {
  return (
    <PageShell
      eyebrow="Business"
      title="사업분야"
      description="그라우팅 시공을 핵심으로 교량·상하수도 유지보수까지, 토목 인프라의 안전을 지원합니다."
    >
      <section className={block}>
        <p className="eyebrow text-brand-500">Our Business</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">사업 영역</h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          각 항목을 열어 세부 적용 분야를 확인하세요.
        </p>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
      </section>
    </PageShell>
  );
}
