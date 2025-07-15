
import { useState } from "react";

function VerticalSlider() {
  const items = [
    { item: "Fast Onboarding ", info: "Set up your account quickly and start managing your finances with ease." },
    { item: "Real-Time Tracking ", info: "Track your business finances and transactions in real-time for better control. " },
    { item: "User-Friendly Dashboard  ", info: "Manage accounts, view reports, and track financial performance with our simple, intuitive interface. " },
    { item: "Robust Security  ", info: "Keep your business transactions safe with advanced encryption and secure payment gateways. " },
    { item: "Scalable Solutions ", info: "Suitable for businesses of all sizes, from startups to large enterprises. " },
    { item: "24/7 Customer Service  ", info: "Get expert customer service anytime through email, phone, or WhatsApp. " },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-screen-lg lg:mx-auto  mt-[120px] relative">
      <p className="lg:text-[48px] text-[28px] text-white90 font-medium text-center lg:mb-[50px] mb-[30px]">
        Why <span className="bg-textgradient bg-clip-text text-transparent">ZYRO</span> is perfect for your Business
      </p>
      <div className="flex flex-wrap ">
        {items.map((el, index) => (
          <div key={index} className="flex">
            <div
              className={` leading-[100px] pb-[23.24px] border-[0.894px] border-[#3A3C42] border-solid  cursor-pointer transition-all duration-300 h-[400px]
                ${
                  activeIndex === index
                    ? "bg-[#2c3e50] text-[#ecf0f1]  hidden"
                    : "bg-transparent text-[#686868] text-[23.23px] font-semibold  [writing-mode:sideways-lr] "
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {el.item}
            </div>
            <div
              className={`flex flex-col  justify-center   gap-5 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out h-[400px]
                ${
                  activeIndex === index
                    ? "w-[499px] pl-4 bg-[#0B0618] text-[#FFF] border-[0.894px] border-[#3A3C42] border-solid"
                    : "w-0"
                }`}
            >
              <div className="text-[32.17px] font-medium">{activeIndex === index && el.item}</div>
              <div className="text-[21.45px] text-white70 font-normal break-words whitespace-normal animate ">{activeIndex === index && el.info}</div>
            </div>
          </div>
        ))}
      <div className="vertical_slider_gradient"></div>
      </div>
    </section>
  );
}

export default VerticalSlider;
