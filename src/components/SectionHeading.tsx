"use client";

import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  coord?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  title,
  subtitle,
  coord,
  align = "center",
}: SectionHeadingProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`mb-10 lg:mb-12 ${
        align === "center" ? "text-center" : "text-start"
      } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {/* Coord reference */}
      {coord && (
        <span className="section-overline">{coord}</span>
      )}

      {/* Main heading — fluid 30→48→60px across breakpoints */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-green-dark mb-3 leading-tight">
        {title}
      </h2>

      {/* Gold separator with flanking dots */}
      <div
        className={`flex items-center gap-2 mb-4 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
        <div className="h-px w-16 bg-gold/50" />
        <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
      </div>

      {/* Subtitle — base size for readability, not xs */}
      {subtitle && (
        <p className="text-text-secondary text-base leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
