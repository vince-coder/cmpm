import { PageShell, block } from "@/components/site/PageShell";
import { COMPANY } from "@/lib/site";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = { title: "문의" };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="문의"
      description="프로젝트 문의를 남겨주시면 담당자가 신속히 연락드립니다."
    >
      <section className={block}>
        <div className="grid gap-12 md:grid-cols-2">
          {/* 문의 폼 (제출 동작은 P6에서 Resend 연결) */}
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="이름" name="name" />
              <Field label="연락처" name="phone" />
            </div>
            <Field label="이메일" name="email" type="email" />
            <Field label="제목" name="subject" />
            <div>
              <label className="mb-1.5 block text-sm font-medium">문의 내용</label>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-brand-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
            >
              문의 보내기
            </button>
            <p className="text-xs text-ink-soft">
              * 폼 전송(Resend 이메일)은 백엔드 연결 단계에서 활성화됩니다.
            </p>
          </form>

          {/* 연락처 */}
          <div className="space-y-6">
            <Info icon={<MapPin size={20} />} label="주소" value={COMPANY.address} />
            <Info icon={<Phone size={20} />} label="전화" value={COMPANY.tel} />
            <Info icon={<Mail size={20} />} label="이메일" value={COMPANY.email} />
            <div className="overflow-hidden rounded-lg ring-1 ring-line">
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
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
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
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="mt-0.5 text-ink-soft">{value}</div>
      </div>
    </div>
  );
}
