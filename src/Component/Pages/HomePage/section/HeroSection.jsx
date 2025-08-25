import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import KnowMoreRightIcon from "/image/HomePage/Icon/KnowMoreRightIcon.svg";

const slides = [
   {
    image: "/image/HomePage/herosectionbanner2.webp",
    imageMob: "/image/HomePage/herosectionbanner2.webp",
    link: "/posPage",
    heading1: "Zyro POS Device",
    heading2: "",
    paragraph: "Accepts UPI & Card Payments with a Single Device",
  },
  
  {
    image: "/image/HomePage/herosoundbox.svg",
    imageMob: "/image/HomePage/herosoundbox.svg",
    link: "/soundboxPage",

    heading1: "Zyro Sound Box",
    heading2: "",
    paragraph:
      "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
  },
  {
    image: "/image/HomePage/herosectionBanner1.webp",
    imageMob: "/image/HomePage/herosectionBanner1.webp",
    link: "/ExpenseManagement",

    heading1: "Simplify, Track, and Control Expense",
    heading2: " in One Place",
    paragraph:
      "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
  },
  {
    image: "/image/HomePage/herosectionbanner.svg",
    imageMob: "/image/HomePage/herosectionbanner.svg",
    link: "/connectedbanking",

    heading1: "Accelerate Your Business with our",
    heading2: "Connected Banking Solutions",
    paragraph:
      "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking.",
  }
 
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    console.log(setCurrentSlide);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hidden lg:flex items-center justify-center gap-[50px] lg:pt-[135px] pt-[80px] relative">
        <div className="home-hero_gradient1"></div>
        {/* <div className="home-hero_gradient2"></div>
        <div className="home-hero_gradient3"></div>
        <div className="home-hero_gradient4"></div> */}
        {/* <div className="home-hero_gradientBottom"></div> */}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className=" z-20 left-[100px] min-[1500px]:left-[200px] top-[190px] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {/* Slides Wrapper */}
        <div
          className="max-w-screen-md xl:max-w-screen-lg  overflow-hidden relative"
          {...swipeHandlers}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col-reverse lg:flex-row items-center gap-5"
              >
                {/* Left Content */}
                <div className="lg:w-[55%] w-full">
                  {index === 3 && (
                    <h1 className="text-[42px]  text-white90  font-medium leading-[54px] lg:mt-[10px] ">
                      {slide.heading1}{" "}
                      <span className="heroSectionHeadingGradient1 font-semibold">
                        {slide.heading2}
                      </span>
                    </h1>
                  )}
                  {index === 1 && (
                    <h1 className="heroSectionHeadingGradient2 text-[55.547px] font-semibold leading-[54px] lg:mt-[10px] ">
                      {slide.heading1} <span>{slide.heading2}</span>
                    </h1>
                  )}
                  {index === 2 && (
                    <h1 className="text-[42px]     leading-[54px] lg:mt-[10px] ">
                      <span className="heroSectionHeadingGradient2 font-semibold">
                        {" "}
                        {slide.heading1}
                      </span>{" "}
                      <span className=" text-white90 font-medium ">
                        {slide.heading2}
                      </span>
                    </h1>
                  )}
                  {index === 0 && (
                    <h1 className="text-[42px] heroSectionHeadingGradient4 font-semibold leading-[54px] lg:mt-[10px] ">
                      {slide.heading1} <span>{slide.heading2}</span>
                    </h1>
                  )}
                  {(index === 3 || index === 1 || index === 2) && (
                    <p className="text-white70 text-[18.28px] mt-[20px] font-normal">
                      {slide.paragraph}
                    </p>
                  )}
                  {index === 0 && (
                    <p className="text-[#FFF] text-[32px] font-medium mt-[30px] text-center lg:text-left">
                      {slide.paragraph}
                    </p>
                  )}
                  <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
                    {(index === 3 || index === 2 || index === 0) && (
                      <button className="bg-[#4F31B4] rounded-[24.77px] h-[45px] w-[148px]  text-[#FFF] text-[18px] font-semibold">
                        Get Started
                      </button>
                    )}
                    {index === 1 && (
                      <button className="bg-[#4F31B4] rounded-[24.77px] h-[48px] w-[218px]  text-[#FFF] text-[20px] font-semibold">
                        Get Your Speaker
                      </button>
                    )}
                    <Link
                      to={slide.link}
                      className="text-[#FFF] font-medium md:text-[15.6px] lg:text-[16.45px] text-sm flex md:justify-start justify-center "
                    >
                      Know more{" "}
                      <img src={KnowMoreRightIcon} className="pl-[4px]" />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className=" z-20 right-[100px] min-[1500px]:right-[200px] top-[190px] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </section>

      <section className="block lg:hidden px-[20px] lg:pt-[135px] pt-[80px] relative">
        <div className="home-hero_gradient1"></div>

        <div className=" overflow-hidden relative" {...swipeHandlers}>
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col justify-between"
              >
                <div>
                  {index === 3 && (
                    <div className="text-center">
                      <div className="max-[350px]:text-[16px] max-[375px]:text-[18px] text-[20px] text-white90 font-medium">
                        {slide.heading1}
                      </div>
                      <div className="max-[375px]:text-[28px] leading-[40px] text-[32px] font-semibold heroSectionHeadingGradient1">
                        {slide.heading2}
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="text-center max-[375px]:text-[28px] text-[36px] font-semibold heroSectionHeadingGradient2">
                      {slide.heading1} <span>{slide.heading2}</span>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="text-center max-[375px]:text-[26px] text-[28px] font-semibold heroSectionHeadingGradient3Mob">
                      {slide.heading1}{" "}
                      <span className="">{slide.heading2}</span>
                    </div>
                  )}

                  {index === 0 && (
                    <div className="text-center max-[375px]:text-[32px] text-[36px] font-semibold heroSectionHeadingGradient4">
                      {slide.heading1} <span>{slide.heading2}</span>
                    </div>
                  )}
                </div>

                {(index === 1 || index === 2) && (
                  <p
                    className={`text-white70 max-[350px]:text-[15px] max-[375px]:text-[16px] text-[18px] font-normal text-center ${
                      index === 1 ? "pt-[15px]" : ""
                    } `}
                  >
                    {slide.paragraph}
                  </p>
                )}
                {index === 0 && (
                  <p
                    className={`text-white70 max-[375px]:text-[18px] text-[20px] font-normal text-center`}
                  >
                    {slide.paragraph}
                  </p>
                )}

                <div className=" w-full flex justify-center items-center mt-[35px]">
                  <img
                    src={slide.imageMob}
                    alt={`Slide ${index + 1}`}
                    className={`${
                      index === 3
                        ? "max-[360px]:h-[275px] max-[360px]:w-[275px] h-[290px] w-[290px]"
                        : ""
                    } ${
                      index === 1
                        ? "max-[360px]:h-[275px] max-[360px]:w-[275px] w-[350px] h-[345px]"
                        : ""
                    } ${
                      index === 2
                        ? "max-[360px]:h-[185px] max-[360px]:w-[275px] w-[300px] h-[200px] mt-[100px]"
                        : ""
                    } ${index === 0 ? "w-[254px] h-[380px]" : ""}`}
                  />
                </div>

                {index === 3 && (
                  <div className="flex justify-center pt-[30px]">
                    <p className="text-white70  max-[350px]:text-[13px] text-[14px] font-normal text-center max-[360px]:w-full w-[325px] md:w-[400px]">
                      {slide.paragraph}
                    </p>
                  </div>
                )}

                {(index === 3 || index === 2 || index === 0) && (
                  <div className="flex justify-center mt-[25px]">
                    <button className="bg-[#4F31B4] max-[375px]:w-[100%] w-[325px] h-[55px] rounded-[30px] text-[22px] text-[#FFF] font-semibold">
                      Get Started
                    </button>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex justify-center mt-[25px]">
                    <button className="bg-[#4F31B4] max-[375px]:w-[100%] w-[325px] h-[55px] rounded-[30px] text-[22px] text-[#FFF] font-semibold">
                      Get Your Speaker
                    </button>
                  </div>
                )}
                <Link
                  to={slide.link}
                  className="text-[#FFF] font-medium text-[16px] flex lg:justify-start justify-center items-center pt-[20px]"
                >
                  Know more{" "}
                  <img
                    src={KnowMoreRightIcon}
                    className="pl-[4px] h-[15px] w-[15px]"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="pt-[20px] flex justify-center items-center">
            {slides.map((_, index) => (
              <div
                key={index}
                className={` mx-[5px] cursor-pointer ${
                  index === currentSlide
                    ? "bg-[#4F31B4] w-[13px] h-[7px] rounded-[9.17px]"
                    : "bg-[#CACACA] w-[7px] h-[7px] rounded-full"
                } transition-all duration-300`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
