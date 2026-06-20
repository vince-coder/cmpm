import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Droplets, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Hero } from "@/components/home/Hero";
import { GLANCE, TECHNOLOGIES, BUSINESS, PROJECTS, NEWS } from "@/lib/site";

const businessIcons = [Droplets, Wrench, Layers];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ===================== AT A GLANCE ===================== */}
      <section className="border-y border-line bg-surface-2">
        <div className="container-cmpm py-16 md:py-20">
          <Reveal>
            <p className="eyebrow text-brand-500">At a glance</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              숫자로 보는 CMPM
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {GLANCE.map((g, i) => (
              <Reveal key={g.label} i={i} className="bg-surface px-6 py-8 text-center">
                <div className="font-display text-4xl font-extrabold text-brand-600 md:text-5xl">
                  <CountUp to={g.value} suffix={g.suffix} raw={g.raw} />
                </div>
                <div className="mt-2 text-sm font-semibold">{g.label}</div>
                <div className="mt-1 text-xs text-ink-soft">{g.note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 핵심 기술·특허 ===================== */}
      <section className="container-cmpm py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-brand-500">Technology &amp; Patents</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              그라우팅 기술로
              <br />
              지반의 안전을 설계합니다
            </h2>
            <p className="mt-5 max-w-md text-ink-soft">
              차수·강관다단 그라우팅을 중심으로 한 독자 기술과
              <strong className="text-ink"> 20여 건의 보유 특허</strong>가 CMPM의 가장
              강력한 차별점입니다.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
              <ShieldCheck size={18} /> 특허전문기업 · 보유 특허 20+건
            </div>
            <div className="mt-8">
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
                  className="group block rounded-2xl border border-line p-6 transition-all hover:border-brand-300 hover:shadow-lg md:p-7"
                >
                  <h3 className="text-xl font-bold group-hover:text-brand-600">{t.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{t.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.points.map((p) => (
                      <li key={p} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-ink-soft">
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
      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-cmpm">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brand-500">Business</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">사업분야</h2>
            <p className="mt-4 text-ink-soft">
              그라우팅 시공을 핵심으로, 교량·상하수도 유지보수까지 토목 인프라의 안전을 폭넓게
              지원합니다.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BUSINESS.map((b, i) => {
              const Icon = businessIcons[i] ?? Layers;
              return (
                <Reveal key={b.slug} i={i}>
                  <Link
                    href="/business"
                    className="group flex h-full flex-col rounded-2xl bg-surface p-7 shadow-sm ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold group-hover:text-brand-600">{b.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{b.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.fields.map((f) => (
                        <span key={f} className="rounded bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
                          {f}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== LANDMARK 실적 ===================== */}
      <section className="container-cmpm py-20 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-brand-500">Landmark</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">대표 시공실적</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-all hover:gap-2.5"
          >
            전체 실적 보기 <ArrowRight size={18} />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} i={i % 3}>
              <Link href="/projects" className="group block overflow-hidden rounded-2xl border border-line">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800">
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
                  <span className="absolute left-4 top-4 rounded bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 right-4 font-display text-sm text-white/80">{p.year}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug group-hover:text-brand-600">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.client}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== 공지·소식 ===================== */}
      <section className="bg-surface-2 py-20 md:py-24">
        <div className="container-cmpm">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-brand-500">News</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">공지·소식</h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-all hover:gap-2.5"
            >
              더보기 <ArrowRight size={18} />
            </Link>
          </Reveal>

          <ul className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            {NEWS.map((n, i) => (
              <Reveal as="li" key={n.slug} i={i}>
                <Link href="/news" className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-surface-2">
                  <span className="rounded bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                    {n.category}
                  </span>
                  <span className="flex-1 font-medium">{n.title}</span>
                  <span className="tabular hidden text-sm text-ink-soft sm:block">{n.date}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-brand-600">
        <div className="container-cmpm flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              지반·구조물의 안전, CMPM에 문의하세요
            </h2>
            <p className="mt-3 text-brand-100">
              그라우팅 시공부터 유지보수까지, 기술로 답하는 토목 파트너.
            </p>
          </Reveal>
          <Reveal i={1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 transition-transform hover:scale-105"
            >
              프로젝트 문의하기 <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
