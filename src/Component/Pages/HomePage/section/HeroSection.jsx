import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample data for the slides
const slides = [
  {
    image: "./../../../../public/image/HomePage/herosection.webp",
    heading: "Accelerate Your Business with our Connected Banking Solutions",
    paragraph: "Elevate your business with easy payments and payouts through our advanced banking solutions.",
  },
  {
    image: "./../../../../public/image/HomePage/herosection2.webp",
    heading: "Streamline Your Finances with Innovative Tools",
    paragraph: "Experience seamless management of your business finances with our cutting-edge tools.",
  },
  {
    image: "./../../../../public/image/HomePage/herosection3.webp",
    heading: "Expand Your Business Horizons Globally",
    paragraph: "Discover opportunities to grow your business worldwide with our tailored financial solutions.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle forward navigation
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to handle backward navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Function to handle dot navigation
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="max-w-7xl mx-auto pt-[103px] relative pb-8">
      <div className="container mx-auto flex items-center justify-around flex-col-reverse lg:flex-row relative">
        {/* Left Content */}
        <div className="lg:w-[603px] w-full px-[44px] lg:px-[0px] mt-[36px]">
          <h4 className="md:text-[42px] text-white text-[22px] font-medium md:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
            {slides[currentSlide].heading.split(" ").map((word, index) =>
              word === "Connected" || word === "Innovative" || word === "Globally" ? (
                <span key={index} className="bg-gradientText bg-clip-text text-transparent font-semibold">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h4>
          <p className="text-white font-medium text-[14px] md:text-[16px] md:leading-[21.28px] leading-[18.62px] md:mt-[18px] mt-[15px]">
            {slides[currentSlide].paragraph}
          </p>
          <div className="max-md:flex flex md:justify-end lg:justify-start max-md:justify-end">
            <Link to="" className="text-white font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[30px] lg:pt-[15px]">
              Know more &gt;&gt;
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="p-[25px] md:p-[0px]">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} className="max-w-full h-auto" />
        </div>

        {/* Desktop Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
        >
          <FaArrowRight />
        </button>

        {/* Mobile Indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center lg:hidden pb-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              } transition-all duration-300`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
