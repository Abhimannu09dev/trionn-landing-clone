"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

function useCounter(target, inView, duration = 1800) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const numeric = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/[0-9]/g, "");
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric) + suffix);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numeric + suffix);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count || "0";
}

const stats = [
  {
    title: "AWARDS &\nRECOGNITION",
    count: "50+",
    hoverClass: "hover:bg-red-500 hover:text-white",
  },
  {
    title: "PROJECTS\nCOMPLETED",
    count: "900+",
    hoverClass: "hover:bg-[#C8D1D1] hover:text-black",
  },
  {
    title: "CREATIVE\nMINDS",
    count: "20+",
    hoverClass: "hover:bg-[#A1C9B8] hover:text-black",
  },
  {
    title: "YEARS OF\nEXPERIENCE",
    count: "20+",
    hoverClass: "hover:bg-yellow-300 hover:text-black",
  },
];

const TICKER_ITEMS_TOP = [
  "WILD IDEAS!",
  "—",
  "WILD IDEAS!",
  "—",
  "WILD IDEAS!",
  "—",
  "WILD IDEAS!",
  "—",
  "WILD IDEAS!",
  "—",
  "WILD IDEAS!",
  "—",
];
const TICKER_ITEMS_BOTTOM = [
  "LET'S DIVE IN!",
  "—",
  "LET'S DIVE IN!",
  "—",
  "LET'S DIVE IN!",
  "—",
  "LET'S DIVE IN!",
  "—",
  "LET'S DIVE IN!",
  "—",
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useCounter(stat.count, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className={`p-6 md:p-8 rounded-2xl border border-current/10 h-44 md:h-64 flex flex-col justify-between cursor-default transition-colors duration-300 ${stat.hoverClass}`}
    >
      <p className="text-4xl md:text-6xl lg:text-7xl font-black">{count}</p>
      <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-right whitespace-pre-line leading-tight tracking-wide uppercase opacity-80">
        {stat.title}
      </h3>
    </motion.div>
  );
}

export default function KnowUs() {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-10% 0px" });

  return (
    <>
      <section className="max-w-6xl mx-auto py-20 md:py-32 px-6">
        {/* Header */}
        <div ref={textRef}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-14 tracking-tight leading-none"
          >
            WHO WE ARE
          </motion.h2>

          {/* Two-column text layout like the real site */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug"
            >
              As an award-winning agency within the digital jungle, TRIONN®
              transcends aesthetics, crafting your vision into a legacy that
              endures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="flex flex-col justify-end gap-6"
            >
              <p className="text-base md:text-lg opacity-70 leading-relaxed">
                We roar with creativity, staying updated with the latest tech to
                make your brand a formidable force in the digital wilderness and
                deliver exceptional website and app experiences.
              </p>
              <a
                href="#"
                className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-current pb-1 hover:opacity-50 transition-opacity duration-300"
              >
                About Us <span>→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.title} stat={stat} index={i} />
          ))}
        </div>
      </section>
      <section>
        <div className="mb-8 md:mb-12 space-y-2 md:space-y-3">
          {/* Row 1 — scrolls left */}
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee-left gap-6 md:gap-10">
              {[...TICKER_ITEMS_TOP, ...TICKER_ITEMS_TOP].map((item, i) => (
                <span
                  key={i}
                  className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-widest ${
                    item === "—" ? "opacity-30" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee-right gap-6 md:gap-10">
              {[...TICKER_ITEMS_BOTTOM, ...TICKER_ITEMS_BOTTOM].map(
                (item, i) => (
                  <span
                    key={i}
                    className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-widest ${
                      item === "—" ? "opacity-30" : ""
                    }`}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
