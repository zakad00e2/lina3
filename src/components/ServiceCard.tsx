"use client";

import { useInView } from "@/hooks/useInView";
import type { Service } from "@/data/services"/* Updated Icons - Simplified Geometric Style */
const iconPaths = {
  interior: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
      <path d="M3 21h18M5 21V7l8-4 8 4v14" />
      <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z" />
    </svg>
  ),
  exterior: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
      <path d="M4 21V10s2-2 4-2c2 0 4 2 4 2s2-2 4-2c2 0 4 2 4 2s2-2 4-2c2 0 4 2 4 2v11" />
      <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    </svg>
  ),
  consultation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  supervision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white border border-line p-8 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/8 transition-all duration-500 overflow-hidden ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover Background Accent — subtle warm gold tint */}
      <div className="absolute inset-0 bg-linear-to-br from-gold/[0.06] via-cream-dark/60 to-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top accent bar — expands on hover */}
      <div className="absolute top-0 right-0 left-0 h-0.5 bg-linear-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Number Watermark */}
      <span className="absolute top-4 left-4 text-5xl font-bold text-green-dark/[0.04] select-none group-hover:text-gold/[0.08] transition-colors duration-500">
        {service.number}
      </span>

      {/* Header */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon — circle background on hover */}
        <div className="text-green-dark group-hover:text-gold transition-colors duration-300 mb-6 w-14 h-14 flex items-center justify-center bg-cream-dark/60 group-hover:bg-gold/10 rounded-none transition-all duration-300">
          {iconPaths[service.icon]}
        </div>

        <h3 className="text-lg font-bold text-green-dark mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Bottom Line — wider and more visible at rest */}
        <div className="w-10 h-0.5 bg-gold/25 group-hover:w-full group-hover:bg-gold/60 transition-all duration-500 ease-out" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[2px] border-r-[2px] border-gold opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-400 ease-out delay-100" />
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[2px] border-l-[2px] border-gold/40 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-400 ease-out delay-150" />
    </div>
  );
}
