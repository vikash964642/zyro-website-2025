// import React from 'react'
import arrowRight from "/image/ConnectedBanking/arrowRight.svg";
import sape from '../../../../../public/image/AboutUs/backgroundImage.svg'

function Accelerate() {
  return (
    <section style={{backgroundImage:`url(${sape})`}} className=" sap bg-center bg-no-repeat bg-contain min-h-[80vh] flex justify-center items-center">
      <div  className=" max-w-screen-lg mx-auto flex justify-center items-center flex-col relative ">
        <div className="accelerate-gradiant"></div>

        <h3 className="accelerateHead text-[38px] leading-[46px] font-semibold text-center">
          Accelerate your Business with Zyro
        </h3>

        <div className=" w-[199px] h-[52px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center mt-[35px]">
          <p className="text-[16px] font-semibold text-[#FFF]">Sign Up Now</p>
        </div>
        <div className=" bg-[#FBF9F1] rounded-[50%] absolute bottom-0 right-[176px] flex justify-center items-center">
          <img src={arrowRight} className="h-[52px] w-[52px]" />
        </div>
      </div>
    </section>
  );
}

export default Accelerate;
