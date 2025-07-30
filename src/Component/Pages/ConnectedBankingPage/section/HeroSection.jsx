




// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const slides = [
//   {
//     image: "./../../../../public/image/HomePage/herosection-banner.png",
//     heading: "Connected Banking made simple with Zyro",
//     paragraph:
//       "Connect and manage all your business accounts in one place with Zyro Connected Banking. Simplify vendor payments, access real-time insights, enable smooth integration and automate reconciliation. Stay on top of your cash flow without logging into multiple portals.",
//   },
//   // {
//   //   image: "./../../../../public/image/HomePage/herosoundbox.png",
//   //   heading: "Zyro Sound Box",
//   //   paragraph:
//   //     "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
//   // },
//   // {
//   //   image: "./../../../../public/image/HomePage/herosection-banner-1.png",
//   //   heading: "Simplify, Track, and Control Expense in One Place",
//   //   paragraph:
//   //     "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
//   // },
// ];

// function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     console.log(setCurrentSlide);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//   });

//   return (
//     <section className="flex items-center justify-center gap-[50px] lg:pt-[105px] pt-[60px] relative">
//         <div className="home-hero_gradient"></div>
//       {/* Navigation Buttons */}
//       {/* <button
//         onClick={handlePrev}
//         className=" z-20 left-[100px] min-[1500px]:left-[200px] top-[190px] text-white bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center hidden"
//       >
//         &lt;
//       </button> */}

//       {/* Slides Wrapper */}
//       <div
//         className="max-w-screen-md xl:max-w-screen-lg mx-4 lg:mx-0  overflow-hidden relative"
//         {...swipeHandlers}
//       >
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="min-w-full flex flex-col-reverse lg:flex-row items-center gap-5"
//             >
//               {/* Left Content */}
//               <div className="lg:w-[55%] w-full px-6">
//                 <h1 className="md:text-[27px] xl:text-[42px] hidden lg:block text-white text-[22px] font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
//                   {slide.heading.split(" ").map((word, idx) =>
//                     ["Connected", "Banking"].includes(word) ? (
//                       <span
//                         key={idx}
//                         className="bg-gradientText bg-clip-text text-transparent font-semibold"
//                       >
//                         {word}{" "}
//                       </span>
//                     ) : (
//                       word + " "
//                     )
//                   )}
//                 </h1>
//                 <p className="text-white80 text-[14px] md:text-[14.5px] xl:text-[20px] md:mt-[18px] mt-[30px] text-center lg:text-left">
//                   {slide.paragraph}
//                 </p>
//                 <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
//                   <button className="bg-[#4F31B4] rounded-[24px] h-[44px] w-[100%] min-[450px]:w-[200px] lg:w-[140px]  text-[#FFF] text-[18px] font-semibold">
//                     Get Started
//                   </button>
//                   {/* <Link
//                     to=""
//                     className="text-white font-bold md:text-[15.6px] text-sm flex md:justify-start justify-center "
//                   >
//                     Know more &gt;&gt;
//                   </Link> */}
//                 </div>
//               </div>

//               {/* Right Image */}
//               <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
//                 <img src={slide.image} alt={`Slide ${index + 1}`} />
//               </div>
//               <h1 className="md:text-[27px] xl:text-[42px] lg:hidden text-white text-[22px] text-center font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
//                 {slide.heading.split(" ").map((word, idx) =>
//                   ["Connected", "Banking", "Solutions"].includes(word) ? (
//                     <span
//                       key={idx}
//                       className="bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] leading-[38px]"
//                     >
//                       {word}{" "}
//                     </span>
//                   ) : (
//                     word + " "
//                   )
//                 )}
//               </h1>
//             </div>
//           ))}
//         </div>

//         {/* Mobile Dots */}
//         {/* <div className="pt-[30px] flex justify-center items-center lg:hidden">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
//                 index === currentSlide ? "bg-white" : "bg-gray-400"
//               } transition-all duration-300`}
//               onClick={() => handleDotClick(index)}
//             ></div>
//           ))}
//         </div> */}
//       </div>
//       {/* <button
//         onClick={handleNext}
//         className=" z-20 right-[100px] min-[1500px]:right-[200px] top-[190px] text-white  bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center hidden"
//       >
//         &gt;
//       </button> */}
      
      
//     </section>
//   );
// }
// export default HeroSection


import ConnecteBankingImg from '../../../../../public/image/HomePage/herosection-banner.png';

function HeroSection() {
  const slide = {
    image: ConnecteBankingImg,
    heading: "Connected Banking made simple with Zyro",
    paragraph:
      "Connect and manage all your business accounts in one place with Zyro Connected Banking. Simplify vendor payments, access real-time insights, enable smooth integration and automate reconciliation. Stay on top of your cash flow without logging into multiple portals.",
  };

  return (
    <section className="flex items-center justify-center gap-[50px] lg:pt-[105px] pt-[60px] relative">
      <div className="home-hero_gradient"></div>

      <div className="max-w-screen-md xl:max-w-screen-lg mx-4 lg:mx-0 overflow-hidden relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 min-w-full">
          
          {/* Left Content */}
          <div className="lg:w-[55%] w-full px-6">
            <h1 className="md:text-[27px] xl:text-[42px] hidden lg:block text-white text-[22px] font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
              {slide.heading.split(" ").map((word, idx) =>
                ["Connected", "Banking"].includes(word) ? (
                  <span
                    key={idx}
                    className="bg-gradientText bg-clip-text text-transparent font-semibold"
                  >
                    {word + " "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>

            <p className="text-white80 text-[14px] md:text-[14.5px] xl:text-[20px] md:mt-[18px] mt-[30px] text-center lg:text-left">
              {slide.paragraph}
            </p>

            <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
              <button className="bg-[#4F31B4] rounded-[24px] h-[44px] w-[100%] min-[450px]:w-[200px] lg:w-[140px] text-[#FFF] text-[18px] font-semibold">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
            <img src={slide.image} alt="Hero" />
          </div>

          {/* Mobile Heading */}
          {/* <h1 className="md:text-[27px] xl:text-[42px] lg:hidden text-white text-[22px] text-center font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
            {slide.heading.split(" ").map((word, idx) =>
              ["Connected", "Banking", "Solutions"].includes(word) ? (
                <span
                  key={idx}
                  className="max-[360px]:text-[28px] bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] leading-[38px]"
                >
                  {word + " "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1> */}
          <div className='lg:hidden'> 
          <h1 className=' max-[360px]:text-[28px] font-semibold text-[32px] leading-[38px] bg-gradientText bg-clip-text text-transparent text-center'>Connected Banking </h1>
          <p className='max-[360px]:text-[20px] font-medium text-[22px] text-white90 leading-[24px] text-center'>made simple with Zyro</p>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
