
import { useEffect, useRef, useState } from "react";
import PosHeroSection1 from '/video/PosHeroSection1.mp4';
import PosHeroSection2 from '/video/PosHeroSection2.mp4';
import PosHeroSection3 from '/video/PosHeroSection3.mp4';

const cardData = [
  { video: PosHeroSection3, SubHeader: "SWIPE" },
  { video: PosHeroSection2, SubHeader: "TAP" },
  { video: PosHeroSection1, SubHeader: "INSERT" },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const currentSlide = cardData[currentIndex];

  // Function to go to next video
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Play the video automatically when the slide changes
    if (videoRef.current) {
      videoRef.current.load(); // Reload video to reset it
      videoRef.current.play().catch(() => {
        // If autoplay is blocked, fallback
      });
    }
  }, [currentIndex]);

  return (
   
    <section className=" bg-[#0E0624] relative px-[15px] pb-[60px] md:pb-0 xl:px-0 overflow-hidden">
      
      <div className="HerosectionGradient1"></div>

    <div className="flex flex-col md:flex-row md:justify-between xl:justify-center xl:gap-[18%]    items-center md:min-h-[80vh]  pb-[60px] md:pb-0  pt-[50px] md:pt-0">
    
    {/* Left Side: Text vertically centered */}
    <div className=" h-full flex flex-col justify-center text-center md:text-left">
 
        <h2 className="max-[375px]:text-[26px] text-[27.79px] sm:text-[30px] lg:text-[34px] font-semibold HeroSectionHeaderGradient leading-tight max-[375px]:w-full w-[360px] sm:w-[400px] lg:w-[440px]">
        ZYRO POS - One device for all your payments needs
      </h2>

      <p className="text-[#9E9C9F] text-[17.1px] md:text-[20px] lg:text-[26px] font-normal pt-[32px] md:pt-[10px]">
        Experience fast, secure payments with
      </p>
      <span className="text-[32px] md:text-[35px] lg:text-[52px] font-semibold text-[#FFF] mt-[10.5px] md:mt-[30px]">
        {cardData[currentIndex].SubHeader}
      </span>
     <div className="hidden md:flex justify-center md:justify-start mt-[55px]">
         <button className=" md:w-[225px] md:h-[46px] bg-[#4F31B4] md:rounded-[24.77px] md:text-[18px] font-semibold text-[#FFF] ">Get your speaker</button>
     </div>
    </div>

    {/* Right Side: Video vertically centered */}
    <div className=" h-full flex justify-center items-center mt-[80px] md:mt-0 relative">
      <video
        key={currentIndex}
        ref={videoRef}
        src={cardData[currentIndex].video}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="max-[425px]:w-[100%] w-[400px] h-[225px] md:w-[350px] md:h-[280px] lg:w-[390px] lg:h-[385px]  rounded-lg"
      />
  
    </div>
    <div className="HerosectionGradient2"></div>
  </div>
   <div className="flex md:hidden justify-center lg:justify-start">
         <button className="max-[400px]:w-[100%] w-[350px] h-[59.8px]  bg-[#4F31B4] rounded-[32.075px]  text-[23.52px] font-semibold text-[#FFF] ">Get your speaker</button>
     </div>

</section>

  );
}

export default HeroSection;
