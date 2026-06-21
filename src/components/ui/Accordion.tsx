"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export type AccordionItem = {
  no: string;        // "01"
  title: string;     // 그라우팅 시공
  description: string;
  tags?: string[];
  color: string;     // 열렸을 때 배경색 (hex)
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-lg ring-1 ring-line transition-colors duration-300"
            style={isOpen ? { backgroundColor: it.color, boxShadow: "none" } : undefined}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-300 md:gap-6 md:px-8 ${
                isOpen ? "text-white" : "bg-surface text-ink hover:bg-surface-2"
              }`}
            >
              <span
                className={`font-display text-lg font-bold tabular md:text-xl ${
                  isOpen ? "text-white/75" : "text-brand-600"
                }`}
              >
                {it.no}
              </span>

              <span className="flex-1">
                <span className="block text-lg font-bold tracking-tight md:text-xl">
                  {it.title}
                </span>
              </span>

              <span
                className={`hidden max-w-md flex-[1.3] text-sm leading-relaxed lg:block ${
                  isOpen ? "text-white/85" : "text-ink-soft"
                }`}
              >
                {it.description}
              </span>

              <span
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-white/20 text-white" : "text-white"
                }`}
                style={isOpen ? undefined : { backgroundColor: it.color }}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-7 md:px-8">
                    {/* 좁은 화면에선 설명을 펼친 영역에 노출 */}
                    <p className="text-sm leading-relaxed text-white/90 lg:hidden">
                      {it.description}
                    </p>
                    {it.tags && it.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {it.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
