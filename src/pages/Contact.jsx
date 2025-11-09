import { useState } from "react";
import image_down from "../assets/contact/image_down.png";
import image_up from "../assets/contact/image_up.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus("All fields are required.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Form Submitted:", data);
        setStatus("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row h-[calc(100vh-80px)] w-full bg-cover gap-10 md:gap-0 bg-center overflow-hidden">
      {/* Background Images */}
      <img
        src={image_up}
        alt="Top Decoration"
        className="absolute top-0 right-0 w-32 md:w-56 lg:w-96 object-contain opacity-90 -z-10"
      />
      <img
        src={image_down}
        alt="Bottom Decoration"
        className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-84 object-contain opacity-90 -z-10"
      />

      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 md:px-12 space-y-4 md:space-y-10">
        <p className="text-[#252729] md:text-lg max-w-md leading-relaxed text-start font-instrumental">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away. <br /> Let’s catch up
          over coffee. <br />
          Great stories always begin with a good conversation
        </p>
      </div>

      {/* Right side */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-8 md:px-12 space-y-4 md:space-y-8">
        <h1 className="text-2xl font-halant md:text-3xl text-[#0F3255] max-w-2xl">
          Join the Story
        </h1>
        <h2 className="text-lg font-instrumental md:text-xl text-[#0F3255] max-w-2xl">
          Ready to bring your vision to life? Let’s talk.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col space-y-3"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-[#EAEAEA] p-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#F15D2B]"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-[#EAEAEA] p-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#F15D2B]"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="border border-[#EAEAEA] p-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#F15D2B]"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="border border-[#EAEAEA] p-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#F15D2B] resize-none"
          ></textarea>

          <div className="w-full">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#F15D2B] text-white py-3 px-6 text-sm rounded-4xl w-fit transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {status && (
          <p
            className={`text-lg ${
              status.includes("Success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        <div className="w-full flex gap-2 item-center justify-center text-[#F15D2B] font-halant font-bold text-sm">
          <p>vernita@varnanfilms.co.in</p>
          <div className="border border-[#F15D2B]"></div>
          <p>+91 98736 84567</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
