"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const socials = [
  {
    name: "Dribbble",
    link: "https://dribbble.com/trionndesign",
    icon: "/images/dribble.svg",
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com/company/2715714",
    icon: "/images/linkedin.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/trionndesign/",
    icon: "/images/instagram.svg",
  },
  {
    name: "Behance",
    link: "https://www.behance.net/TrionnDesign",
    icon: "/images/behance.svg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/trionnagency/",
    icon: "/images/facebook.svg",
  },
];

const iconSpin = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 1.6, ease: "easeInOut" },
  },
};

export default function SocialLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4"
          >
            Follow Along
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-12 md:mb-20 tracking-tight leading-none"
          >
            JOIN OUR
            <br />
            JUNGLE TREK
          </motion.h2>
        </div>

        {/* Social rows */}
        <div>
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              className="flex items-center justify-between py-6 md:py-8 border-t border-current/15 cursor-pointer group"
            >
              <motion.div className="flex items-center gap-4 sm:gap-8">
                <motion.h3
                  variants={{
                    initial: { x: 0 },
                    hover: {
                      scale: 1.75,
                      x: 12,
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight"
                >
                  {social.name}
                </motion.h3>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.div
                  variants={iconSpin}
                  className="w-6 h-6 md:w-8 md:h-8 relative"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: -6 },
                    hover: { opacity: 1, x: 0, transition: { duration: 0.25 } },
                  }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-current/15" />
        </div>
      </div>
    </section>
  );
}
