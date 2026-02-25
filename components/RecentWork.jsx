"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const projects = [
  {
    title: "LOFTFLOOM",
    image: "/images/loftloom-main-landscape.webp",
    desc: "UI Design, UX, Wireframe",
    tag: "01",
  },
  {
    title: "IMUSIC",
    image: "/images/imusic-main-landscape.webp",
    desc: "Research, UX, UI Design",
    tag: "02",
  },
  {
    title: "TECHNIS",
    image: "/images/technis-main-landscape.webp",
    desc: "UX, UI Design, Development",
    tag: "03",
  },
];

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center gap-8 md:gap-16`}
    >
      {/* Text */}
      <div className="flex-1 w-full">
        <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-3 block">
          {project.tag}
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base opacity-60 uppercase tracking-widest mb-6">
          {project.desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest group"
        >
          View Project
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Image */}
      <motion.div
        className="flex-1 w-full overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
}

export default function RecentWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      {/* Section header */}
      <div ref={headerRef}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4"
        >
          Recent Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tight leading-none"
        >
          RECENT WORK
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl opacity-70 mb-16 md:mb-24"
        >
          In the creative wilderness, clients find our work truly beloved.
        </motion.p>
      </div>

      {/* Project rows */}
      <div className="space-y-20 md:space-y-32">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 md:mt-28 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-current pb-1 hover:opacity-50 transition-opacity duration-300"
        >
          View All Work <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}
