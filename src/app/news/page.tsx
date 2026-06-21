import { PageShell, block } from "@/components/site/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS } from "@/lib/site";

export const metadata = { title: "공지·소식" };

export default function NewsPage() {
  return (
    <PageShell
      eyebrow="News"
      title="공지·소식"
      description="수주·특허 등록·수상 등 CMPM의 소식을 전합니다."
    >
      <section className={block}>
        <ul className="divide-y divide-line overflow-hidden rounded-lg bg-surface-2 ring-1 ring-line">
          {NEWS.map((n, i) => (
            <Reveal as="li" key={n.slug} i={i}>
              <div className="flex items-center gap-4 px-6 py-5">
                <span className="rounded bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                  {n.category}
                </span>
                <span className="flex-1 font-medium">{n.title}</span>
                <span className="tabular text-sm text-ink-soft">{n.date}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
