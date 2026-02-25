"use client";

import { CircleArrowUpIcon } from "lucide-react";
import Image from "next/image";



export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-8 md:pt-16 overflow-hidden">


      {/* ── Contact + Scroll up ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-12 mb-10 md:mb-16 gap-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Get In Touch
          </p>
          <a
            href="mailto:hello@trionn.com"
            className="block text-sm md:text-base hover:opacity-50 transition-opacity"
          >
            hello@trionn.com
          </a>
          <a
            href="tel:+919824182099"
            className="block text-sm md:text-base hover:opacity-50 transition-opacity"
          >
            +91 98241 82099
          </a>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2 hover:opacity-50 transition-opacity duration-300 self-end sm:self-auto"
        >
          <CircleArrowUpIcon size={28} />
        </button>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex justify-between items-center px-6 md:px-12 pb-6 text-xs opacity-40 uppercase tracking-widest">
        <p>&copy;2026 TRIONN®</p>
      </div>

      {/* ── Scrolling footer logo marquee ── */}
      <div className="relative w-full overflow-hidden mt-2">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-shrink-0 px-8 opacity-[0.07]">
              <Image
                src="/images/footer-logo-dark.01be769b.svg"
                alt="Trionn"
                width={320}
                height={80}
                className="h-16 sm:h-20 md:h-28 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
