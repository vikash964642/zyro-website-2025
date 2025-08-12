// import  { useRef, useEffect, useState } from 'react';
// import expencecontrol1 from '../../../../../public/image/HomePage/expenseControl.png';
// import expencecontrol2 from '../../../../../public/image/HomePage/language-soundbox.png';
// import expencecontrol3 from '../../../../../public/image/HomePage/managing-corporate.png';
// import expencecontrol4 from '../../../../../public/image/HomePage/zyro_soundbox.png';
// import expencecontrol5 from '../../../../../public/image/HomePage/language-soundbox.png';
// import expencecontrol6 from '../../../../../public/image/HomePage/expenseControl.png';


// import Checked from '../../../../../public/image/HomePage/ExpenseRadioChecked.webp'

// import UnChecked from '../../../../../public/image/HomePage/ExpenseRadioUnChecked.webp'
// const labels = [
//   'Real Time Card Tracking',
//   'Spend Limits for Every Employee',
//   'Instant Notifications',
//   'Export Transactions Easily',
//   'Advanced Fraud Detection',
//   'Track Receipts Effortlessly',
// ];

// const images = [
//   expencecontrol1,
//   expencecontrol2,
//   expencecontrol3,
//   expencecontrol4,
//   expencecontrol5,
//   expencecontrol6,
// ];

// function ExpenceControl() {
  
//   const imageRefs = useRef([]);
//   const scrollContainerRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Scroll to image when label is clicked
//   const handleLabelClick = (index) => {
//     imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     setActiveIndex(index);
//   };

//   // Observe which image is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
//             const index = Number(entry.target.dataset.index);
//             setActiveIndex(index);
//           }
//         });
//       },
//       {
//         root: scrollContainerRef.current,
//         threshold: 0.9,
//       }
//     );

//     imageRefs.current.forEach((ref) => ref && observer.observe(ref));
//     return () => {
//       imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
//     };
//   }, []);

//   return (
//     <section className="max-w-screen-lg lg:mx-auto mx-4 py-10 mt-[120px]">
//       <h3 className="text-center text-2xl lg:text-[30px] font-semibold mb-10 ExpenceControlHeaderGradient">
//      Complete Expense Control at Your Fingertips
//       </h3>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Label Section */}
//         <div className="w-full md:w-1/2 sticky top-0 space-y-[25px]">
//           {labels.map((label, index) => (
//             <label
//               key={index}
//               onClick={() => handleLabelClick(index)}
//               className={`block p-[2px] rounded-md cursor-pointer ${
//                 activeIndex === index ? 'text-[20px] font-semibold text-[#FFF]' : 'text-[20px] font-normal text-[#B6B6B6]'
//               }`}
//             >
//               <div className='flex items-center gap-[20px]'>
//                 {/* <input
//                   type="radio"
//                   name="feature"
//                   checked={activeIndex === index}
//                   readOnly
//                   className="w-4 h-4 rounded-full border border-white bg-transparent checked:bg-white mr-3"
//                 /> */}
//                 <img src={activeIndex === index ? Checked : UnChecked} className='h-[20px] w-[20px]' />
//                 <span>{label}</span>
//               </div>
//             </label>
//           ))}
//         </div>

//         {/* Image Section - One at a time */}
//         <div
//           ref={scrollContainerRef}
//           className="w-full md:w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               data-index={index}
//               ref={(el) => (imageRefs.current[index] = el)}
//               className="h-[500px] flex justify-center items-center snap-start"
//             >
//               <img src={img} alt={`Image ${index}`} className="max-w-full max-h-[400px]" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ExpenceControl;



// import { useRef, useEffect, useState } from 'react';

// import expencecontrol1 from '../../../../../public/image/HomePage/expenseControl.png';
// import expencecontrol2 from '../../../../../public/image/HomePage/language-soundbox.png';
// import expencecontrol3 from '../../../../../public/image/HomePage/managing-corporate.png';
// import expencecontrol4 from '../../../../../public/image/HomePage/zyro_soundbox.png';
// import expencecontrol5 from '../../../../../public/image/HomePage/language-soundbox.png';
// import expencecontrol6 from '../../../../../public/image/HomePage/expenseControl.png';

// import Checked from '../../../../../public/image/HomePage/ExpenseRadioChecked.webp';
// import UnChecked from '../../../../../public/image/HomePage/ExpenseRadioUnChecked.webp';

// // ✅ Combined array of label + image
// const features = [
//   {
//     label: 'Real Time Card Tracking',
//     image: expencecontrol1,
//   },
//   {
//     label: 'Spend Limits for Every Employee',
//     image: expencecontrol2,
//   },
//   {
//     label: 'Instant Notifications',
//     image: expencecontrol3,
//   },
//   {
//     label: 'Export Transactions Easily',
//     image: expencecontrol4,
//   },
//   {
//     label: 'Advanced Fraud Detection',
//     image: expencecontrol5,
//   },
//   {
//     label: 'Track Receipts Effortlessly',
//     image: expencecontrol6,
//   },
// ];

// function ExpenceControl() {
//   const imageRefs = useRef([]);
//   const scrollContainerRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Scroll to image when label is clicked
//   const handleLabelClick = (index) => {
//     imageRefs.current[index]?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center',
//     });
//     setActiveIndex(index);
//   };

//   // Observe which image is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
//             const index = Number(entry.target.dataset.index);
//             setActiveIndex(index);
//           }
//         });
//       },
//       {
//         root: scrollContainerRef.current,
//         threshold: 0.9,
//       }
//     );

//     imageRefs.current.forEach((ref) => ref && observer.observe(ref));

//     return () => {
//       imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
//     };
//   }, []);

//   return (
//     <section className="max-w-screen-lg lg:mx-auto mx-4 py-10 mt-[120px]">
//       <h3 className="text-center text-2xl lg:text-[30px] font-semibold mb-10 ExpenceControlHeaderGradient">
//         Complete Expense Control at Your Fingertips
//       </h3>

//       <div className="flex flex-col items-center md:flex-row gap-6">
//         {/* ✅ Label Section */}
//         <div className="w-full md:w-1/2 sticky top-0 space-y-[25px]">
//           {features.map((item, index) => (
//             <label
//               key={index}
//               onClick={() => handleLabelClick(index)}
//               className={`block p-[2px] rounded-md cursor-pointer ${
//                 activeIndex === index
//                   ? 'text-[20px] font-semibold text-[#FFF]'
//                   : 'text-[20px] font-normal text-[#B6B6B6]'
//               }`}
//             >
//               <div className="flex items-center gap-[20px]">
//                 <img
//                   src={activeIndex === index ? Checked : UnChecked}
//                   className="h-[20px] w-[20px]"
//                   alt=""
//                 />
//                 <span>{item.label}</span>
//               </div>
//             </label>
//           ))}
//         </div>

//         {/* ✅ Image Section */}
//         <div
//           ref={scrollContainerRef}
//           className="w-full md:w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
//         >
//           {features.map((item, index) => (
//             <div
//               key={index}
//               data-index={index}
//               ref={(el) => (imageRefs.current[index] = el)}
//               className="h-[500px] flex justify-center items-center snap-start"
//             >
//               <img
//                 src={item.image}
//                 alt={`Feature ${index}`}
//                 className="max-w-full max-h-[400px]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ExpenceControl;



import { useRef, useEffect, useState } from 'react';

import expencecontrol1 from '../../../../../public/image/HomePage/RealTimetracking.webp';
import expencecontrol2 from '../../../../../public/image/HomePage/FullAutomation.webp';
import expencecontrol3 from '../../../../../public/image/HomePage/CustomControl.webp';
import expencecontrol4 from '../../../../../public/image/HomePage/AutomaticReconciliation.webp';
import expencecontrol5 from '../../../../../public/image/HomePage/EasyReimbursements.webp';
import expencecontrol6 from '../../../../../public/image/HomePage/SmartDashboardReports.webp';

import Checked from '../../../../../public/image/HomePage/ExpenseRadioChecked.webp';
import UnChecked from '../../../../../public/image/HomePage/ExpenseRadioUnChecked.webp';

const features = [
  {
    label: 'Real Time Card Tracking',
    image: expencecontrol1,
  },
  {
    label: 'Full Automation',
    image: expencecontrol2,
  },
  {
    label: 'Custom Controls',
    image: expencecontrol3,
  },
  {
    label: 'Automatic Reconciliations',
    image: expencecontrol4,
  },
  {
    label: 'Easy Reimbursements',
    image: expencecontrol5,
  },
  {
    label: 'Smart Dashboards & Reports',
    image: expencecontrol6,
  },
];

function ExpenceControl() {
  const imageRefs = useRef([]);
  const imageScrollRef = useRef(null);
  const labelScrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isManuallyScrolling = useRef(false);

  // When a label is clicked, scroll to the corresponding image
  // const handleLabelClick = (index) => {
  //   setActiveIndex(index);
  //   isManuallyScrolling.current = true;

  //   imageRefs.current[index]?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //   });

  //   // Reset flag after scroll finishes
  //   setTimeout(() => {
  //     isManuallyScrolling.current = false;
  //   }, 600);
  // };

  // // Observe image scrolling and update active label
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (isManuallyScrolling.current) return; // Skip while smooth scrolling

  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
  //           const index = Number(entry.target.dataset.index);
  //           setActiveIndex(index);
  //         }
  //       });
  //     },
  //     {
  //       root: imageScrollRef.current,
  //       threshold: 0.6,
  //     }
  //   );

  //   imageRefs.current.forEach((ref) => ref && observer.observe(ref));

  //   return () => {
  //     imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  //   };
  // }, []);

const handleLabelClick = (index) => {
    setActiveIndex(index);
    imageRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // Observe which image is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const newIndex = parseInt(visibleEntry.target.dataset.index, 10);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);

            // Scroll labels to match
            labelScrollRef.current?.children[newIndex]?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }
      },
      {
        root: imageScrollRef.current,
        threshold: 0.6, // 60% of image visible
      }
    );

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeIndex]);


  return (
    <section className="max-w-screen-lg mx-auto px-4 xl:px-0 py-10 mt-[120px]">
      <h3 className="text-center text-2xl lg:text-[30px] font-semibold mb-[50px] ExpenceControlHeaderGradient">
        Complete Expense Control at Your Fingertips
      </h3>

      {/* ✅ Desktop View */}
     {/* <div className="hidden md:flex flex-row gap-6">
     
        <div
          className="w-1/2 max-h-[500px] overflow-y-auto pr-2 space-y-[25px] scroll-smooth"
          ref={labelScrollRef}
        >
          {features.map((item, index) => (
            <label
              key={index}
              onClick={() => handleLabelClick(index)}
              className={`block p-[2px] rounded-md cursor-pointer ${
                activeIndex === index
                  ? 'text-[20px] font-semibold text-[#FFF]'
                  : 'text-[20px] font-normal text-[#B6B6B6]'
              }`}
            >
              <div className="flex items-center gap-[20px]">
                <img
                  src={activeIndex === index ? Checked : UnChecked}
                  className="h-[20px] w-[20px]"
                  alt=""
                />
                <span>{item.label}</span>
              </div>
            </label>
          ))}
        </div>


        <div
          className="w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
          ref={imageScrollRef}
        >
          {features.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="h-[500px] flex justify-center items-center snap-start"
            >
              <img
                src={item.image}
                alt={`Feature ${index}`}
                className="max-w-full max-h-[400px]"
              />
            </div>
          ))}
        </div>
      </div>  */}


  <div className="hidden md:flex flex-row gap-6">
      {/* Labels */}
      <div
        className="w-1/2 max-h-[500px] overflow-y-auto pr-2 space-y-[25px] scroll-smooth"
        ref={labelScrollRef}
      >
        {features.map((item, index) => (
          <label
            key={index}
            onClick={() => handleLabelClick(index)}
            className={`block p-[2px] rounded-md cursor-pointer ${
              activeIndex === index
                ? "text-[20px] font-semibold text-[#FFF]"
                : "text-[20px] font-normal text-[#B6B6B6]"
            }`}
          >
            <div className="flex items-center gap-[20px]">
              <img
                src={activeIndex === index ? Checked : UnChecked}
                className="h-[20px] w-[20px]"
                alt=""
              />
              <span>{item.label}</span>
            </div>
          </label>
        ))}
      </div>

      {/* Images */}
      <div
        className="w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
        ref={imageScrollRef}
      >
        {features.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="h-[500px] flex justify-center  snap-start"
          >
            <img
              src={item.image}
              alt={`Feature ${index}`}
              className="max-w-full max-h-[400px]"
            />
          </div>
        ))}
      </div>
    </div>
      {/* ✅ Mobile View */}
      <div className="flex flex-col md:hidden space-y-4">
        {features.map((item, index) => (
          <div key={index}>
            <label
              onClick={() => handleLabelClick(index)}
              className={`block p-[2px] rounded-md cursor-pointer mb-2 ${
                activeIndex === index
                  ? 'text-[18px] font-semibold text-white'
                  : 'text-[18px] font-normal text-[#B6B6B6]'
              }`}
            >
              <div className="flex items-center gap-[16px]">
                <img
                  src={activeIndex === index ? Checked : UnChecked}
                  className="h-[20px] w-[20px]"
                  alt=""
                />
                <span>{item.label}</span>
              </div>
            </label>

            {activeIndex === index && (
              <div
                data-index={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="mt-3 mb-4 max-[450px]:flex justify-center"
              >
                <img
                  src={item.image}
                  alt={`Feature ${index}`}
                  className="max-[375px]:w-[100%] w-[350px] max-h-[300px] object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpenceControl;

