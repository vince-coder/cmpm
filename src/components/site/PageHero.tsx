export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-brand-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-900" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative px-6 py-20 sm:px-10 md:px-16 md:py-24">
        <p className="eyebrow text-brand-200">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-brand-100 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

/** 아직 콘텐츠 자료 대기 중인 섹션 표시용 (개발 진행 중 안내) */
export function Placeholder({ note }: { note: string }) {
  return (
    <div className="rounded-lg border border-dashed border-line bg-surface-2 p-10 text-center text-ink-soft">
      <p className="font-semibold text-ink">제작 중 섹션</p>
      <p className="mt-2 text-sm">{note}</p>
    </div>
  );
}
