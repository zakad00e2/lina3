"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import BlueprintOverlay from "@/components/BlueprintOverlay";
import { useInView } from "@/hooks/useInView";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  const [activeImg, setActiveImg] = useState(0);
  const { ref: infoRef, isVisible: infoVisible } = useInView();
  const { ref: galleryRef, isVisible: galleryVisible } = useInView();

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-dark mb-4">
            المشروع غير موجود
          </h1>
          <Link
            href="/projects"
            className="text-sm text-gold hover:text-gold-dark transition-colors"
          >
            العودة للمشاريع
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
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
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cream/40 text-xs hover:text-gold transition-colors duration-300 mb-4"
          >
            <svg
              className="w-3.5 h-3.5 rotate-180"
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
            العودة للمشاريع
          </Link>
          <span className="coord-label text-gold/40 block mb-2">
            PROJECT — {project.number}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-cream tracking-wide mb-3">
            {project.title}
          </h1>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-3" />
          <p className="text-cream/50 text-sm">{project.categoryLabel}</p>
        </div>
      </section>

      {/* Main image */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.gallery[activeImg]}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40" />
            <span className="absolute bottom-4 right-4 coord-label text-cream/60 bg-green-dark/60 px-2 py-1">
              {project.coord}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery thumbnails */}
      <section className="py-4 bg-cream border-b border-line">
        <div
          ref={galleryRef}
          className={`max-w-7xl mx-auto px-6 lg:px-12 ${
            galleryVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex gap-3 justify-center">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative w-24 h-16 md:w-32 md:h-20 overflow-hidden border-2 transition-all duration-300 ${
                  activeImg === i
                    ? "border-gold shadow-lg shadow-gold/10"
                    : "border-line hover:border-gold/40"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                {activeImg === i && (
                  <div className="absolute inset-0 bg-gold/10" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            ref={infoRef}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-10 ${
              infoVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Description */}
            <div className="lg:col-span-2">
              <span className="coord-label block mb-2">DESC — 01</span>
              <h2 className="text-2xl font-bold text-green-dark mb-3">
                عن المشروع
              </h2>
              <div className="h-px w-16 bg-gold/50 mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Info sidebar */}
            <div className="space-y-1">
              <span className="coord-label block mb-2">INFO — 01</span>
              <h3 className="text-lg font-bold text-green-dark mb-3">
                تفاصيل المشروع
              </h3>
              <div className="h-px w-12 bg-gold/50 mb-4" />

              <div className="space-y-4">
                {[
                  { label: "التصنيف", value: project.categoryLabel },
                  { label: "المساحة", value: project.area },
                  { label: "السنة", value: project.year },
                  { label: "العميل", value: project.client },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-line last:border-0"
                  >
                    <span className="text-xs text-text-light tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-green-dark">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-green-dark transition-all duration-300"
                >
                  طلب مشروع مشابه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-10 bg-green-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="coord-label text-gold/40 block mb-2">
            MORE — 01
          </span>
          <h3 className="text-xl font-bold text-cream mb-6">مشاريع أخرى</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group relative w-48 h-32 overflow-hidden border border-cream/10 hover:border-gold/40 transition-all duration-300"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-dark/70 group-hover:bg-green-dark/50 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-cream text-sm font-medium">
                      {p.title}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
