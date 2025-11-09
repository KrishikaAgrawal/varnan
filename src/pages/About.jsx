import image1 from "../assets/About/about.png";

const stats = [
  { number: "85+", label: "Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Experts Team" },
];

const About = () => {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-80px)] w-full bg-cover gap-10 md:gap-0 bg-center overflow-hidden relative">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 md:px-12 space-y-4 md:space-y-10">
        <h2 className="md:text-4xl font-halant text-2xl text-[#0F3255]">
          A montage of familiar faces and names.
        </h2>
        <p className="text-[#252729] md:text-lg max-w-md leading-relaxed font-instrumental">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both —
          listening, creating, and building stories that matter.
        </p>
        <div className="flex justify-center items-center gap-[-10px] md:gap-[-20px] relative mt-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`
            relative z-[${i}]
            bg-[#fff3cf]
            w-30 h-30 md:w-40 md:h-40
            flex flex-col items-center justify-center
            shadow-2xl hover:shadow-xl
            rounded-lg
            -mx-2 md:-mx-4
            transition-all duration-300
            rotate-${i === 0 ? "-3" : i === 2 ? "3" : "0"}
            hover:scale-105
          `}
          style={{
            transform: `rotate(${i === 0 ? "15deg" : i === 2 ? "15deg" : "15deg"})`,
          }}
        >
          <h2 className="text-3xl font-instrumental text-[#103255]">{stat.number}</h2>
          <p className="text-[#F15D2B] mt-2 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
      </div>

      {/* Right side */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-8 md:px-12 space-y-6 md:space-y-10">
        <h1 className="text-4xl mb-60 font-island md:text-6xl text-[#0F3255] max-w-2xl">
          Every project is more than just a brief — it’s a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </h1>

        {/* Image fixed at bottom */}
        <img
          src={image1}
          alt="About Decorative"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-140 lg:w-140 -z-10 object-contain opacity-90"
        />
      </div>
    </section>
  );
};

export default About;
