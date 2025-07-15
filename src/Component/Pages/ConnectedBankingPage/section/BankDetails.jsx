
 import  { useRef, useEffect, useState } from 'react';
 import { useSwipeable } from "react-swipeable";
    import expencecontrol1 from '../../../../../public/image/HomePage/expenseControl.png';
    import expencecontrol2 from '../../../../../public/image/HomePage/language-soundbox.png';
    import expencecontrol3 from '../../../../../public/image/HomePage/managing-corporate.png';
    import expencecontrol4 from '../../../../../public/image/HomePage/zyro_soundbox.png';
    import expencecontrol5 from '../../../../../public/image/HomePage/language-soundbox.png';
    import expencecontrol6 from '../../../../../public/image/HomePage/expenseControl.png';
    
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
    const contentData = [
  {
    label: 'Real Time Card Tracking',
    image: expencecontrol1,
  },
  {
    label: 'Spend Limits for Every Employee',
    image: expencecontrol2,
  },
  {
    label: 'Instant Notifications',
    image: expencecontrol3,
  },
  {
    label: 'Export Transactions Easily',
    image: expencecontrol4,
  },
  {
    label: 'Advanced Fraud Detection',
    image: expencecontrol5,
  },
  {
    label: 'Track Receipts Effortlessly',
    image: expencecontrol6,
  },
];
function BankDetails() {
        const imageRefs = useRef([]);
      const scrollContainerRef = useRef();
      const [activeIndex, setActiveIndex] = useState(0);
       const [currentSlide, setCurrentSlide] = useState(0);
    
      // Scroll to image when label is clicked
      const handleLabelClick = (index) => {
        imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setActiveIndex(index);
      };
    
      // Observe which image is in view
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                const index = Number(entry.target.dataset.index);
                setActiveIndex(index);
              }
            });
          },
          {
            root: scrollContainerRef.current,
            threshold: 0.9,
          }
        );
    
        imageRefs.current.forEach((ref) => ref && observer.observe(ref));
        return () => {
          imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
      }, []);

        const handleNext = () => {
          setCurrentSlide((prev) => (prev + 1) % contentData.length);
          console.log(setCurrentSlide);
        };
      
        const handlePrev = () => {
          setCurrentSlide((prev) => (prev - 1 + contentData.length) % contentData.length);
        };
      
      
      
        const swipeHandlers = useSwipeable({
          onSwipedLeft: handleNext,
          onSwipedRight: handlePrev,
        });
  return (
        <section className="max-w-screen-lg lg:mx-auto mt-[80px] lg:mt-[120px]">
          <h3 className="text-white max-[375px]:text-[24px] text-[28px] lg:text-[32px] text-center lg:text-left font-semibold mb-[20px] lg:mb-[24px] mx-4 lg:mx-0">
          Make Bulk{' '}
            <span className="bg-gradient-to-r from-[#EDEDED] to-[#9573DE] bg-clip-text text-transparent">
              Transfers in
            </span>{' '}
           Three Easy Steps
          </h3>
    <p className='text-[#959595] max-[375px]:text-[13px] text-[14px] text-center lg:text-left lg:text-[20px] font-normal lg:w-[57%] mx-4 lg:mx-0'>Efficiently manage business payouts with instant, automated payments to vendors or employees directly from your connected bank account.</p>
          <div className="hidden lg:flex gap-6 mt-[40px]">
            {/* Label Section */}
            <div className="w-full md:w-1/2 sticky top-0 space-y-4">
            {contentData.map((item, index) => (
  <label
    key={index}
    onClick={() => handleLabelClick(index)}
    className={`block p-[2px] cursor-pointer border-l-[2.34px] text-[20px] font-normal ${
      activeIndex === index ? ' border-[#FFF] text-[#FFF]' : 'border-[#ACACAC] text-[#959595]'
    }`}
  >
    <div className="flex items-center px-4 py-4 rounded-md">
      <span>{item.label}</span>
    </div>
  </label>
))}
            </div>
    
            {/* Image Section - One at a time */}
            <div
              ref={scrollContainerRef}
              className="w-full md:w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
            >
        {contentData.map((item, index) => (
  <div
    key={index}
    data-index={index}
    ref={(el) => (imageRefs.current[index] = el)}
    className="h-[500px] flex justify-center items-center snap-start"
  >
    <img src={item.image} alt={`Image ${index}`} className="max-w-full max-h-[400px]" />
  </div>
))}

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
      {contentData.map((slide, index) => (
        <div
          key={index}
          className="flex-none w-[calc(100%-2rem)] h-auto flex flex-col items-center p-4  border-[0.402px] border-[#4E4E4E] rounded-[10px] mx-4"
        >
          <div className="w-full flex justify-center">
            <p className="text-[#FFFFFF] text-[18px] font-medium max-[375px]:text-[16px]">
              {slide.label}
            </p>
          </div>
    

          {/* Image */}
          <div className="w-full flex justify-center items-center  mt-[20px]">
            <img src={slide.image} alt={`Slide ${index + 1}`} className='' />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Prev / Next Buttons */}
  <div className="flex justify-center gap-5 mt-4">
    <button
      onClick={handlePrev}
      className="z-20 text-white bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 flex justify-center items-center"
    >
      &lt;
    </button>
    <button
      onClick={handleNext}
      className="z-20 text-white bg-gray-700 rounded-full w-[40px] h-[40px] hover:bg-gray-800 flex justify-center items-center"
    >
      &gt;
    </button>
  </div>
</div>
       
    
   </section>
  );
}

export default BankDetails