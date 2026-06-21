"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-brand-900 text-white">
      {/* 배경: 딥블루 그라데이션 + 미세 패턴 (실제 현장 사진으로 교체 예정) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
      <div className="absolute inset-0 -z-10 opacity-[0.15] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <motion.div
        aria-hidden
        className="absolute -right-24 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex min-h-[70vh] flex-col justify-center px-6 py-24 sm:px-10 md:min-h-[74vh] md:px-16 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brand-200"
        >
          Grouting Specialist · 20+ Patents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl"
        >
          그라우팅 특화 기술과
          <br />
          <span className="text-brand-200">특허 20+건</span>으로
          <br />
          지반의 안전을 짓습니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-brand-100 md:text-lg"
        >
          차수·강관다단 그라우팅 전문기업 CMPM. 저수지·터널·교량·상하수도까지,
          검증된 기술로 인프라의 안전을 책임집니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition-transform hover:scale-105"
          >
            기술·특허 보기 <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            문의하기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
