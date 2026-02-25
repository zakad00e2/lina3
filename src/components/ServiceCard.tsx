"use client";

import { useInView } from "@/hooks/useInView";
import type { Service } from "@/data/services";
import { Sofa, Trees, Lightbulb, ClipboardCheck } from "lucide-react";

const iconPaths = {
  interior: <Sofa size={32} strokeWidth={1.2} />,
  exterior: <Trees size={32} strokeWidth={1.2} />,
  consultation: <Lightbulb size={32} strokeWidth={1.2} />,
  supervision: <ClipboardCheck size={32} strokeWidth={1.2} />,
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
