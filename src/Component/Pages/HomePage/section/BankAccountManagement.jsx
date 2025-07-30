import { useRef } from "react";
import multipalbank3 from "/assets/icons/multipal-bank.webp";
import multipalbank4 from "/assets/icons/real-time.webp";
import multipalbank2 from "/assets/icons/account-to-account.webp";
import multipalbank1 from "/assets/icons/account-system.webp";
import multipalbank5 from "/assets/icons/seamless-fund.webp";
import multipalbank6 from "/assets/icons/enhanced.webp";
import multipalbank7 from "/assets/icons/user-friendly.png";


// Sample data
const sliders = [
  { image: multipalbank3, paragraph: "Multiple Bank Account" },
  { image: multipalbank4, paragraph: "Real-Time Monitoring" },
  { image: multipalbank2, paragraph: "Account-to- Account Payments" },
  { image: multipalbank5, paragraph: "Seamless Fund Transfers" },
  { image: multipalbank7, paragraph: "User-Friendly Dashboard" },
  { image: multipalbank1, paragraph: "Accounting System  Integration" },
  { image: multipalbank6, paragraph: "Enhanced Security" },
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
    <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[82px]">
      <div>
        <p className="text-white max-[360px]:text-[22px]max-[400px]:text-[25px] text-[28px] lg:text-[36px] font-medium text-center">
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
            className="lg:w-[173.63px] w-[166.11px] h-[216.52px] lg:h-[247px] border-[0.688px] border-[#4F31B4] rounded-[16.52px] flex-shrink-0 scroll-snap-align-start"
          >
            <div className="lg:h-[116.47px] h-[109px] w-[109px] lg:w-[116.47px] rounded-full BankAccountManagementCss2 flex items-center justify-center mt-[24.09px] ml-[19.27px]">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className="h-[50px] lg:h-[56px] w-[50px] lg:w-[56px]"
              />
            </div>
            <p className="text-white text-[15px] lg:text-[16px] lg:font-semibold font-medium leading-[24px] align-middle ml-[19.27px] mt-[21.30px]">
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default BankAccountManagement;
