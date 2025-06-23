import { useState } from "react";

function VerticleSlider() {
    const contents = [
    { id: 1, title: "Fast User-Friendly Interface", paragraph: "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage." },
    { id: 2, title: "Scalable Solutions", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est. Maecenas sed sapien ac eros sollicitudin vulputate." },
    { id: 3, title: "Time-Saving and Cost-Effective", paragraph: "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl. Curabitur aliquam lectus at odio facilisis mollis. " },
    { id: 4, title: "Robust Data Security", paragraph: "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor. Vivamus non enim suscipit, " },
    { id: 5, title: "Innovation", paragraph: "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at. Quisque venenatis, urna eget pellentesque malesuada" },
     { id: 6, title: "Trusted Certification", paragraph: "velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero, at volutpat enim pellentesque non. " },
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
   


<p className="lg:text-[48px] text-[28px] text-white90 font-medium text-center lg:mb-[50px] mb-[30px]">Why ZYRO is perfect for your Business</p>
<div className="w-full border-[0.894px] border-[#3A3C42] border-solid rounded-[3.575px] flex flex-col lg:flex-row lg:h-[400px] ">
  {/* Left Side: Title + Paragraph */}
  <div className="w-full lg:w-1/2 h-[350px] lg:h-auto bg-[#0B0618] flex flex-col lg:justify-center  text-white90 text-base border-b-[0.894px] lg:border-b-0 lg:border-r-[0.894px] border-[#3A3C42] border-solid p-6">
    <p className="max-[360px]:text-[20px] max-[400px]:text-[22px] text-[25px] lg:text-[32px] font-medium text-[#fff] pt-[10px] lg:pt-0">
      {contents.find((item) => item.id === activeId)?.title}
    </p>
    <p className="max-[400px]:text-[14px] text-[16px] lg:text-[21px] font-normal text-white70 pt-[20px]">
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

