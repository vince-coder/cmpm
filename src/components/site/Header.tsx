"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV, COMPANY } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 라우트 이동 시 모바일 메뉴 닫기
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-cmpm flex h-16 items-center justify-between md:h-20">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={`${COMPANY.nameEn} 로고`}
            width={528}
            height={104}
            priority
            className="h-9 w-auto md:h-12"
          />
          <span className="hidden font-display text-lg font-bold tracking-tight text-brand-700 sm:inline md:text-xl">
            씨엠피엠건설
          </span>
        </Link>

        {/* 데스크톱 GNB */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[15px] font-medium transition-colors hover:text-brand-600 ${
                isActive(item.href) ? "text-brand-600" : "text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand-500"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* 모바일 토글 */}
        <button
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <ul className="container-cmpm flex flex-col py-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-3 text-base font-medium ${
                      isActive(item.href) ? "text-brand-600" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
