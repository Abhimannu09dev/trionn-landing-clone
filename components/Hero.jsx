import { CircleArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-6 max-w-4xl">
        <span>ROAR IN THE </span>
        <span>DIGITAL WILDERNESS.</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center max-w-xl uppercase px-4">
        We roar with success, delivering the TRIONN® through versatile design,
        branding and the latest tech development to companies.
      </p>
      <button className="mt-10 px-8 py-4 font-semibold rounded-lg transition">
        <CircleArrowDown size={30} className="inline-block mr-2" />
      </button>
      <a
        className="text-sm uppercase tracking-widest hover:opacity-60 transition cursor-pointer external-link"
        href="#"
      >
        Explore Work
      </a>
    </section>
  );
};

export default Hero;
