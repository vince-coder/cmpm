import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Hero } from "@/components/home/Hero";
import { block } from "@/components/site/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { GLANCE, TECHNOLOGIES, BUSINESS, PROJECTS, NEWS, ACCENT_COLORS } from "@/lib/site";

const businessItems = BUSINESS.map((b, i) => ({
  no: String(i + 1).padStart(2, "0"),
  title: b.name,
  description: b.summary,
  tags: b.fields,
  color: ACCENT_COLORS[i % ACCENT_COLORS.length],
}));

export default function Home() {
  return (
    <div className="bg-surface-2 pb-6 md:pb-8">
      {/* 히어로 — 둥근 블록 */}
      <div className="container-cmpm pt-4 md:pt-6">
        <Hero />
      </div>

      <div className="container-cmpm mt-5 flex flex-col gap-5 md:mt-6 md:gap-6">
        {/* ===================== AT A GLANCE ===================== */}
        <section className={block}>
          <Reveal>
            <p className="eyebrow text-brand-500">At a glance</p>
            <h2 className="mt-2 hidden text-2xl font-bold tracking-tight md:block md:text-3xl">
              숫자로 보는 CMPM
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:mt-8 md:grid-cols-4">
            {GLANCE.map((g, i) => (
              <Reveal key={g.label} i={i} className="h-full">
                <div
                  className="flex aspect-square h-full flex-col justify-center rounded-sm px-3 py-4 text-center text-white sm:px-6"
                  style={{ backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
                >
                  <div className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
                    <CountUp to={g.value} suffix={g.suffix} raw={g.raw} />
                  </div>
                  <div className="mt-2 text-sm font-semibold">{g.label}</div>
                  <div className="mt-1 min-h-[3em] whitespace-pre-line text-xs text-white/75">{g.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== 핵심 기술·특허 ===================== */}
        <section className={block}>
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <Reveal>
              <p className="eyebrow text-brand-500">Technology &amp; Patents</p>
              <h2 className="mt-2 hidden text-2xl font-bold tracking-tight sm:block sm:text-3xl md:text-4xl">
                그라우팅 기술로
                <br />
                지반의 안전을 설계합니다
              </h2>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 sm:mt-6 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                <ShieldCheck size={16} /> 특허전문기업 · 보유 특허 20+건
              </div>
              <p className="mt-5 hidden max-w-md text-ink-soft sm:block">
                차수·강관다단 그라우팅을 중심으로 한 독자 기술과
                <br />
                <strong className="text-ink">20여 건의 보유 특허</strong>가 CMPM의 가장
                강력한 차별점입니다.
              </p>
              <div className="mt-8 text-center sm:text-left">
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-all hover:gap-2.5"
                >
                  기술·특허 자세히 보기 <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {TECHNOLOGIES.map((t, i) => (
                <Reveal key={t.slug} i={i}>
                  <Link
                    href="/technology"
                    style={{ backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
                    className="group block rounded-sm p-6 text-white transition-all hover:shadow-lg md:p-7"
                  >
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="mt-2 text-sm text-white/85">{t.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {t.points.map((p) => (
                        <li key={p} className="rounded-full bg-white/15 px-3 py-1 text-xs text-white ring-1 ring-white/20">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 사업분야 ===================== */}
        <section className={block}>
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brand-500">Business</p>
            <h2 className="mt-2 hidden text-3xl font-bold tracking-tight md:block md:text-4xl">사업분야</h2>
            <p className="mt-4 text-ink-soft">
              그라우팅 시공을 핵심으로, 교량 유지보수·터널 정밀 제어 굴착까지 토목 인프라의 안전을 폭넓게
              지원합니다.
            </p>
          </Reveal>

          <div className="mt-8">
            <Accordion items={businessItems} />
          </div>
        </section>

        {/* ===================== LANDMARK 실적 ===================== */}
        <section className={block}>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-brand-500">Landmark</p>
              <h2 className="mt-2 hidden text-3xl font-bold tracking-tight md:block md:text-4xl">대표 시공실적</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-all hover:gap-2.5"
            >
              전체 실적 보기 <ArrowRight size={18} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} i={i % 3}>
                <Link href="/projects" className="group block overflow-hidden rounded-sm ring-1 ring-line">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800">
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
                    <span className="absolute left-4 top-4 rounded bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.category}
                    </span>
                    <span className="absolute bottom-4 right-4 font-display text-sm text-white/80">{p.year}</span>
                  </div>
                  <div className="bg-surface p-5">
                    <h3 className="font-bold leading-snug group-hover:text-brand-600">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{p.client}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== 공지·소식 ===================== */}
        <section className={block}>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-brand-500">News</p>
              <h2 className="mt-2 hidden text-3xl font-bold tracking-tight md:block md:text-4xl">공지·소식</h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-all hover:gap-2.5"
            >
              더보기 <ArrowRight size={18} />
            </Link>
          </Reveal>

          <ul className="mt-8 divide-y divide-line overflow-hidden rounded-sm bg-surface-2 ring-1 ring-line">
            {NEWS.map((n, i) => (
              <Reveal as="li" key={n.slug} i={i}>
                <Link href="/news" className="flex items-center gap-3 px-4 py-5 transition-colors hover:bg-surface sm:gap-4 sm:px-6">
                  <span className="shrink-0 rounded bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-600 sm:px-2.5">
                    {n.category}
                  </span>
                  <span className="flex-1 text-sm font-medium sm:text-base">{n.title}</span>
                  <span className="tabular hidden text-sm text-ink-soft sm:block">{n.date}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="overflow-hidden rounded-md bg-brand-600">
          <div className="flex flex-col gap-6 px-6 py-16 md:items-center md:py-20 md:text-center">
            <Reveal className="text-left md:text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                지반·구조물의 안전<span className="hidden md:inline">, </span>
                <br className="md:hidden" />
                CMPM에 문의하세요
              </h2>
              <p className="mt-3 text-brand-100">
                그라우팅 시공부터 유지보수까지, 기술로 답하는 토목 파트너.
              </p>
            </Reveal>
            <Reveal i={1} className="self-start md:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition-transform hover:scale-105 sm:gap-2 sm:px-7 sm:py-3.5 sm:text-base"
              >
                프로젝트 문의하기 <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={18} className="hidden sm:inline" />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
