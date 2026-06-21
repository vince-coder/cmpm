// CMPM 사이트 전역 설정 + 더미 콘텐츠
// 실제 자료(특허/실적/회사정보)가 들어오면 이 파일과 /content를 교체

export const COMPANY = {
  name: "씨엠피엠",
  nameEn: "CMPM",
  tagline: "그라우팅 특화 · 특허전문 토목기업",
  established: 2004,
  address: "광주광역시 서구 유림로98번길 43, 6층",
  tel: "062-381-9257",
  email: "contact@cmpm-group.com",
  domain: "www.cmpm-group.com",
} as const;

// 블록·아코디언 다양화용 액센트 (로열블루 톤 유지) — 순서대로 배정
export const ACCENT_COLORS = ["#1f47d0", "#0d9488", "#4338ca", "#0369a1", "#7c3aed"];

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "기술·특허", href: "/technology" },
  { label: "사업분야", href: "/business" },
  { label: "시공실적", href: "/projects" },
  { label: "공지·소식", href: "/news" },
  { label: "문의", href: "/contact" },
];

// AT A GLANCE 지표 (★ 1번 = 특허 20+)
export const GLANCE = [
  { value: 20, suffix: "+", label: "보유 특허", note: "차수·강관다단 그라우팅" },
  { value: 2004, suffix: "", label: "설립연도", note: "축적된 시공 노하우", raw: true },
  { value: 150, suffix: "+", label: "누적 시공실적", note: "전국 주요 현장" },
  { value: 6, suffix: "종", label: "적용 분야", note: "저수지·터널·교량 등" },
];

// 핵심 기술 (홈 요약 + /technology)
export const TECHNOLOGIES = [
  {
    slug: "waterproof-grouting",
    name: "차수 그라우팅",
    summary:
      "지반·구조물 균열로 유입되는 지하수를 차단하는 핵심 공법. 저수지·터널·지하구조물의 누수를 근본적으로 제어합니다.",
    points: ["고결재 주입으로 차수벽 형성", "저수지·터널 누수 보강", "환경 영향 최소화 배합"],
  },
  {
    slug: "steel-pipe-multistage",
    name: "강관다단 그라우팅",
    summary:
      "연약지반·터널 막장을 강관과 다단 주입으로 보강해 굴착 안정성을 확보하는 대표 보강 공법입니다.",
    points: ["터널 막장 선행 보강", "연약지반 지지력 향상", "침하·붕괴 리스크 저감"],
  },
];

// 사업분야
export const BUSINESS = [
  {
    slug: "grouting",
    name: "그라우팅 시공",
    summary: "차수·보강 그라우팅 전문 시공. 저수지·터널·지하철·철도·도로·교량·상하수도 전 분야 적용.",
    fields: ["저수지", "터널·지하철", "철도", "도로", "교량", "상하수도"],
  },
  {
    slug: "bridge",
    name: "교량 유지보수",
    summary: "교량 구조물의 안전점검·보수보강으로 구조 수명을 연장합니다.",
    fields: ["내하력 보강", "균열·누수 보수", "안전점검"],
  },
  {
    slug: "water",
    name: "상하수도 유지보수",
    summary: "노후 관로 진단·갱생·차수로 상하수도 시설의 기능을 회복합니다.",
    fields: ["관로 갱생", "누수 차단", "비굴착 보수"],
  },
];

// 대표 실적 (LANDMARK) — 더미
export const PROJECTS = [
  { slug: "reservoir-a", title: "OO저수지 차수 그라우팅", category: "저수지", year: 2024, client: "한국농어촌공사" },
  { slug: "tunnel-b", title: "OO터널 강관다단 보강", category: "터널", year: 2023, client: "국가철도공단" },
  { slug: "bridge-c", title: "OO대교 교량 보수보강", category: "교량", year: 2023, client: "OO시청" },
  { slug: "subway-d", title: "도시철도 OO공구 차수", category: "지하철", year: 2022, client: "OO교통공사" },
  { slug: "water-e", title: "OO지구 상수도 관로 갱생", category: "상하수도", year: 2022, client: "OO시 상수도사업본부" },
  { slug: "road-f", title: "국도 OO호선 연약지반 보강", category: "도로", year: 2021, client: "OO국토관리청" },
];

// 연혁 (면허·등록 이력) — 최신 연도부터
export const HISTORY = [
  {
    year: 2011,
    items: [
      { month: "06", event: "신재생에너지 설비 설치 전문기업 등록" },
      { month: "04", event: "토공사업 면허 취득" },
    ],
  },
  {
    year: 2009,
    items: [{ month: "04", event: "석공사업 면허 취득" }],
  },
  {
    year: 2008,
    items: [{ month: "07", event: "엔지니어링사업자 신고증 취득" }],
  },
  {
    year: 2007,
    items: [
      { month: "06", event: "지하수영향조사기관 지정" },
      { month: "05", event: "철근콘크리트공사업 면허 취득" },
    ],
  },
  {
    year: 2004,
    items: [
      { month: "09", event: "보링그라우팅공사업 면허 취득" },
      { month: "08", event: "지하수개발·이용시공업 등록" },
      { month: "07", event: "씨엠피엠건설(주) 설립" },
    ],
  },
];

// 공지·소식 — 더미
export const NEWS = [
  { slug: "patent-2025", title: "차수 그라우팅 신공법 특허 등록", date: "2025-05-12", category: "특허" },
  { slug: "award-2025", title: "OO터널 보강 공사 우수시공 선정", date: "2025-03-04", category: "수상" },
  { slug: "contract-2025", title: "OO저수지 보강사업 수주", date: "2025-01-20", category: "수주" },
];
