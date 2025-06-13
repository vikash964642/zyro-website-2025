// import React from 'react'
import Replayicon from "../../../../../public/image/HomePage/Icon/replay-last.png";

const cards = [
  { image: Replayicon, paragraph: "Replay Last\nTransactions" },
  { image: Replayicon, paragraph: "Real-Time\nAlerts" },
  { image: Replayicon, paragraph: "Quick\nRefunds" },
  { image: Replayicon, paragraph: "Secure\nPayments" },
  { image: Replayicon, paragraph: "Audio\nConfirmation" },
  { image: Replayicon, paragraph: "Instant Balance\nUpdates" },
];

function InstantPayment() {
  return (
    <section className="max-w-screen-lg mx-auto">
      <div>
        <h2 className="bg-gradientText bg-clip-text text-transparent text-center font-semibold text-[28px] lg:text-[45px] leading-[46px] lg:leading-[46px]">
          Instant Payment Alerts, <br className="hidden lg:block" /> Loud and Clear
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[184.64px] h-[130.06px] lg:w-[257.31px] lg:h-[181.24px] rounded-[9.75px] lg:rounded-[13.59px] border-[0.56px] lg:border-[0.78px] pl-[18.84px] lg:pl-[21.05px] pt-[16.02px] lg:pt-[22.33px]"
          >
            <div className="h-[37px] lg:h-[52.53px] w-[37px] lg:w-[52.53px] bg-[#4F31B4] rounded-full flex items-center justify-center">
              <img
                src={card.image}
                alt=""
                className="h-[21.68px] lg:h-[20.14px] w-[14.45px] lg:w-[30.21px]"
              />
            </div>
            <p className="font-normal text-[#EBEBEB] text-[14.9px] lg:text-[20.76px] leading-[22.62px] lg:leading-[31.52px] mt-[13px]">
              {card.paragraph.split("\n").map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx !== arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstantPayment;
