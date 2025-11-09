import { Link } from "react-router-dom";
import service from "../assets/services/service.png";
import service1 from "../assets/services/service1.png";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service3.png";
import line from "../assets/services/line.png";

const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[calc(100vh-80px)] w-full bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <img
        src={service}
        className="absolute bottom-0 object-contain opacity-90 -z-10"
        alt="Background"
      />

      {/* Heading with line */}
      <div className="text-[#252729] text-center flex flex-col items-center gap-3 w-full">
        <h1 className="text-xl md:text-2xl font-halant inline-block relative">
          The storyboard reveals the breadth of our craft.
          {/* Line image under heading */}
          <img
            src={line}
            alt="Underline"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[80%] md:w-[60%] object-contain"
          />
        </h1>
      </div>

      {/* Services images */}
      <div className="mt-16 flex gap-5 md:h-88 flex-col md:flex-row items-center justify-center">
        <Link to="/services" className="transition-transform hover:scale-105">
          <img
            src={service1}
            alt="Service 1"
            className="w-64 md:w-80 object-contain"
          />
        </Link>
        <Link to="/services" className="transition-transform hover:scale-105">
          <img
            src={service2}
            alt="Service 2"
            className="w-64 md:w-80 object-contain"
          />
        </Link>
        <Link to="/services" className="transition-transform hover:scale-105">
          <img
            src={service3}
            alt="Service 3"
            className="w-64 md:w-80 object-contain"
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
