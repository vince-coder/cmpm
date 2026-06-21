import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/site";

// 검색엔진 수집 허용 + 사이트맵 위치 안내
export default function robots(): MetadataRoute.Robots {
  const base = `https://${COMPANY.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
