import { useState } from "react";

const contents = [
  {
    id: 1,
    title: "Fast User-Friendly Interface",
    paragraph:
      "Our platform offers a user-friendly interface that makes digital banking simple, efficient, and easy for everyone to manage.",
  },
  {
    id: 2,
    title: "Scalable Solutions",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum arcu eu, dapibus est.",
  },
  {
    id: 3,
    title: "Time-Saving and Cost-Effective",
    paragraph:
      "Proin a ligula ipsum. Vestibulum id vestibulum arcu, sed sodales nisl. Curabitur aliquam lectus at odio facilisis mollis.",
  },
  {
    id: 4,
    title: "Robust Data Security",
    paragraph:
      "Curabitur volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla non tortor.",
  },
  {
    id: 5,
    title: "Innovation",
    paragraph:
      "Aenean dignissim sollicitudin lorem ut commodo. Donec fringilla posuere enim, vitae blandit est tempor at.",
  },
  {
    id: 6,
    title: "Trusted Certification",
    paragraph:
      "Velit est tristique quam, nec maximus risus metus et massa. Etiam posuere posuere libero, at volutpat enim pellentesque non.",
  },
];

function VerticleSlider() {
  const [activeId, setActiveId] = useState(1);

  const activeItem = contents.find((item) => item.id === activeId);

  return (
    <section className="max-w-screen-lg mx-4 lg:mx-auto mt-32">
      <p className="text-[28px] lg:text-[48px] text-white font-medium text-center mb-12">
        Why ZYRO is perfect for your Business
      </p>

      <div className="w-full border border-[#3A3C42] rounded-md flex flex-col lg:flex-row overflow-hidden transition-all duration-500 lg:h-[400px]">
        {/* Left: Main Content Section */}
        <div className="w-full lg:w-1/2 h-[50px] lg:h-auto bg-[#0B0618] p-6 text-white border-b lg:border-b-0 lg:border-r border-[#3A3C42] flex flex-col justify-center transition-all duration-500 ease-in-out">
          <h3 className="text-[25px] lg:text-[32px] font-medium">
            {activeItem.title}
          </h3>
          <p className="pt-5 text-[16px] lg:text-[21px] text-white/70">
            {activeItem.paragraph}
          </p>
        </div>

        {/* Right: Dynamic Vertical Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row">
          {contents.map((item) => {
            const isActive = item.id === activeId;
            return (
              
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`transition-all duration-500 ease-in-out flex items-center justify-center text-white/90 overflow-hidden 
                  ${isActive ? "flex-[3] bg-[#1a132b]" : "flex-[1] hover:bg-white/10"}
                  border-t lg:border-t-0 border-[#3A3C42] 
                  lg:border-r last:lg:border-r-0 
                  px-4 py-4 text-left lg:text-center 
                  lg:[writing-mode:vertical-lr] lg:rotate-180`}
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VerticleSlider;
