import  { useRef, useEffect, useState } from 'react';
import expencecontrol1 from '../../../../../public/image/HomePage/expenseControl.png';
import expencecontrol2 from '../../../../../public/image/HomePage/language-soundbox.png';
import expencecontrol3 from '../../../../../public/image/HomePage/managing-corporate.png';
import expencecontrol4 from '../../../../../public/image/HomePage/zyro_soundbox.png';
import expencecontrol5 from '../../../../../public/image/HomePage/language-soundbox.png';
import expencecontrol6 from '../../../../../public/image/HomePage/expenseControl.png';

const labels = [
  'Real Time Card Tracking',
  'Spend Limits for Every Employee',
  'Instant Notifications',
  'Export Transactions Easily',
  'Advanced Fraud Detection',
  'Track Receipts Effortlessly',
];

const images = [
  expencecontrol1,
  expencecontrol2,
  expencecontrol3,
  expencecontrol4,
  expencecontrol5,
  expencecontrol6,
];

function ExpenceControl() {
  const imageRefs = useRef([]);
  const scrollContainerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to image when label is clicked
  const handleLabelClick = (index) => {
    imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  return (
    <section className="max-w-screen-lg mx-auto py-10 mt-[120px]">
      <h3 className="text-white text-center text-2xl lg:text-3xl font-semibold mb-10">
        Complete{' '}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Expense Control
        </span>{' '}
        at Your Fingertips
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Label Section */}
        <div className="w-full md:w-1/2 sticky top-0 space-y-4">
          {labels.map((label, index) => (
            <label
              key={index}
              onClick={() => handleLabelClick(index)}
              className={`block p-[2px] rounded-md cursor-pointer ${
                activeIndex === index ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : ''
              }`}
            >
              <div
                className={`flex items-center px-4 py-4 rounded-md ${
                  activeIndex === index
                    ? 'bg-black bg-opacity-70 text-white'
                    : 'bg-black bg-opacity-50 text-white'
                }`}
              >
                <input
                  type="radio"
                  name="feature"
                  checked={activeIndex === index}
                  readOnly
                  className="w-4 h-4 rounded-full border border-white bg-transparent checked:bg-white mr-3"
                />
                <span>{label}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Image Section - One at a time */}
        <div
          ref={scrollContainerRef}
          className="w-full md:w-1/2 h-[500px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="h-[500px] flex justify-center items-center snap-start"
            >
              <img src={img} alt={`Image ${index}`} className="max-w-full max-h-[400px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpenceControl;
