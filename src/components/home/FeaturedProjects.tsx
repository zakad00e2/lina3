"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative py-14 bg-cream z-10 overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          title="أبرز المشاريع"
          subtitle="مساحات صمّمناها بعناية تجمع بين الوظيفية والجمال"
          coord="SEC — 02"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors duration-300 group"
          >
            <span className="h-px w-8 bg-line group-hover:bg-gold/40 group-hover:w-12 transition-all duration-300" />
            مشاهدة جميع المشاريع
            <span className="h-px w-8 bg-line group-hover:bg-gold/40 group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
