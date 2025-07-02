




import { useRef } from "react";
import HorizentalSliderImg1 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg1.png'
import HorizentalSliderImg2 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg2.png'
import HorizentalSliderImg3 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg3.png'
import HorizentalSliderImg4 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg4.png'
import HorizentalSliderImg5 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg5.png'
import HorizentalSliderImg6 from '../../../../../public/image/HorizentalSliderConnectedBanking/HorizentalSliderImg6.png'

// Sample data
const sliders = [
  { image: HorizentalSliderImg1,heading:"Real-Time Tracking", paragraph: "Our platform provides real-time balance updates, instant transaction tracking, and payment monitoring without any delays." },
  { image: HorizentalSliderImg2,heading:"Automated Reconciliation", paragraph: "Automatically match payments, bank statements, and records to save time and improve financial accuracy." },
  { image: HorizentalSliderImg3,heading:"Better Customer Experience", paragraph: "Facilitate faster payment processing and smooth financial services to enhance client satisfaction and trust" },
  { image: HorizentalSliderImg4,heading:"Customizable Financial Reports", paragraph: "Generate comprehensive financial reports to monitor business performance and support informed decision-making." },
  { image: HorizentalSliderImg5,heading:"Complete Financial Control", paragraph: "Easily track, manage, and monitor your cash flow for efficient and transparent financial operations." },
  { image: HorizentalSliderImg6,heading:"Scalability for Growth", paragraph: "From startups to large enterprises, our platform grows and adapts seamlessly with your business needs." },
];

function HorizentalSlider() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[82px]">
      <div>
        <p className="text-white max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] lg:text-[32px] font-medium text-center">
       Experience{" "}
          <span className="bg-gradientText bg-clip-text text-transparent">
           the Benefit of
          </span>{" "}
          <span > Connected Banking</span>
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 lg:mt-[65px] mt-[50px]  pb-2 cursor-grab hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`lg:w-[250px] w-[220px] lg:py-[22px] lg:px-[16px] py-[16px] px-[12px]  border-[0.287px] last-mt border-[#4A4A4A] rounded-[7.167px] flex-shrink-0 scroll-snap-align-start ${
      index === sliders.length - 1 ? 'lg:mr-3' : ''}`}
          >
            <div className="lg:h-[116.47px] h-[70px] w-[70px] lg:w-[116.47px] rounded-[14.333px] border-[0.493px] border-[#A901A3] bg-[#080219] flex items-center justify-center ">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className="h-[38px] lg:h-[56px] w-[38px] lg:w-[56px]"
              />
            </div>
            <p className="text-[#FFF] text-[14.333px] lg:text-[20px] font-semibold lg:pt-[18px] pt-[13px]">{slider.heading}</p>
            <p className="text-[#9E9C9F] text-[11.467px] lg:text-[16px] font-normal  lg:pt-[18px] pt-[13px]" >
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorizentalSlider;
