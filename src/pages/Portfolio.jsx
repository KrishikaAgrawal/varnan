import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cam from "../assets/portfolio/cam.png";
import footer from "../assets/portfolio/Footer.png";
import image from "../assets/portfolio/image.png";

const Portfolio = () => {
  const images = [image, image, image]; 
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-[calc(100vh-80px)] w-full bg-cover bg-center overflow-hidden">
      {/* Background Images */}
      <img
        src={cam}
        alt="Top Decoration"
        className="absolute top-10 md:top-20 left-5 md:left-10 w-24 md:w-32 object-contain opacity-90 -z-10"
      />
      <img
        src={footer}
        alt="Bottom Decoration"
        className="absolute bottom-0 right-0 w-32 md:w-48 object-contain opacity-90 -z-10"
      />

      {/* Heading */}
      <div className=" text-[#252729] text-center flex flex-col gap-2 md:gap-3 w-full">
        <h1 className="text-xl md:text-2xl font-halant">The Highlight Reel</h1>
        <p className="text-sm md:text-lg font-instrumental">
          Watch the magic we’ve captured.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl mt-6 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 text-[#0F3255] hover:text-[#F15D2B] transition text-2xl md:text-3xl"
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-72 md:w-[450px] lg:w-[550px] object-contain rounded-lg shadow-md transition-all duration-500"
        />

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 text-[#0F3255] hover:text-[#F15D2B] transition text-2xl md:text-3xl"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots (optional) */}
      <div className="flex mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === index ? "bg-[#F15D2B]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
