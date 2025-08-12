// import React from 'react'
import soundBox from "/image/soundbox/soundbox.webp";

function Form() {
  return (
    <section className="min-h-[80vh] flex justify-center">
      <div className="max-w-screen-lg mx-auto p-3">
        <div className="lg:flex justify-between items-center bg-[#0E0624] rounded-[20px] relative p-[20px]">
          <div className="lg:w-[70%] lg:pl-[76px] mt-[56px] lg:mb-[43px]">
            <p className="text-[#ffffff] lg:text-[38px] text-[26px] leading-[34px] lg:leading-[150%] font-semibold">
              Get a Call Back
            </p>
            <p className="text-white70 lg:text-[18px]  text-[14px] leading-[25px] font-normal lg:leading-[30px] lg:font-medium pt-[9px]">
              Join us to simplify payments, increase efficiency, and grow your
              business.
            </p>
            <div className=" mt-[30px] lg:mt-[55px]">
              <div className="flex  gap-[15px] flex-col lg:flex-row">
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[63px] lg:w-[301px] px-[35px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none" placeholder="Name" />
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[63px] px-[35px] lg:w-[301px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none" placeholder="Phone"  />
              </div>
              <div className="mt-[15px] flex  gap-[15px] flex-col lg:flex-row">
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[63px] px-[35px] lg:w-[301px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none" placeholder="Email"  />
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[63px] px-[35px] lg:w-[301px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none" placeholder="Pincode"  />
              </div>
              <button className="text-[17px] font-semibold text-[#FFF] bg-[#4F31B4] rounded-[46px] h-[46px] lg:h-[55px] w-[197px] mt-[40px]">Submit</button>
            </div>
          </div>
          <div className="form-input-gradient hidden lg:block"></div>
          <div className="form-soundbox-gradient"></div>
          <div className="lg:w-[30%] pl-[30px] lg:pt-[20px] pr-[46px] custom-bg flex justify-center items-center pt-[85px]">
            <img src={soundBox} alt="soundBox" height={"277px"} width={"205px"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
