"use client";

import Link from "next/link";
import BlueprintOverlay from "@/components/BlueprintOverlay";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-dark blueprint-grid-dark z-0" style={{marginTop: '-80px'}}>
      <BlueprintOverlay />

      {/* Subtle architectural lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-cream/3" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-cream/3" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-cream/3" />
        <div className="absolute top-0 bottom-0 left-2/3 w-px bg-cream/3" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Coord */}
        <span className="coord-label text-gold/40 block mb-5 animate-fade-in">
          REF: VENZA — 01
        </span>

        {/* Logo */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] text-cream mb-4 animate-fade-in-up">
          VENZA
        </h1>

        {/* Gold line */}
        <div className="w-24 h-px bg-gold/50 mx-auto mb-5 animate-draw-line" />

        {/* Name */}
        <p className="text-lg md:text-xl text-cream/85 mb-2 animate-fade-in-up delay-200">
          م. لينا ناصر اليازجي
        </p>

        {/* Title */}
        <p className="text-sm md:text-base text-cream/60 tracking-wider mb-5 animate-fade-in-up delay-300">
          مصممة داخلي وخارجي
        </p>

        {/* Tagline */}
        <p className="text-gold/80 text-sm tracking-widest mb-7 animate-fade-in-up delay-400">
          مساحات بأسلوب وظيفي وجمالي
        </p>

        {/* Specialties */}
        <div className="flex items-center justify-center gap-8 text-cream/55 text-xs tracking-wider mb-8 animate-fade-in delay-500">
          <span>مقاهي</span>
          <span className="w-1.5 h-1.5 bg-gold/50 rotate-45 inline-block" />
          <span>مكاتب</span>
          <span className="w-1.5 h-1.5 bg-gold/50 rotate-45 inline-block" />
          <span>حدائق</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-600">
          <Link
            href="/projects"
            className="px-10 py-3.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-green-dark transition-all duration-300"
          >
            استعرض الأعمال
          </Link>
          <Link
            href="/contact"
            className="px-10 py-3.5 border border-cream/20 text-cream/60 text-sm tracking-wide hover:border-cream/40 hover:text-cream transition-all duration-300"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-[0.6rem] text-cream/30 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-cream/20" />
      </div>
    </section>
  );
}
