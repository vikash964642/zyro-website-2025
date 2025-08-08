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

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import HomePageRightIcon from '../../../../../public/image/HomePage/HomePageRightIcon.webp';
import KnowMoreRightIcon from '../../../../../public/image/HomePage/Icon/KnowMoreRightIcon.svg'


const slides = [
  {
    image: "./../../../../public/image/HomePage/herosection-banner.png",
     imageMob: "./../../../../public/image/HomePage/herosection-banner.png",
    heading1: "Accelerate Your Business with our",
    heading2:"Connected Banking Solutions",
    paragraph:
      "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking.",
  },
  {
    image: "./../../../../public/image/HomePage/herosoundbox.webp",
     imageMob: "./../../../../public/image/HomePage/herosoundbox.webp",
    heading1: "Zyro Sound Box",
    heading2:"",
    paragraph:
      "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
  },
  {
    image: "./../../../../public/image/HomePage/herosection-banner-1.webp",
        imageMob: "./../../../../public/image/HomePage/herosection-banner-1.webp",
    heading1: "Simplify, Track,",
    heading2:"and Control Expense in One Place",
    paragraph:
      "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
  },
   {
    image: "./../../../../public/image/HomePage/herosection-banner-2.webp",
     imageMob: "./../../../../public/image/HomePage/herosection-banner-2-mob.webp",
    heading1: "Zyro POS Device",
    heading2:"",
    paragraph:
      "Accepts UPI & Card Payments with a Single Device",
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
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
   <>
    <section className="hidden lg:flex items-center justify-center gap-[50px] lg:pt-[105px] pt-[60px] relative">
        <div className="home-hero_gradient"></div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className=" z-20 left-[100px] min-[1500px]:left-[200px] top-[190px] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
      >
<FontAwesomeIcon icon={faAngleLeft}  />



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
                <h1 className="md:text-[27px] xl:text-[42px] hidden lg:block text-white text-[22px] font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px] heroSectionHeadingGradient">
                 {slide.heading1} {slide.heading2}
                </h1>
                <p className="text-white80 text-[14px] md:text-[14.5px] xl:text-[18.28px] md:mt-[18px] mt-[30px] text-center lg:text-left">
                  {slide.paragraph}
                </p>
                <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
                  <button className="bg-[#4F31B4] rounded-[24.77px] h-[44px] w-[100%] min-[450px]:w-[200px] lg:w-[148px]  text-[#FFF] text-[18px] font-semibold">
                    Get Started
                  </button>
                  <Link
                    to=""
                    className="text-[#FFF] font-medium md:text-[15.6px] lg:text-[16.45px] text-sm flex md:justify-start justify-center "
                  >
                    Know more <img src={KnowMoreRightIcon} className="pl-[4px]"/>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
             
       <div className="block lg:hidden">
               {index === 0 && (
  <div className="text-center">
    <div className="text-[20px] text-white90 font-medium">
      {slide.heading1}
    </div>
    <div className="text-[32px] font-semibold heroSectionHeadingGradient">
      {slide.heading2}
    </div>
  </div>
)}

{index === 1 && (
  <div className="text-center text-[32px] font-semibold heroSectionHeadingGradient">
    {slide.heading1} <span>{slide.heading2}</span>
  </div>
)}

{index === 2 && (
  <div className="text-center">
    <span className="text-[24px] font-semibold heroSectionHeadingGradient">{slide.heading1}</span> <span className="text-[24px] text-[#FFF] font-extrabold">{slide.heading2}</span>
  </div>
)}

{index === 3 && (
  <div className="text-center text-[32px] font-semibold heroSectionHeadingGradient">
    {slide.heading1} <span>{slide.heading2}</span>
  </div>
)}
       </div>

        
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
        className=" z-20 right-[100px] min-[1500px]:right-[200px] top-[190px] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
      >
    <FontAwesomeIcon icon={faAngleRight}  />
      </button>
      
      
    </section>
     
     
     
     <section className="block lg:hidden px-[20px]  pt-[40px] relative">
        <div className="home-hero_gradient"></div>
    
      <div
        className=" overflow-hidden relative"
        {...swipeHandlers}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col justify-between"
            >
               <div>
               {index === 0 && (
  <div className="text-center">
    <div className="max-[375px]:text-[16px] text-[20px] text-white90 font-medium">
      {slide.heading1}
    </div>
    <div className="max-[375px]:text-[28px] leading-[40px] text-[32px] font-semibold heroSectionHeadingGradient">
      {slide.heading2}
    </div>
  </div>
)}

{index === 1 && (
  <div className="text-center max-[375px]:text-[28px] text-[32px] font-semibold heroSectionHeadingGradient">
    {slide.heading1} <span>{slide.heading2}</span>
  </div>
)}

{index === 2 && (
  <div className="text-center">
    <span className="text-[24px] font-semibold heroSectionHeadingGradient">{slide.heading1}</span> <span className="text-[24px] text-[#FFF] font-extrabold">{slide.heading2}</span>
  </div>
)}

{index === 3 && (
  <div className="text-center max-[375px]:text-[28px] text-[32px] font-semibold heroSectionHeadingGradient">
    {slide.heading1} <span>{slide.heading2}</span>
  </div>
)}
       </div>
           
{(index === 1 || index === 2 || index === 3) && (
  <p className={`text-white70 max-[375px]:text-[13px] text-[14px] font-normal text-center pt-[18px]`}>
    {slide.paragraph}
  </p>
)}

             
              <div className=" w-full flex justify-center items-center mt-[35px]">
                <img src={slide.imageMob} alt={`Slide ${index + 1}`} className={`${index===0 ? 'max-[360px]:h-[275px] max-[360px]:w-[275px] h-[290px] w-[290px]' : ''} ${index===1 ? 'max-[360px]:h-[275px] max-[360px]:w-[275px] w-[350px] h-[345px]' : ''} ${index===2 ? 'max-[360px]:h-[185px] max-[360px]:w-[275px] w-[300px] h-[200px] mt-[100px]' : ''} ${index===3 ? 'w-[254px] h-[380px]' : ''}`}/>
              </div>
         
             {index===0 && (
               <p className="text-white70  max-[375px]:text-[13px] text-[14px] font-normal text-center pt-[30px]">{slide.paragraph}</p>
             )}
          
  {(index === 0 || index === 2 || index === 3) && (
 <div className="flex justify-center mt-[25px]">
  <button className="bg-[#4F31B4] max-[375px]:w-[100%] w-[325px] h-[55px] rounded-[30px] text-[22px] text-[#FFF] font-semibold">Get Started</button>
 </div>
)}
     {index===1 && (
       <div className="flex justify-center mt-[25px]">
  <button className="bg-[#4F31B4] max-[375px]:w-[100%] w-[325px] h-[55px] rounded-[30px] text-[22px] text-[#FFF] font-semibold">Get Your Speaker</button>
 </div>
     )}
             <Link
                    to=""
                    className="text-[#FFF] font-medium text-[16px] flex lg:justify-start justify-center items-center pt-[20px]"
                  >
                    Know more <img src={KnowMoreRightIcon} className="pl-[4px] h-[15px] w-[15px]"/>
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
                index === currentSlide ? "bg-[#4F31B4] w-[13px] h-[7px] rounded-[9.17px]" : "bg-[#CACACA] w-[7px] h-[7px] rounded-full"
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


