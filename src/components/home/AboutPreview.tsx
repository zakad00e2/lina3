"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function AboutPreview() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative py-14 bg-cream z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="coord-label block mb-2">SEC — 04</span>

          <div className="relative inline-block mb-5">
            <div className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-gold/20" />
            <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-gold/20" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark px-6 py-2">
              عن المصممة
            </h2>
          </div>

          <div className="h-px w-20 bg-gold/50 mx-auto mb-5" />

          <p className="text-text-secondary text-base leading-relaxed mb-3">
            م. لينا ناصر اليازجي — مصممة معمارية متخصصة في التصميم الداخلي
            والخارجي. أؤمن بأن كل مساحة تحمل قصة، ومهمتي هي تحويل هذه القصص إلى
            واقع ملموس يجمع بين الجمال والوظيفية.
          </p>

          <p className="text-text-light text-sm leading-relaxed mb-6">
            متخصصة في تصميم المقاهي والمكاتب والحدائق بأسلوب معماري دقيق ومميز.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-sm text-gold hover:text-gold-dark transition-colors duration-300 group"
          >
            اقرأ المزيد
            <svg
              className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
