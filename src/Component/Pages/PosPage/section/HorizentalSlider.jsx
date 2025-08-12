




import { useRef } from "react";
import HorizentalSliderImg1 from '../../../../../public/image/Pos/HorizentalSliderImg1.webp'
import HorizentalSliderImg2 from '../../../../../public/image/Pos/HorizentalSliderImg2.webp'
import HorizentalSliderImg3 from '../../../../../public/image/Pos/HorizentalSliderImg3.webp'
import HorizentalSliderImg4 from '../../../../../public/image/Pos/HorizentalSliderImg4.webp'
import HorizentalSliderImg5 from '../../../../../public/image/Pos/HorizentalSliderImg5.webp'

// Sample data
const sliders = [
  { image: HorizentalSliderImg1,heading:"Competitive Pricing", paragraph: "Low rental fees and leading MDR rates for affordable card payments." },
  { image: HorizentalSliderImg2,heading:"Dashboard Access", paragraph: "Track all your sales, refunds, settlements & reports in one live dashboard." },
  { image: HorizentalSliderImg3,heading:"User-Friendly Device", paragraph: "Lightweight, compact, and portable device built for fast, efficient billing." },
  { image: HorizentalSliderImg4,heading:"Bank-Level Security", paragraph: "Fully PCI DSS certified to ensure safe and compliant digital transactions." },
  { image: HorizentalSliderImg5,heading:"On-Field Support ", paragraph: "Get onboarding and in-person assistance in select locations." },
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
    <section className="max-w-screen-lg lg:mx-auto mx-4 lg:px-[16px] xl:px-0 mt-[82px]">
      <div>
        <p className="HorizentalSliderHeaderGradient max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] lg:text-[32px] font-medium text-center lg:text-start">
       Why Choose ZYRO POS?
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
            className={`lg:w-[250px] w-[220px] lg:py-[22px] lg:px-[16px] py-[16px] px-[12px]  border-[0.287px] last-mt border-bordercolor1 rounded-[7.167px] flex-shrink-0 scroll-snap-align-start ${
      index === sliders.length - 1 ? 'lg:mr-3' : ''}`}
          >
            <div className="lg:h-[116.47px] h-[70px] w-[70px] lg:w-[116.47px] rounded-[14.333px] md:rounded-[17px] lg:rounded-[20px] border-[0.688px] border-border20 bg-[#080219] flex items-center justify-center ">
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
