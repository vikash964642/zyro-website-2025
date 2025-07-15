// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";

// const slides = [
//   {
//     image: "./../../../../public/image/HomePage/herosection-banner.png",
//     heading: "Accelerate Your Business with our Connected Banking Solutions",
//     paragraph: "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking. ",
//   },
//   {
//     image: "./../../../../public/image/HomePage/herosoundbox.png",
//     heading: "Zyro Sound Box",
//     paragraph: "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations and ensuring a faster, more relialble and efficient customer experience.",
//   },
//   {
//     image: "./../../../../public/image/HomePage/herosection-banner-1.png",
//     heading: "Simplify, Track, and Control Expense in One Place",
//     paragraph: "Expense management made easy with Zyro. Manage all your business expense in one place track, control and optimize easily",
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Handle forward navigation
//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   // Handle backward navigation
//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Handle dot click
//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   // Swipeable handlers
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext, // Move to next slide on swipe left
//     onSwipedRight: handlePrev, // Move to previous slide on swipe right
//   });

//   return (
//  <div className="relative">
//   <button
//           onClick={handlePrev}
//           className=" absolute left-[100px] top-[190px]  text-white p-2 bg-gray-700 rounded-full  items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-[100px] top-[190px] text-white p-2 bg-gray-700 rounded-full  items-center justify-center w-[40px] h-[40px] hover:bg-gray-800 lg:flex hidden"
//         >
//           &gt;
//         </button>
//      <section className="max-w-screen-lg mx-auto">

//       {/* Add swipe handlers to this div */}
//       <div
//         className="container mx-auto flex items-center justify-around flex-col-reverse lg:flex-row relative mt-[103px] gap-5"
//         {...swipeHandlers}
//       >
//         {/* Left Content */}
//         <div className="lg:w-[55%] w-full">
//           <h1 className="md:text-[42px] text-white text-[22px] font-medium md:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
//             {slides[currentSlide].heading.split(" ").map((word, index) =>
//               word === "Connected" || word === "Banking" || word === "Solutions" ? (
//                 <span key={index} className="bg-gradientText bg-clip-text text-transparent font-semibold">
//                   {word}{" "}
//                 </span>
//               ) : (
//                 word + " "
//               )
//             )}
//           </h1>
//           <p className="text-white text-[14px] md:text-[18.28px] md:mt-[18px] mt-[30px] pr-[40px]">
//             {slides[currentSlide].paragraph}
//           </p>
//           <div className="max-md:flex flex md:justify-end lg:justify-start max-md:justify-end">
//             <Link to="" className="text-white font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[30px] lg:pt-[15px]">
//               Know more &gt;&gt;
//             </Link>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full">
//           <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
//         </div>

//         {/* Desktop Navigation Buttons */}

//         {/* Mobile Indicators */}
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center lg:hidden pb-4">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
//                 index === currentSlide ? "bg-white" : "bg-gray-400"
//               } transition-all duration-300`}
//               onClick={() => handleDotClick(index)}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//  </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    image: "./../../../../public/image/HomePage/herosection-banner.png",
    heading: "Accelerate Your Business with our Connected Banking Solutions",
    paragraph:
      "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking.",
  },
  {
    image: "./../../../../public/image/HomePage/herosoundbox.png",
    heading: "Zyro Sound Box",
    paragraph:
      "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
  },
  {
    image: "./../../../../public/image/HomePage/herosection-banner-1.png",
    heading: "Simplify, Track, and Control Expense in One Place",
    paragraph:
      "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
  },
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

  return (
    <section className="flex items-center justify-center gap-[50px] lg:pt-[105px] pt-[60px]">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className=" z-50 left-[100px] min-[1500px]:left-[200px] top-[190px] text-white bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center hidden"
      >
        &lt;
      </button>

      {/* Slides Wrapper */}
      <div
        className="max-w-screen-md xl:max-w-screen-lg  overflow-hidden relative"
        {...swipeHandlers}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col-reverse lg:flex-row items-center gap-5"
            >
              {/* Left Content */}
              <div className="lg:w-[55%] w-full px-6">
                <h1 className="md:text-[27px] xl:text-[42px] hidden lg:block text-white text-[22px] font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
                  {slide.heading.split(" ").map((word, idx) =>
                    ["Connected", "Banking", "Solutions"].includes(word) ? (
                      <span
                        key={idx}
                        className="bg-gradientText bg-clip-text text-transparent font-semibold"
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h1>
                <p className="text-white80 text-[14px] md:text-[14.5px] xl:text-[18.28px] md:mt-[18px] mt-[30px] text-center lg:text-left">
                  {slide.paragraph}
                </p>
                <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
                  <button className="bg-[#4F31B4] rounded-[24px] h-[44px] w-[100%] min-[450px]:w-[200px] lg:w-[140px]  text-[#FFF] text-[18px] font-semibold">
                    Get Started
                  </button>
                  <Link
                    to=""
                    className="text-white font-bold md:text-[15.6px] text-sm flex md:justify-start justify-center "
                  >
                    Know more &gt;&gt;
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <h1 className="md:text-[27px] xl:text-[42px] lg:hidden text-white text-[22px] text-center font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
                {slide.heading.split(" ").map((word, idx) =>
                  ["Connected", "Banking", "Solutions"].includes(word) ? (
                    <span
                      key={idx}
                      className="bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] leading-[38px]"
                    >
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h1>
            </div>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="pt-[30px] flex justify-center items-center lg:hidden">
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
      <button
        onClick={handleNext}
        className=" z-50 right-[100px] min-[1500px]:right-[200px] top-[190px] text-white  bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center hidden"
      >
        &gt;
      </button>
      
        <div className="home-hero_gradient"></div>
    </section>
  );
}
