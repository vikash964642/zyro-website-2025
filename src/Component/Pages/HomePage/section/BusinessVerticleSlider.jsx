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

const slides = [
  { id: 1, image: "https://via.placeholder.com/400x300", content: "Slide 1 content here" },
  { id: 2, image: "https://via.placeholder.com/400x300", content: "Slide 2 content here" },
  { id: 3, image: "https://via.placeholder.com/400x300", content: "Slide 3 content here" },
  { id: 4, image: "https://via.placeholder.com/400x300", content: "Slide 4 content here" },
  { id: 5, image: "https://via.placeholder.com/400x300", content: "Slide 5 content here" },
  { id: 6, image: "https://via.placeholder.com/400x300", content: "Slide 6 content here" },
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
    <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
      <div className="flex items-center justify-center business-slider-parent">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-y-scroll text-white  custom-scrollbar w-[100%]"
          style={{
            height: slideHeight,
           
            scrollSnapType: "y mandatory",
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 relative"
              style={{
                height: slideHeight,
                scrollSnapAlign: "start",
              }}
            >
              {/* Top Counter */}
              {idx === currentIndex && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white">
                  {currentIndex + 1} / {slides.length}
                </div>
              )}

              {/* 🎯 Image Container */}
              <div className="w-full md:w-1/2 flex h-full justify-center business-slider-image-sec">
                <div className="w-full max-w-[300px]">
                  <img
                    src={slide.image}
                    alt={`Slide ${idx + 1}`}
                    className="w-full rounded shadow"
                  />
                </div>
              </div>

              {/* 📝 Content Container */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Slide {slide.id}</h2>
                  <p className="text-lg">{slide.content}</p>
                </div>
              </div>

              {/* Bottom Counter */}
              {idx === currentIndex && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white">
                  {currentIndex + 1} / {slides.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessVerticleSlider;
