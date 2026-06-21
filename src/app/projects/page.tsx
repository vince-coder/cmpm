import Link from "next/link";
import { PageShell, block } from "@/components/site/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/site";

export const metadata = { title: "시공실적" };

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="시공실적"
      description="저수지·터널·교량·상하수도 전 분야에 걸친 CMPM의 대표 그라우팅 실적입니다."
    >
      <section className={block}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} i={i % 3}>
              <Link href="/projects" className="group block overflow-hidden rounded-sm ring-1 ring-line">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-600 to-brand-800">
                  <span className="absolute left-4 top-4 rounded bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 right-4 font-display text-sm text-white/80">{p.year}</span>
                </div>
                <div className="bg-surface p-5">
                  <h3 className="font-bold group-hover:text-brand-600">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.client}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
