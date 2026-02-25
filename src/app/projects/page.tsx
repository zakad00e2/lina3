"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import BlueprintOverlay from "@/components/BlueprintOverlay";
import { projects, categories, type ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Page header */}
      <section className="relative pt-10 pb-8 bg-green-dark overflow-hidden">
        <BlueprintOverlay />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#f7f6f2 1px, transparent 1px), linear-gradient(90deg, #f7f6f2 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="coord-label text-gold/40 block mb-2">
            PAGE — 02
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-wide mb-3">
            المشاريع
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-3" />
          <p className="text-cream/50 text-sm">
            تصفّح أعمالنا في تصميم المقاهي والمكاتب والحدائق
          </p>
        </div>
      </section>

      {/* Filter & grid */}
      <section className="relative py-12 bg-cream blueprint-grid min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                  active === cat.key
                    ? "text-gold"
                    : "text-text-secondary hover:text-green-dark"
                }`}
              >
                {cat.label}
                {active === cat.key && (
                  <span className="absolute bottom-0 right-0 left-0 h-px bg-gold animate-draw-line" />
                )}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-light text-sm">لا توجد مشاريع في هذا التصنيف</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
