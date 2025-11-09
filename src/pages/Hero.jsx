import image1 from "../assets/hero/Mandala.png";
import image2 from "../assets/navbar/logo.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-80px)] w-full bg-cover gap-10 md:gap-0 bg-center overflow-hidden">
      {/* Left side */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img
            src={image1}
            className="w-64 md:w-80 lg:w-96 object-contain"
          />
          <img
            src={image2}
            className="absolute w-40 md:w-56 lg:w-72 object-contain opacity-90"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 md:px-12 space-y-4  md:space-y-10">
        <h1 className="text-4xl font-island md:text-7xl text-[#0F3255]">
          Varnan is where stories find their voice and form
        </h1>
        <h2 className="text-2xl md:text-4xl font-halant text-[#F15D2B]">
          Films . Brands . Art
        </h2>
        <p className="text-[#252729] md:text-md max-w-md leading-relaxed font-instrumental">
          Since 2009, V’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
