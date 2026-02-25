import React, { useEffect } from "react";
import { useLenis } from "../providers/LenisProvider";

const SmoothScrollSection = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.on("scroll", () => {
        // Handle scroll events if needed
      });
    }
  }, [lenis]);

  return (
    <section className="smooth-scroll-section">
      <h1>Smooth Scrolling Section</h1>
      <p>This section utilizes smooth scrolling provided by Lenis.</p>
      {/* Add more content here as needed */}
    </section>
  );
};

export default SmoothScrollSection;
