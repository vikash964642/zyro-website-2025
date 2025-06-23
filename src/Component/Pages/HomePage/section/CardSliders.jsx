import { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';
import card1 from '../../../../../public/image/HomePage/card1.png';
import card2 from '../../../../../public/image/HomePage/card2.png';
import card3 from '../../../../../public/image/HomePage/card3.png';

export default function CardSliders() {
  const slides = [
    {
      key: uuidv4(),
      content: (
        <div className="bg-white p-4 rounded-xl shadow-md text-center h-[498px] w-[522px] border-2 border-red-700">
            <div className='flex justify-center items-center mt-[71px]'>
            <img src={card1} alt=""  className='text-center items-center'/>
            </div>
          <span className="text-lg font-semibold block mt-[30px]">data 1 science</span>
          <p className="text-sm mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="bg-white p-4 rounded-xl shadow-md text-center h-[498px] w-[522px] border-2 border-red-700">
            <div className='flex justify-center items-center mt-[71px]'>
            <img src={card2} alt="" className='text-center' />
            </div>
          <span className="text-lg font-semibold block mt-[30px]">vikash 2 Development</span>
          <p className="text-sm mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="bg-white p-4 rounded-xl shadow-md text-center h-[498px] w-[522px] border-2 border-red-700">
            <div className='flex justify-center items-center mt-[71px]'>
            <img src={card2} alt="" className='text-center' />
            </div>
          <span className="text-lg font-semibold block mt-[30px]">Web 3 Development</span>
          <p className="text-sm mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem</p>
        </div>
      ),
    },
{
      key: uuidv4(),
      content: (
        <div className="bg-white p-4 rounded-xl shadow-md text-center h-[498px] w-[522px] px-[30px] border-2 border-red-700">
            <div className='flex justify-center items-center mt-[71px]'>
            <img src={card3} alt="" className='w-[103px] h-[112px]' />
            </div>
          <span className="text-lg font-semibold block mt-[30px]">Brand 4 EMI Offers</span>
          <p className="text-sm mt-3">Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners.</p>
        </div>
      ),
    },
    
  ];

  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="max-w-screen-lg mx-auto mt-[400px] ">
        
    <div className="w-full h-auto flex items-center justify-center flex-col">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={1}
          showNavigation={false}
          animationConfig={config.gentle}
        />

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-[270px] z-50 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setGoToSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === goToSlide ? 'bg-blue-600' : 'bg-gray-300'
              } transition duration-3000`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
