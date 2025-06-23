import { useEffect, useState } from "react";
import collab1 from "../../../../../public/image/HomePage/Axis_Bank.png";
import collab2 from "../../../../../public/image/zyro-logo.svg";
import zyroLogo from "../../../../../public/image/zyro-logo.svg";
import partnership from "../../../../../public/image/HomePage/Partners.png";

export default function ConnectedBanking() {
  const [currImg, setCurrImg] = useState(0);

  const collaborators = [collab1, collab2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prev) => (prev + 1) % collaborators.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [collaborators.length]);

  return (
    <section  className="max-w-screen-lg mx-4 lg:mx-auto">
<div className="flex items-center justify-center bg-[#080411] py-10">
      <div className="flex flex-col items-center lg:w-3/4">
        <h1 className="text-3xl md:text-6xl text-[#EDEDED] text-center font-semibold">
          Connected Banking
        </h1>
        <p className="w-[90%] text-[#9E9C9F] text-center text-sm md:text-xl font-normal my-3 leading-relaxed">
         Easily link, view, and manage all your bank accounts in one place with our Connected Banking solution. Stay on top of your finances with real-time updates, seamless transactions, and simplified account management.
        </p>

        <button className="bg-[#6F41D2] text-white px-6 py-2 rounded-3xl mt-6 mb-16 border border-[#6F41D2] hover:bg-[#5b34af] transition">
          Know more »
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[500px] gap-6">
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
