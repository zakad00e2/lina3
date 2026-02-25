"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group relative bg-white border border-line-gold/25 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/8 transition-all duration-500 overflow-hidden block cursor-pointer"
      >
      {/* Image Area */}
      <div className="relative aspect-[4/3] bg-cream-dark overflow-hidden">
        {/* Image element */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Technical frame corners */}
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
      </div>

      {/* Info below image */}
      <div className="p-6 bg-white border-t border-line-gold/15 relative z-10">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-base font-semibold text-green-dark group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-gold/65 tracking-wider shrink-0 ms-3">
            {project.number}
          </span>
        </div>
        <p className="text-sm text-text-light line-clamp-2 leading-relaxed">
          {project.categoryLabel}
        </p>
      </div>
      </Link>
    </div>
  );
}

