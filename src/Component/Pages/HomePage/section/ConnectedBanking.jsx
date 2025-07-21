import { useEffect, useState } from "react";
import collab1 from "/assets/icons/upi.webp";
import collab2 from "/assets/icons/canara-icon.webp";
import collab3 from "/assets/icons/icicic.webp";
import collab4 from "/assets/icons/idfc.webp";
import collab5 from "/assets/icons/rbl.webp";
import collab6 from "/assets/icons/yes_bank.webp";
import zyroLogo from "/image/zyro-logo.svg";
import partnership from "/image/HomePage/partners.png";
import './HomePageCss.css';

export default function ConnectedBanking() {
  const [currImg, setCurrImg] = useState(0);

  const collaborators = [collab1, collab2, collab3, collab4, collab5, collab6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prev) => (prev + 1) % collaborators.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [collaborators.length]);

  return (
    <section  className="max-w-screen-lg mx-4 lg:mx-auto mt-[90px] lg:mt-[150px]">
<div className="flex items-center justify-center  py-10 relative">
  <div className="ConnectedBanking-gradient"></div>
      <div className="flex flex-col items-center lg:w-3/4">
        <h1 className="text-3xl md:text-6xl text-[#EDEDED] text-center font-semibold">
          Connected Banking
        </h1>
        <p className="w-[90%] text-[#9E9C9F] text-center text-[14px] lg:text-[20px] font-normal my-3 lg:leading-[33.6px]">
         Easily link, view, and manage all your bank accounts in one place with our Connected Banking solution. Stay on top of your finances with real-time updates, seamless transactions, and simplified account management.
        </p>

        <button className="bg-[#6F41D2] text-white px-6 py-2 rounded-3xl mt-6 mb-16 border border-[#6F41D2] hover:bg-[#5b34af] transition">
          Know more »
        </button>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[500px] gap-6">
          <div className="flex items-center justify-center overflow-hidden w-28 h-28 bg-white rounded-full">
            <img
              src={collaborators[currImg]}
              alt="collaborator"
              className="object-contain p-7"
            />
          </div>

          <img
            src={partnership}
            alt="partnership"
            className="w-20 md:w-28 object-contain"
          />

          <div className="flex items-center justify-center overflow-hidden w-28 h-28 bg-white rounded-full">
            <img
              src={zyroLogo}
              alt="Zyro logo"
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
