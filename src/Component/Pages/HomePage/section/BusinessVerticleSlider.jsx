// import { useRef, useState } from "react";
// import './HomePageCss.css';
// const slides = [
//   { id: 1, image: "https://via.placeholder.com/400x300", content: "Slide 1 content here" },
//   { id: 2, image: "https://via.placeholder.com/400x300", content: "Slide 2 content here" },
//   { id: 3, image: "https://via.placeholder.com/400x300", content: "Slide 3 content here" },
//   { id: 4, image: "https://via.placeholder.com/400x300", content: "Slide 4 content here" },
//   { id: 5, image: "https://via.placeholder.com/400x300", content: "Slide 5 content here" },
//   { id: 6, image: "https://via.placeholder.com/400x300", content: "Slide 6 content here" },
// ];

// function ScrollSnapSlider() {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideHeight = 500; // px

//   const handleScroll = () => {
//     if (!containerRef.current) return;
//     const scrollTop = containerRef.current.scrollTop;
//     const newIndex = Math.round(scrollTop / slideHeight);
//     setCurrentIndex(newIndex);
//   };

//   return (
//         <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
//  <div className="flex items-center justify-center">
//       <div
//         ref={containerRef}
//         onScroll={handleScroll}
//         className="overflow-y-scroll bg-gray-900 text-white rounded-lg shadow-lg custom-scrollbar"
//         style={{
//           height: slideHeight,
//           width: 400,
//           scrollSnapType: "y mandatory",
//         }}
//       >
//         {slides.map((slide, idx) => (
//           <div
//             key={slide.id}
//             className="flex flex-col items-center justify-center p-4"
//             style={{
//               height: slideHeight,
//               scrollSnapAlign: "start",
//             }}
//           >
//             {/* Top Counter */}
//             {idx === currentIndex && (
//               <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white">
//                 {currentIndex + 1} / {slides.length}
//               </div>
//             )}

//             <img
//               src={slide.image}
//               alt={`Slide ${idx + 1}`}
//               className="w-full max-w-[320px] rounded shadow"
//             />
//             <p className="mt-4 text-center text-lg">{slide.content}</p>

//             {/* Bottom Counter */}
//             {idx === currentIndex && (
//               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white">
//                 {currentIndex + 1} / {slides.length}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//         </section>
   
//   );
// }

// export default ScrollSnapSlider;


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
        <p className="text-[24px] lg:text-[34px] font-medium text-[#FFF] text-center lg:mb-[50px] mb-[30px]">Grow your business with simplified billing solutions</p>
  
     <div className="relative">
                <div className="absolute top-0 right-0 -translate-x-1/2 text-[10px] lg:text-sm text-white z-10">
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
              className="flex flex-col-reverse md:flex-row items-center justify-center gap-[50px] pr-[14px]  relative"
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
              <div className="w-full md:w-1/2 flex h-[50%] lg:h-full justify-center items-center business-slider-image-sec">
                <div className="w-full max-w-[350px] flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${idx + 1}`}
                    className="w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] rounded-[5px]"
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
