import { useState } from "react";

function VerticleSlider() {
    const contents = [
    { id: 1, title: "Fast Onboarding", paragraph: "This is the paragraph for Content 1." },
    { id: 2, title: "Real-Time Tracking", paragraph: "This is the paragraph for Content 2." },
    { id: 3, title: "Increased Success Rates", paragraph: "This is the paragraph for Content 3." },
    { id: 4, title: "100% Secure & Reliable", paragraph: "This is the paragraph for Content 4." },
    { id: 5, title: "Integrated Dashboard", paragraph: "This is the paragraph for Content 5." },
     { id: 6, title: "Competitive Pricing", paragraph: "This is the paragraph for Content 6." },
    //   { id: 7, title: "Zyro Pricing 7", paragraph: "This is the paragraph for Content 7." },
    //   { id: 8, title: "Zyro Pricing 8", paragraph: "This is the paragraph for Content 8." },
    //   { id: 9, title: "Zyro Pricing 9", paragraph: "This is the paragraph for Content 9." },
    //   { id: 10, title: "Zyro Pricing 10", paragraph: "This is the paragraph for Content 10." },
    //   { id: 11, title: "Zyro Pricing 11", paragraph: "This is the paragraph for Content 11." },
    //   { id: 12, title: "Zyro Pricing 12", paragraph: "This is the paragraph for Content 12." },
    //   { id: 13, title: "Zyro Pricing 13", paragraph: "This is the paragraph for Content 13." },
  ];

  const [activeId, setActiveId] = useState(1);
  return (
    <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px]">
   



<div className="w-full border-[0.894px] border-[#3A3C42] border-solid rounded-[3.575px] flex flex-col lg:flex-row lg:h-[400px] ">
  {/* Left Side: Title + Paragraph */}
  <div className="w-full lg:w-1/2 h-[380px] lg:h-auto bg-[#0B0618] flex flex-col justify-center items-center lg:items-start text-left text-white90 text-base border-b-[0.894px] lg:border-b-0 lg:border-r-[0.894px] border-[#3A3C42] border-solid p-6">
    <p className="text-[28px] lg:text-[32px] font-medium text-[#fff]">
      {contents.find((item) => item.id === activeId)?.title}
    </p>
    <p className="text-[16px] lg:text-[21px] font-normal text-white70 pt-[20px]">
      {contents.find((item) => item.id === activeId)?.paragraph}
    </p>
  </div>

  {/* Right Side: Buttons */}
  <div className="w-full  lg:w-1/2 flex flex-col lg:flex-row lg:items-end">
    {contents
      .filter((item) => item.id !== activeId)
      .map((item, index, arr) => {
        const isLast = index === arr.length;
        return (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`w-full lg:w-auto lg:flex-1 text-white90 lg:h-[100%] border-t-[0.894px] lg:border-t-0 text-left lg:text-left [writing-mode:initial] lg:[writing-mode:vertical-lr] lg:rotate-180 px-4 py-4 border-[#3A3C42] border-solid ${
              !isLast ? 'lg:border-r-[0.894px]' : ''
            }`}
          >
            {item.title}
          </button>
        );
      })}
  </div>
</div>

        </section>
  )
}

export default VerticleSlider