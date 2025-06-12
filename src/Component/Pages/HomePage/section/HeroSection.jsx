import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    image: "./../../../../public/image/HomePage/herosection-banner.png",
    heading: "Accelerate Your Business with our Connected Banking Solutions",
    paragraph: "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking. ",
  },
  {
    image: "./../../../../public/image/HomePage/herosoundbox.png",
    heading: "Zyro Sound Box",
    paragraph: "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations and ensuring a faster, more relialble and efficient customer experience.",
  },
  {
    image: "./../../../../public/image/HomePage/herosection-banner-1.png",
    heading: "Simplify, Track, and Control Expense in One Place",
    paragraph: "Expense management made easy with Zyro. Manage all your business expense in one place track, control and optimize easily",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle forward navigation
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle backward navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Swipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Move to next slide on swipe left
    onSwipedRight: handlePrev, // Move to previous slide on swipe right
  });

  return (
    <section className=" max-w-screen-lg mx-auto">
      {/* Add swipe handlers to this div */}
      <div
        className="container mx-auto flex items-center justify-around flex-col-reverse lg:flex-row relative mt-[103px] gap-5"
        {...swipeHandlers}
      >
        {/* Left Content */}
        <div className="lg:w-[55%] w-full">
          <h1 className="md:text-[42px] text-white text-[22px] font-medium md:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
            {slides[currentSlide].heading.split(" ").map((word, index) =>
              word === "Connected" || word === "Banking" || word === "Solutions" ? (
                <span key={index} className="bg-gradientText bg-clip-text text-transparent font-semibold">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>
          <p className="text-white text-[14px] md:text-[18.28px] md:mt-[18px] mt-[30px] pr-[40px]">
            {slides[currentSlide].paragraph}
          </p>
          <div className="max-md:flex flex md:justify-end lg:justify-start max-md:justify-end">
            <Link to="" className="text-white font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[30px] lg:pt-[15px]">
              Know more &gt;&gt;
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
        </div>

        {/* Desktop Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="fixed left-4  text-white p-2 bg-gray-700 rounded-full  items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="fixed right-4  text-white p-2 bg-gray-700 rounded-full  items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
        >
          &gt;
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
