

// function ControlFinance() {
//   return (
//      <section className="max-w-screen-lg lg:mx-auto px-4 pt-[120px]">
//             {/* <div className="CotrolFinance-gradient"></div> */}
// <div className="text-center ">
//  <div className="flex justify-center">
//    <p className="max-[360px]:text-[24px] text-[28px] lg:text-[45px] text-white90 font-medium max-[360px]:w-full w-[327px] sm:w-full">Take control of your Finance now</p>  
//  </div>
//   <p className="max-[375px]:text-[14px] text-[18px] lg:text-[29px] text-white70 font-normal pt-[19px] ">Accelerate your business with ZYRO</p>
//   <button className="h-[45px] w-[140px] bg-[#4F31B4] rounded-[44px] shadow-ControlFinance-custom-shadow text-[#FFF] text-[16px] font-medium mt-[45px]">Get Started</button>
// </div>
//         </section>
//   )
// }

// export default ControlFinance

// import React from 'react'
// import React from 'react'

import sape from '../../../../../public/image/AboutUs/backgroundImage.svg'

function Accelerate() {
  return (
    <section style={{backgroundImage:`url(${sape})`}} className=" sap bg-center bg-no-repeat bg-contain min-h-[80vh] flex justify-center items-center">
      <div  className=" max-w-screen-lg mx-auto flex justify-center items-center flex-col relative ">
        <div className="ControlFinance-gradiant"></div>

  
        <p className="max-[360px]:text-[24px] text-[28px] lg:text-[45px] text-white90 font-medium max-[360px]:w-full w-[327px] sm:w-full">Take control of your Finance now</p>  
    <p className="max-[375px]:text-[14px] text-[18px] lg:text-[29px] text-white70 font-normal pt-[19px] ">Accelerate your business with ZYRO</p>

     <button className="h-[45px] w-[140px] bg-[#4F31B4] rounded-[44px] shadow-ControlFinance-custom-shadow text-[#FFF] text-[16px] font-medium mt-[45px]">Get Started</button>
      </div>
    </section>
  );
}

export default Accelerate;

