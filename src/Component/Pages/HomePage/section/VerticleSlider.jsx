// import { useState } from "react";

// function VerticleSlider() {
//     const contents = [
//     { id: 1, title: "Fast User-Friendly Interface", paragraph: "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage." },
//     { id: 2, title: "Scalable Solutions", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est. Maecenas sed sapien ac eros sollicitudin vulputate." },
//     { id: 3, title: "Time-Saving and Cost-Effective", paragraph: "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl. Curabitur aliquam lectus at odio facilisis mollis. " },
//     { id: 4, title: "Robust Data Security", paragraph: "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor. Vivamus non enim suscipit, " },
//     { id: 5, title: "Innovation", paragraph: "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at. Quisque venenatis, urna eget pellentesque malesuada" },
//      { id: 6, title: "Trusted Certification", paragraph: "velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero, at volutpat enim pellentesque non. " },
//     //   { id: 7, title: "Zyro Pricing 7", paragraph: "This is the paragraph for Content 7." },
//     //   { id: 8, title: "Zyro Pricing 8", paragraph: "This is the paragraph for Content 8." },
//     //   { id: 9, title: "Zyro Pricing 9", paragraph: "This is the paragraph for Content 9." },
//     //   { id: 10, title: "Zyro Pricing 10", paragraph: "This is the paragraph for Content 10." },
//     //   { id: 11, title: "Zyro Pricing 11", paragraph: "This is the paragraph for Content 11." },
//     //   { id: 12, title: "Zyro Pricing 12", paragraph: "This is the paragraph for Content 12." },
//     //   { id: 13, title: "Zyro Pricing 13", paragraph: "This is the paragraph for Content 13." },
//   ];

//   const [activeId, setActiveId] = useState(1);
//   return (
//     <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
   


// <div className="relative">
//       <div className="VerticleSlider-gradient"></div>
//   <p className="lg:text-[48px] text-[28px] text-white90 font-medium text-center lg:mb-[50px] mb-[30px]">Why ZYRO is perfect for your Business</p>
  
// </div>
// <div className="w-full border-[0.894px] border-[#3A3C42] border-solid rounded-[3.575px] flex flex-col lg:flex-row lg:h-[400px] ">
//   {/* Left Side: Title + Paragraph */}
//   <div className="w-full lg:w-1/2 h-[350px] lg:h-auto bg-[#0B0618] flex flex-col lg:justify-center  text-white90 text-base border-b-[0.894px] lg:border-b-0 lg:border-r-[0.894px] border-[#3A3C42] border-solid p-6">
//     <p className="max-[360px]:text-[20px] max-[400px]:text-[22px] text-[25px] lg:text-[32px] font-medium text-[#fff] pt-[10px] lg:pt-0">
//       {contents.find((item) => item.id === activeId)?.title}
//     </p>
//     <p className="max-[400px]:text-[14px] text-[16px] lg:text-[21px] font-normal text-white70 pt-[20px]">
//       {contents.find((item) => item.id === activeId)?.paragraph}
//     </p>
//   </div>

//   {/* Right Side: Buttons */}
//   <div className="w-full  lg:w-1/2 flex flex-col lg:flex-row lg:items-end">
//     {contents
//       .filter((item) => item.id !== activeId)
//       .map((item, index, arr) => {
//         const isLast = index === arr.length;
//         return (
//           <button
//             key={item.id}
//             onClick={() => setActiveId(item.id)}
//             className={`w-full lg:w-auto lg:flex-1 text-white90 lg:h-[100%] border-t-[0.894px] lg:border-t-0 text-left lg:text-left [writing-mode:initial] lg:[writing-mode:vertical-lr] lg:rotate-180 px-4 py-4 border-[#3A3C42] border-solid ${
//               !isLast ? 'lg:border-r-[0.894px]' : ''
//             }`}
//           >
//             {item.title}
//           </button>
//         );
//       })}
//   </div>
// </div>

//         </section>
//   )
// }

// export default VerticleSlider





// import { useState } from "react";

// function ProgressiveVerticalSlider() {
//   const contents = [
//     {
//       id: 1,
//       title: "Fast User-Friendly Interface",
//       paragraph:
//         "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage.",
//     },
//     {
//       id: 2,
//       title: "Scalable Solutions",
//       paragraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est.",
//     },
//     {
//       id: 3,
//       title: "Time-Saving and Cost-Effective",
//       paragraph:
//         "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl.",
//     },
//     {
//       id: 4,
//       title: "Robust Data Security",
//       paragraph:
//         "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor.",
//     },
//     {
//       id: 5,
//       title: "Innovation",
//       paragraph:
//         "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at.",
//     },
//     {
//       id: 6,
//       title: "Trusted Certification",
//       paragraph:
//         "Velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero.",
//     },
//     {
//       id: 7,
//       title: "24x7 Assistance",
//       paragraph:
//         "We're always here to support your business with round-the-clock service.",
//     },
//   ];

//   const [activeIndices, setActiveIndices] = useState([0]);
//   const lastIndex = activeIndices[activeIndices.length - 1];

// const handleClick = (index) => {
//   const newIndices = [];
//   for (let i = 0; i <= index; i++) {
//     newIndices.push(i);
//   }
//   setActiveIndices(newIndices);
// };


//   return (
//     <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
//       <div className="relative">
//         <p className="lg:text-[48px] text-[28px] text-white90 font-medium text-center lg:mb-[50px] mb-[30px]">
//           Why ZYRO is perfect for your Business
//         </p>
//       </div>

//       <div className="w-full border border-[#3A3C42] rounded-md flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
//         {/* Left Side — Selected Titles + Content */}
//         <div className="flex flex-row items-stretch bg-[#0B0618] border-r border-[#3A3C42]">
//           {activeIndices.map((index, i) => (
//             <div
//               key={contents[index].id}
//               className={`min-w-[80px] border-l border-[#3A3C42] flex items-center justify-center px-3 ${
//                 i === 0 ? "border-l-0" : ""
//               }`}
//             >
//               <div className="w-full h-full flex flex-col items-center justify-center">
//                 <p
//                   className={`text-white text-sm font-medium text-center`}
//                   style={
//                     index === lastIndex
//                       ? {}
//                       : {
//                           writingMode: "vertical-rl",
//                           textOrientation: "mixed",
//                           transform: "rotate(180deg)",
//                           whiteSpace: "nowrap",
//                         }
//                   }
//                 >
//                   {contents[index].title}
//                 </p>

//                 {/* Show paragraph only for last */}
//                 {index === lastIndex && (
//                   <p className="text-[14px] lg:text-[16px] text-white70 pt-4 max-w-[160px] text-center">
//                     {contents[index].paragraph}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Side — Remaining Titles */}
//         <div className="bg-[#0B0618] flex flex-row items-stretch divide-x divide-[#3A3C42] flex-1 overflow-x-auto">
//           {contents.map((item, idx) =>
//             !activeIndices.includes(idx) ? (
//               <div
//                 key={item.id}
//                 className="min-w-[80px] flex items-center justify-center border-l border-[#3A3C42]"
//               >
//                 <button
//                   onClick={() => handleClick(idx)}
//                   className="w-full h-full px-2 py-4 hover:bg-[#1C1C1F] transition-all"
//                 >
//                   <span
//                     className="block text-white90 text-center text-sm"
//                     style={{
//                       writingMode: "vertical-rl",
//                       textOrientation: "mixed",
//                       transform: "rotate(180deg)",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {item.title}
//                   </span>
//                 </button>
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProgressiveVerticalSlider;


// import { useState } from "react";

// function ProgressiveVerticalSlider() {
//   const contents = [
//     { id: 1, title: "Fast User-Friendly Interface", paragraph: "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage." },
//     { id: 2, title: "Scalable Solutions", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est." },
//     { id: 3, title: "Time-Saving and Cost-Effective", paragraph: "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl." },
//     { id: 4, title: "Robust Data Security", paragraph: "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor." },
//     { id: 5, title: "Innovation", paragraph: "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at." },
//     { id: 6, title: "Trusted Certification", paragraph: "Velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero." },
//     { id: 7, title: "24/7 Support", paragraph: "Quisque eget lorem tincidunt, fermentum orci ac, finibus nisi. Duis feugiat ligula a purus iaculis suscipit." },
//   ];

//   const [activeIndices, setActiveIndices] = useState([0]);
//   const lastIndex = activeIndices[activeIndices.length - 1];

//   const handleClick = (index) => {
//     const allBefore = contents.map((_, i) => i).filter(i => i <= index);
//     setActiveIndices(allBefore);
//   };

//   return (
//     <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
//       <div className="relative">
//         <p className="lg:text-[48px] text-[28px] text-white90 font-medium text-center lg:mb-[50px] mb-[30px]">
//           Why ZYRO is perfect for your Business
//         </p>
//       </div>

//       <div className="w-full border border-[#3A3C42] rounded-md flex flex-col lg:flex-row overflow-hidden">
//         {/* Left Side */}
//         <div className="flex flex-row items-stretch bg-[#0B0618]">
//           {activeIndices.map((index, i) => (
//             <div
//               key={contents[index].id}
//               className={`min-w-[80px] border-l border-[#3A3C42] flex items-center justify-center px-3 ${
//                 i === 0 ? "border-l-0" : ""
//               }`}
//               onClick={() => handleClick(index)}
//               style={{ cursor: "pointer" }}
//             >
//               <div className="w-full h-full flex flex-col items-center justify-center">
//                 <p
//                   className={`text-white text-sm font-medium text-center ${
//                     index === lastIndex ? "rotate-0" : ""
//                   }`}
//                   style={
//                     index === lastIndex
//                       ? {}
//                       : {
//                           writingMode: "vertical-rl",
//                           textOrientation: "mixed",
//                           transform: "rotate(180deg)",
//                           whiteSpace: "nowrap",
//                         }
//                   }
//                 >
//                   {contents[index].title}
//                 </p>

//                 {/* Show paragraph for active */}
//                 {index === lastIndex && (
//                   <p className="text-[14px] lg:text-[16px] text-white70 pt-4 max-w-[160px] text-center">
//                     {contents[index].paragraph}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Side */}
//         <div className="bg-[#0B0618] flex flex-row items-stretch divide-x divide-[#3A3C42] overflow-x-auto flex-grow">
//           {contents.map((item, idx) =>
//             !activeIndices.includes(idx) ? (
//               <div
//                 key={item.id}
//                 className="min-w-[80px] flex items-center justify-center border-l border-[#3A3C42]"
//               >
//                 <button
//                   onClick={() => handleClick(idx)}
//                   className="w-full h-full px-2 py-4 hover:bg-[#1C1C1F] transition-all"
//                 >
//                   <span
//                     className="block text-white90 text-center text-sm"
//                     style={{
//                       writingMode: "vertical-rl",
//                       textOrientation: "mixed",
//                       transform: "rotate(180deg)",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {item.title}
//                   </span>
//                 </button>
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProgressiveVerticalSlider;


import './HomePageCss.css'
// import { useState } from "react";

// function ProgressiveVerticalSlider() {
//   const contents = [
//     {
//       id: 1,
//       title: "Fast User-Friendly Interface",
//       paragraph: "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage.",
//     },
//     {
//       id: 2,
//       title: "Scalable Solutions",
//       paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est.",
//     },
//     {
//       id: 3,
//       title: "Time-Saving and Cost-Effective",
//       paragraph: "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl.",
//     },
//     {
//       id: 4,
//       title: "Robust Data Security",
//       paragraph: "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor.",
//     },
//     {
//       id: 5,
//       title: "Innovation",
//       paragraph: "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at.",
//     },
//     {
//       id: 6,
//       title: "Trusted Certification",
//       paragraph: "Velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero.",
//     },
//   ];

//   const [activeIndices, setActiveIndices] = useState([0]);

//   const handleClick = (index) => {
//     const updated = contents.map((_, i) => i).filter((i) => i <= index);
//     setActiveIndices(updated);
//   };

//   const lastIndex = activeIndices[activeIndices.length - 1];

//   return (
//     <section className="max-w-screen-xl mx-auto mt-20 px-4">
//       <p className="text-center text-3xl lg:text-5xl text-white90 font-medium mb-12">
//         Why ZYRO is perfect for your Business
//       </p>

//       <div className="relative flex w-full h-full rounded-md overflow-hidden bg-[#0B0618] border border-[#3A3C42]">
//         {/* Left-side Titles */}
//         <div className="flex items-stretch transition-all duration-500">
//           {activeIndices.slice(0, -1).map((index) => (
//             <div
//               key={contents[index].id}
//               className="w-[80px] min-w-[80px] border-r border-[#3A3C42] flex items-center justify-center cursor-pointer hover:bg-[#1C1C1F] transition-transform duration-500"
//               onClick={() => handleClick(index)}
//             >
//               <p
//                 className="text-white text-sm text-center"
//                 style={{
//                   writingMode: "vertical-rl",
//                   textOrientation: "mixed",
//                   transform: "rotate(180deg)",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {contents[index].title}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Active Content */}
//         <div
//           key={lastIndex}
//           className="flex-1 bg-[#0B0618] flex flex-col items-center justify-center px-6 py-8 border-r border-[#3A3C42] transition-all duration-500 animate-fadeIn"
//         >
//           <p className="text-white text-lg lg:text-2xl font-semibold text-center mb-4">
//             {contents[lastIndex].title}
//           </p>
//           <p className="text-white70 text-sm lg:text-base text-center max-w-xl">
//             {contents[lastIndex].paragraph}
//           </p>
//         </div>

//         {/* Right-side Titles with Slide-In */}
//         <div className="flex items-stretch transition-all duration-500">
//           {contents.map((item, idx) =>
//             !activeIndices.includes(idx) ? (
//               <div
//                 key={item.id}
//                 className="w-[80px] min-w-[80px] border-l border-[#3A3C42] flex items-center justify-center transition-transform duration-500"
//               >
//                 <button
//                   onClick={() => handleClick(idx)}
//                   className="w-full h-full px-2 py-4 hover:bg-[#1C1C1F] transition-all duration-500"
//                 >
//                   <span
//                     className="block text-white90 text-center text-sm vertical-rl rotate-180"
//                     style={{
//                       writingMode: "vertical-rl",
//                       textOrientation: "mixed",
                     
                  
//                     }}
//                   >
//                     {item.title}
//                   </span>
//                 </button>
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProgressiveVerticalSlider;  

import { useState } from "react";

const contents = [
  {
    id: 1,
    title: "Fast User-Friendly Interface",
    paragraph:
      "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage.",
  },
  {
    id: 2,
    title: "Scalable Solutions",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est.",
  },
  {
    id: 3,
    title: "Time-Saving and Cost-Effective",
    paragraph:
      "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl.",
  },
  {
    id: 4,
    title: "Robust Data Security",
    paragraph:
      "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor.",
  },
  {
    id: 5,
    title: "Innovation",
    paragraph:
      "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at.",
  },
  {
    id: 6,
    title: "Trusted Certification",
    paragraph:
      "Velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero.",
  },
  
];

export default function ResponsiveVerticalSlider() {
  const [activeIndices, setActiveIndices] = useState([0]);

  const handleClick = (index) => {
    const updated = contents.map((_, i) => i).filter((i) => i <= index);
    setActiveIndices(updated);
  };

  const lastIndex = activeIndices[activeIndices.length - 1];

  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-10">
      <h2 className="text-center text-3xl lg:text-5xl text-white90 font-medium mb-12">
        Why ZYRO is perfect for your Business
      </h2>

      {/* --- Desktop Layout (lg and up) --- */}
      <div className="relative hidden lg:flex w-full h-[450px] rounded-md overflow-hidden bg-[#0B0618] border-[0.894px] border-[#3A3C42]">
       {/* Left-side Titles */}
        <div className="flex items-stretch transition-all duration-500">
           {activeIndices.slice(0, -1).map((index) => (
            <div
              key={contents[index].id}
              className="w-[80px] min-w-[80px] border-r-[0.894px] border-[#3A3C42] py-[25px] flex justify-center cursor-pointer hover:bg-[#1C1C1F] transition-transform duration-500"
              onClick={() => handleClick(index)}
            >
              <p
                className="text-[#686868] text-[23px] font-semibold"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
              >
                {contents[index].title}
              </p>
            </div>
          ))}
        </div>

        {/* Active Content */}
        <div
          key={lastIndex}
          className="flex-1 bg-[#0B0618] flex flex-col justify-center px-[40px] py-8  transition-all duration-500 animate-fadeIn"
        >
          <p className="text-white text-[32px]  font-medium ">
            {contents[lastIndex].title}
          </p>
          <p className="text-white70 text-[21.4px] font-normal max-w-xl mt-[30px]">
            {contents[lastIndex].paragraph}
          </p>
        </div>

        {/* Right-side Titles with Slide-In */}
        <div className="flex items-stretch transition-all duration-500">
          {contents.map((item, idx) =>
            !activeIndices.includes(idx) ? (
              <div
                key={item.id}
                className="w-[80px] min-w-[80px] border-l-[0.894px] border-[#3A3C42]  transition-transform duration-500"
              >
                <button
                  onClick={() => handleClick(idx)}
                  className="w-full h-full px-2 hover:bg-[#1C1C1F] py-[25px] flex justify-center  items-end transition-all duration-500"
                >
                  <span
                    className="block text-[#686868] text-[23px] font-semibold vertical-rl rotate-180"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                     
                  
                    }}
                  >
                    {item.title}
                  </span>
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* --- Mobile & Tablet Layout (below lg) --- */}
   {/* --- Mobile & Tablet Layout (below lg) --- */}
<div className="flex lg:hidden flex-col bg-[#0B0618] rounded-md overflow-hidden border-[0.894px] border-[#3A3C42]">
  {/* Top Titles: all before the active one */}
  <div className="flex flex-col border-b-[0.894px] border-[#3A3C42]">
    {contents.slice(0, lastIndex).map((item, idx) => (
      <button
        key={item.id}
        onClick={() => handleClick(idx)}
        className="w-full h-[50px] p-3 text-[#686868] text-[18px] font-medium text-left border-b-[0.894px] border-[#3A3C42] hover:bg-[#1C1C1F] last:border-b-0"
      >
        {item.title}
      </button>
    ))}
  </div>

  {/* Active Content */}
  <div className="p-[28px]  min-h-[250px] bg-[#0B0618]  transition-all duration-500 animate-fade-in animate-fadeIn">
    <p className="text-white text-[28px] font-medium  mb-2 ">
      {contents[lastIndex].title}
    </p>
    <p className="text-white70 text-[16px] font-normal">
      {contents[lastIndex].paragraph}
    </p>
  </div>

  {/* Bottom Titles: all after the active one */}
  <div className="flex flex-col border-t-[0.894px]  border-[#3A3C42]">
    {contents.slice(lastIndex + 1).map((item, idx) => {
      const trueIdx = lastIndex + 1 + idx;
      return (
        <button
          key={item.id}
          onClick={() => handleClick(trueIdx)}
          className="w-full h-[50px] p-3 text-[#686868] text-[18px] font-medium  text-left border-b-[0.894px] border-[#3A3C42] hover:bg-[#1C1C1F] last:border-b-0"
        >
          {item.title}
        </button>
      );
    })}
  </div>
</div>

    </section>
  );
}
