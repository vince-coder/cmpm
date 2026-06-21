import type { MetadataRoute } from "next";
import { COMPANY, NAV } from "@/lib/site";

// 네이버/구글 검색엔진 수집용 사이트맵 — NAV에 라우트 추가하면 자동 반영
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${COMPANY.domain}`;
  const routes = ["/", ...NAV.map((n) => n.href)];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
