
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import './ConnectedBankingCss.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cardsData = [
  {
    id: 1,
    image:"/image/BusinessScrollbar/BusinessScrollbarImg1.png",
    heading: "Unified Dashboard",
    paragraph: "View all your current account details, transactions, and balances clearly in a single dashboard.",
  },
  {
    id: 2,
    image:"/image/BusinessScrollbar/BusinessScrollbarImg2.png",
    heading: "Payments Management",
    paragraph: "Make payments to vendors and receive payments from clients directly from the dashboard.",
  },
  {
    id: 3,
    image:"/image/BusinessScrollbar/BusinessScrollbarImg1.png",
    heading: "Transparency and Accuracy",
    paragraph: "TEnsure financial records are accurate and transparent, helping to reduce errors and mismatches.",
  },
//   {
//     id: 4,
//     heading: "Heading for Card 4",
//     paragraph: "This is the paragraph for card 4.",
//   },
//   {
//     id: 5,
//     heading: "Heading for Card 5",
//     paragraph: "This is the paragraph for card 5.",
//   },
];

export default function SnapScrollAutoSync() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingRefs = useRef([]);
  const cardRefs = useRef([]);
  const rightScrollRef = useRef();


  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % cardsData.length);
    console.log(setCurrentSlide);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };



  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });


  // Observe left scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.dataset.index);
//             setActiveIndex(index);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     headingRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       headingRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

useEffect(() => {
  const elements = headingRefs.current; // ✅ create a local snapshot

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index);
        setActiveIndex(index);
      }
    });
  }, { threshold: 0.6 });

  elements.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  // ✅ Use the captured local ref snapshot in cleanup
  return () => {
    elements.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
  };
}, []);


  // Auto-scroll right card into view when activeIndex changes
  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    const container = rightScrollRef.current;
    if (card && container) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
      <section className="max-w-screen-lg lg:mx-auto lg:mt-[150px] mt-[100px]">
        <div className="flex justify-center items-center px-[16px]">
            <p className="text-[#FFF] text-center text-[24px] md:text-[26px] lg:text-[28px]  max-[375px]:text-[22px] font-semibold md:w-[480px] BusinessScrollerHeaderGradient">One Dashboard To Manage All Your Business Accounts</p>
        </div>
 <div className="hidden lg:flex h-[450px] mt-[30px] overflow-hidden">
      {/* Left Side: Scrollable headings */}
      <div className="w-1/2 h-[450px] businessScrollbar overflow-auto bg-black text-white snap-y snap-mandatory">
        {cardsData.map((card, index) => (
        //   <div
        //     key={card.id}
        //     data-index={index}
        //     ref={(el) => (headingRefs.current[index] = el)}
        //     className={`h-[450px] flex items-center justify-center px-6 snap-start transition-colors duration-300 ${
        //       activeIndex === index ? "text-blue-400" : "text-white"
        //     }`}
        //   >
        //     <h1 className="text-3xl font-bold text-center">{card.heading}</h1>
        //   </div>
        <div key={card.id}  data-index={index}  ref={(el) => (headingRefs.current[index] = el)} className="h-[450px] flex items-center justify-center px-6 snap-start transition-colors duration-300">
<img src={card.image}></img>
            </div>
        ))}
      </div>

      {/* Right Side: Cards with auto-scroll & hidden scrollbar */}
      <div
        className="w-1/2 h-[450px] overflow-y-scroll hide-scrollbar pr-2"
        ref={rightScrollRef}
      >
        {/* <div className="flex flex-col justify-between h-full px-6 ">
          {cardsData.map((card, index) => (
         <div  key={card.id}
              ref={(el) => (cardRefs.current[index] = el)} className={`h-[138px] w-full  rounded-[20px] flex justify-center items-center ${activeIndex === index ? 'Connecte_gradient-border2':''}`}>
             <div
             
              className={`  px-[20px] flex flex-col justify-center rounded-[20px]  transition-all duration-300 ${ activeIndex === index
                  ? "w-[calc(100%-1.5px)] h-[calc(100%-1.5px)] bg-[#080219] "
                  : "border-[0.4px] border-[#4E4E4E] h-full w-full"}`}
            >
              <h2 className={` text-[20px] font-medium ${ activeIndex === index
                  ? "text-[#FFF]"
                  : "text-[#CACACA]"}`}>{card.heading}</h2>
              <p className="text-[#9E9C9F] text-[16px] font-normal pt-[8px]">{card.paragraph}</p>
            </div>
         </div>
          ))}
        </div> */}
        <div className="flex flex-col justify-between h-full px-6">
  {cardsData.map((card, index) => (
    <div
      key={card.id}
      ref={(el) => (cardRefs.current[index] = el)}
      className={`h-[138px] w-full rounded-[20px] flex justify-center items-center 
        ${activeIndex === index ? 'Connecte_gradient-border2' : 'border-[0.4px] border-[#4E4E4E]'}`}
    >
      <div className="px-[20px] flex flex-col justify-center w-full h-full rounded-[20px]">
        <h2
          className={`text-[20px] font-medium ${
            activeIndex === index ? 'text-[#FFF]' : 'text-[#CACACA]'
          }`}
        >
          {card.heading}
        </h2>
        <p className="text-[#9E9C9F] text-[16px] font-normal pt-[8px]">
          {card.paragraph}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
    

 <div className="lg:hidden flex flex-col items-center mt-[24px]">
  {/* Slide Container */}
  <div
    {...swipeHandlers}
    className="overflow-hidden w-full max-w-md "
  >
    <div
      className="flex transition-transform duration-700 ease-in-out "
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {cardsData.map((slide, index) => (
        <div
          key={index}
          className="flex-none w-[calc(100%-3.4rem)] flex flex-col items-center max-[375px]:px-[25px] px-[35px] py-[20px] bg-[#0B051E] border-[0.3px] border-[#A901A3] rounded-[10px] mx-[27px]"
        >
          <div className="w-full">
            <p className="text-[#FFFFFF] text-[18px] font-medium max-[375px]:text-[16px]">
              {slide.heading}
            </p>
          </div>
          <div className="w-full mt-[15px]">
            <p className="text-[#C2C2C2] text-[14px] max-[375px]:text-[12.5px] font-normal">
              {slide.paragraph}
            </p>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center items-center bg-[#080219] pt-[20px] px-[16px] pb-[27px] border-[0.129px] border-[#646464] rounded-[12.8px] mt-[20px]">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Prev / Next Buttons */}
  <div className="flex justify-center gap-5 mt-4">
    <button
      onClick={handlePrev}
      className={`  rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
    >
    <FontAwesomeIcon icon={faAngleLeft}  />
    </button>
    <button
      onClick={handleNext}
      className={`  rounded-full w-[22px] h-[22px]  flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
    >
      <FontAwesomeIcon icon={faAngleRight}  />
    </button>
  </div>
</div>


      </section>
   
  );
}



// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const slides = [
//   {
//     image: "./../../../../public/image/HomePage/herosection-banner.png",
//     heading: "Connected Banking made simple with Zyro",
//     paragraph:
//       "Connect and manage all your business accounts in one place with Zyro Connected Banking. Simplify vendor payments, access real-time insights, enable smooth integration and automate reconciliation. Stay on top of your cash flow without logging into multiple portals.",
//   },
//   {
//     image: "./../../../../public/image/HomePage/herosoundbox.png",
//     heading: "Zyro Sound Box",
//     paragraph:
//       "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
//   },
//   {
//     image: "./../../../../public/image/HomePage/herosection-banner-1.png",
//     heading: "Simplify, Track, and Control Expense in One Place",
//     paragraph:
//       "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
//   },
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



//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//   });

//   return (
//     <section   className="max-w-screen-md xl:max-w-screen-lg mx-4 lg:mx-0  overflow-hidden relative">
      
//       <div
      
//         {...swipeHandlers}
//       >
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="min-w-full  items-center gap-5"
//             >
//               {/* Left Content */}
//               <div className="lg:w-[55%] w-full px-6">
               
//                 <p className="text-white80 text-[14px] md:text-[14.5px] xl:text-[20px] md:mt-[18px] mt-[30px] text-center lg:text-left">
//                   {slide.paragraph}
//                 </p>
            
//               </div>

//               {/* Right Image */}
//               <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center">
//                 <img src={slide.image} alt={`Slide ${index + 1}`} />
//               </div>
           
//             </div>
//           ))}
//         </div>

  
//       </div>
//        <div className="flex justify-center gap-5">
//           <button
//         onClick={handlePrev}
//         className=" z-20  text-white bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={handleNext}
//         className=" z-20  text-white  bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 lg:flex justify-center items-center "
//       >
//         &gt;
//       </button>
//         </div>
      
      
//     </section>
//   );
// }
// export default HeroSection