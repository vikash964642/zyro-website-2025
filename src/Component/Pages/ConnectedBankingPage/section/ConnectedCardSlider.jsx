// import React from 'react'
// import multipalbank1 from '../../../../../'

// function ConnectedCardSlider() {
//     const sliders = [
//       { image: multipalbank1,step:1,heading:"Link Your Current Account", paragraph: "Log in to Zyro and link your business bank account in just a few easy steps" },
//       { image: multipalbank2, step:2,heading:"Approve the Request", paragraph: "Verify and approve the connected banking request from net banking."},
//       { image: multipalbank3, step:3,heading:"Start Making Payouts", paragraph: "Send vendor payments or view your bank balances directly from the Zyro dashboard."},

//     ];
//   return (
//     <div className='text-white'>ConnectedCardSlider</div>
//   )
// }

// export default ConnectedCardSlider

import { useRef, useEffect, useState } from "react";

const contentData = [
  {
    heading: "Real-Time Card Tracking",
    paragraph: "Monitor spending as it happens for full transparency.",
  },
  {
    heading: "Set Spending Limits",
    paragraph: "Control employee expenses with predefined limits.",
  },
  {
    heading: "Instant Notifications",
    paragraph: "Receive alerts immediately for every transaction.",
  },
  {
    heading: "Export Transactions",
    paragraph: "Easily download detailed transaction reports anytime.",
  },
];

export default function OverlappingVerticalSlider() {
  const containerRef = useRef(null);
  const cardHeight = 400; // height of each card

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center py-10">
      <div
        ref={containerRef}
        className="relative w-full max-w-md h-[500px] overflow-y-scroll no-scrollbar"
      >
        <div style={{ height: `${contentData.length * cardHeight}px` }} />

        <div className="absolute top-0 left-0 w-full h-full">
          {contentData.map((item, index) => (
            <div
              key={index}
              className="sticky top-0 px-4"
              style={{
                zIndex: contentData.length - index,
                transform: `translateY(${index * 60}px)`,
              }}
            >
              <div className="bg-[#1a1a1a] text-white border border-[#4E4E4E] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
                <p className="text-base text-white">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
