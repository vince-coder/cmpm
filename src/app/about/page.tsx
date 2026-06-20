import { PageHero, Placeholder } from "@/components/site/PageHero";

export const metadata = { title: "회사소개" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="회사소개"
        description="그라우팅 특화·특허전문 토목기업 CMPM을 소개합니다."
      />
      <Placeholder note="인사말 · 경영이념 · 연혁 · 인증/면허 · 오시는 길 — 실제 회사 자료가 들어오는 대로 채워집니다." />
    </>
  );
}
