
import { useRef, useState } from "react";
import './HomePageCss.css'; // Make sure this includes the custom scrollbar CSS
import sliderImg1 from '../../../../../public/image/sliderImg1.jpg';
import sliderImg2 from '../../../../../public/image/sliderImg2.jpg';
const slides = [
  { id: 1, image: [sliderImg1],title:"Complete Invoicing Solutions", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum" },
  { id: 2, image: [sliderImg2],title:"Complete Invoicing Solutions 2", content: "Arcu eu, dapibus est. Maecenas sed sapien ac eros sollicitudin vulputate. Proin a ligula." },
  { id: 3, image: [sliderImg1],title:"Complete Invoicing Solutions 3", content: "Ipsum. Vestibulum id vestibulum arcu, sed sodales nisl. Curabitur aliquam lectus at odio." },
  { id: 4, image:[sliderImg2],title:"Complete Invoicing Solutions 4", content: "Facilisis mollis. Vestibulum ac felis vitae metus euismod scelerisque eu eu arcu. Curabitur." },
  { id: 5, image:[sliderImg1],title:"Complete Invoicing Solutions 5", content: "Volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla." },
  { id: 6, image: [sliderImg2],title:"Complete Invoicing Solutions 6", content: "Non tortor. Vivamus non enim suscipit, sagittis arcu vel, posuere ante. Aenean dignissim." },
];

function BusinessVerticleSlider() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideHeight = 500; // px

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const newIndex = Math.round(scrollTop / slideHeight);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px] ">
        <p className="text-[24px] lg:text-[34px] font-medium text-[#FFF] text-center lg:mb-[50px] mb-[30px]">Grow your <span className="gradientText2">business</span> with simplified billing solutions</p>
  
     <div className="relative">
                <div className="absolute top-[6px] right-[2px] -translate-x-1/2 text-[10px] lg:text-[12px] text-white z-10">
    {currentIndex + 1} / {slides.length}
  </div>
         <div className="flex items-center justify-center business-slider-parent px-3 pt-[20px] pb-[20px] lg:p-6">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-y-scroll   custom-scrollbar w-[100%]"
          style={{
            height: slideHeight,
           
            scrollSnapType: "y mandatory",
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-center gap-[50px] pr-[14px] lg:pb-[20px]  relative"
              style={{
                height: slideHeight,
                scrollSnapAlign: "start",
        
              }}
            >
              {/* Top Counter */}
              {/* {idx === currentIndex && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white">
                  {currentIndex + 1} / {slides.length}
                </div>
              )} */}

              {/* 🎯 Image Container */}
              <div className="w-full md:w-1/2 flex h-[240px] lg:h-full justify-center items-center business-slider-image-sec">
                <div className="w-full h-[100%] max-w-[350px] flex justify-center items-center p-[20px] lg:p-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${idx + 1}`}
                    className="w-[100%] h-[100%] lg:w-[280px] lg:h-[350px] rounded-[5px]"
                  />
                </div>
              </div>

              {/* 📝 Content Container */}
              <div className="w-full md:w-1/2 h-[50%] lg:h-full flex items-center">
                <div>
                  <h2 className="lg:text-[30px] font-medium text-[#FFF]">{slide.title}</h2>
                  <p className="lg:text-[20px] pt-[20px] text-white70 font-normal">{slide.content}</p>
                  <button className="border-[0.965px] border-solid border-[#6F41D2] bg-[#4F31B4] rounded-[29px] h-[38px] w-[153px] text-[#FFF] text-[19px] font-medium mt-[25px]">Know more</button>
                </div>
              </div>

              {/* Bottom Counter */}
              {/* {idx === currentIndex && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white">
                  {currentIndex + 1} / {slides.length}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
}

export default BusinessVerticleSlider;


