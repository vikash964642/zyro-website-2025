import { useRef } from "react";
import multipalbank from "../../../../../public/image/HomePage/multipal-bank1.png";

// Sample data
const sliders = [
  { image: multipalbank, paragraph: "Multiple Bank Support" },
  { image: multipalbank, paragraph: "Secure Transactions" },
  { image: multipalbank, paragraph: "24/7 Account Access" },
  { image: multipalbank, paragraph: "Real-Time Alerts" },
  { image: multipalbank, paragraph: "Instant Setup" },
  { image: multipalbank, paragraph: "Low Maintenance" },
  { image: multipalbank, paragraph: "Seamless Experience" },
];

function BankAccountManagement() {
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
    <section className="max-w-screen-lg mx-auto mt-[82px]">
      <div>
        <p className="text-white text-[28px] lg:text-[36px] font-medium text-center">
          Bank Account{" "}
          <span className="bg-gradientText bg-clip-text text-transparent">
            Management made
          </span>{" "}
          <br className="hidden lg:block" /> simple & Easy
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 lg:mt-[92px] mt-[68px] pl-4 pr-[5%] pb-2 cursor-grab hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className="lg:w-[173px] w-[166px] h-[216px] lg:h-[247px] border-2 border-red-600 rounded-[16.52px] flex-shrink-0 scroll-snap-align-start"
          >
            <div className="lg:h-[116.47px] h-[109px] w-[109px] lg:w-[116.47px] rounded-full border-2 border-red-600 flex items-center justify-center mt-[24.09px] ml-[19.27px]">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className="h-[50px] lg:h-[56px] w-[50px] lg:w-[56px]"
              />
            </div>
            <p className="text-white text-[15px] lg:text-[16px] lg:font-semibold font-medium leading-[24.11px] align-middle ml-[19.27px] mt-[21.30px]">
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BankAccountManagement;
