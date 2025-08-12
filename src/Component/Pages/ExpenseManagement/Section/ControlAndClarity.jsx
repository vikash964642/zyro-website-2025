import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AngleDown from "/image/AngleDown.png";
import bgGradiant from "/image/ExpenseManagement/bgGradiant.webp";
import ExpenseCustomcontrol from "/image/ExpenseManagement/ExpenseCustomcontrol.webp";
import ExpenseLiveSpend from "/image/ExpenseManagement/ExpenseLiveSpend.webp";
import ExpenseFullAutomation from "/image/ExpenseManagement/ExpenseFullAutomation.webp";
import Line from "../../../../../public/image/ExpenseManagement/line.svg";

const CardSlide = [
  {
    img: ExpenseCustomcontrol,
    heading: "Custom Controls",
    paragraph: "Set rules, policies, and spending limits",
  },
  {
    img: ExpenseLiveSpend,
    heading: "Live Spend Insights",
    paragraph: "Stay informed with real-time spend alerts",
  },
  {
    img: ExpenseFullAutomation,
    heading: "Full Automation",
    paragraph: "Simplify workflows and reduce manual effort",
  },
];

function ControlAndClarity() {
  const [, setScreen] = useState("lg"); // default to lg
  const [showExtra, setShowExtra] = useState(false);

  const handleToggle = () => setShowExtra((prev) => !prev);

  // Cards to display (all vs first 4)

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreen("lg");
      } else if (width >= 640) {
        setScreen("sm");
      } else {
        setScreen("xsm");
      }
    };

    updateScreen(); // initial
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);
  return (
    <section className=" min-h-[90vh] flex justify-center items-center">
      <div className="max-w-screen-lg lg:mx-auto mt-[100px] px-[20px] xl:px-[0px]">
        <div className="hidden md:block">
          <div className="relative">
            <div className="BusinessCardGradient"></div>
          </div>

          <h2 className="text-[34px] font-semibold text-center text-[#FFF] businessCardheaderColor1 px-[180px]">
            Get Full Control & Clarity Over Every Spend
          </h2>
          <p className="text-[16px] leading-[25px] font-normal lg:text-center text-[#A9A9A9] pt-[25px]">
            Monitor every rupee in real-time speed accuracy{" "}
          </p>

          <div
            className="w-full bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(${bgGradiant})`,
            }}
          >
            <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-[10px] sm:gap-y-[30px] mt-[50px]">
              {CardSlide.map((card, index) => {
                let plClass = "";
                let prClass = "";
                let imgClass = "";
                if (index === CardSlide.length - 1) {
                  imgClass = "hidden";
                } else {
                  imgClass = "block";
                }
                if (index === 1 || index === 4) {
                  plClass = "md:pl-[15px] min-[900px]:pl-[30px] lg:pl-[35px]";
                  prClass = "md:pr-[8px] lg:pr-[14px]";
                } else if (index === 0 || index === 3) {
                  plClass = "pl-[5px]";

                  prClass = "pr-[22px] lg:pr-[52px]";
                } else if (index === 2 || index === 5) {
                  plClass = "md:pl-[34px] lg:pl-[60px]";
                  prClass = "md:pr-[8px] lg:pr-[0px]";
                }
                return (
                  <div key={index} className="relative flex ">
                    <div
                      className={`rounded-xl overflow-hidden ${plClass} ${prClass}  transition duration-300 hover:shadow-xl h-full`}
                    >
                      <div className="bg-[#080219] w-[47px] h-[47px] rounded-[8px]  flex justify-center items-center">
                        <img
                          src={card.img}
                          alt={card.heading}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-[18px] lg:text-[22px]  text-[#FFF] font-medium lg:font-semibold mt-[9px]">
                        {card.heading}
                      </h3>
                      <p className="text-[14px] lg:text-[16px] font-normal text-[#F3F3F3] mt-[16px]">
                        {card.paragraph}
                      </p>
                    </div>

                    <img src={Line} className={imgClass} alt="line" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative  p-[18px] rounded-[10px] border-[0.4px] border-[#A901A3] bg-[#080219]">
            <h2 className="max-[360px]:text-[21px] max-[400px]:text-[22.5px]  max-[360px]:pr-[0px] text-[24px] mt-[16px] font-semibold mb-[45px] businessCardheaderColor2 pr-[5px]">
              Your Business Deserves Faster and Smarter Payout
            </h2>

            {CardSlide.slice(0, 3).map((card, index, arr) => (
              <div key={index}>
                <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px] border-[0.341px] border-[#A901A3] flex justify-center items-center">
                  <img src={card.img} alt={card.heading} />
                </div>
                <h3 className="max-[360px]:text-[18px] text-[20px] text-[#EAEAEA] font-medium mt-[9px]">
                  {card.heading}
                </h3>
                <p className="max-[360px]:text-[13px] text-[16px] font-normal text-[#777A88] mt-[16px]">
                  {card.paragraph}
                </p>
                <div
                  className={`mb-6 mt-[32px] ${
                    index !== arr.length - 1 || showExtra
                      ? " border-businessCardBorder1"
                      : ""
                  }`}
                ></div>
              </div>
            ))}
            {/* Animate only the extra cards (5th and 6th) */}

            <AnimatePresence>
              {showExtra &&
                CardSlide.slice(3).map((card, index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px] border-[0.341px] border-[#A901A3] flex justify-center items-center">
                        <img src={card.img} alt={card.heading} />
                      </div>
                      <h3 className="text-[20px] text-[#EAEAEA] font-medium mt-[9px]">
                        {card.heading}
                      </h3>
                      <p className="text-[16px] font-normal text-[#777A88] mt-[16px]">
                        {card.paragraph}
                      </p>
                      <div
                        className={`overflow-hidden mb-6 mt-[32px] ${
                          !isLast ? " border-businessCardBorder1" : ""
                        }`}
                      ></div>
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            <div className="flex justify-center mt-2">
              <button
                onClick={handleToggle}
                className="absolute h-[40px] w-[40px] rounded-full bg-[#6F41D2] flex justify-center items-center shadow-md"
              >
                <img
                  src={AngleDown}
                  alt={showExtra ? "Collapse" : "Expand"}
                  className={`transition-transform duration-300 ${
                    showExtra ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlAndClarity;
