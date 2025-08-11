// import React from 'react'
import "./contact.css";

function Herosection() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="relative">
          <h1 className="contacthead  text-[25px] lg:text-[38px] lg:leading-[46px] leading-[36px] font-semibold text-center">
            We are here to help you!
          </h1>

          <div className="cardGradiant"></div>
         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
             <div className="h-[330px] w-[300px] rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="pl-[28px] pt-[46px]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                  Customer Support
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Need help? Our dedicated 24/7 customer support team is here to
                  assist you with any queries or issues related to our services.
                </p>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] mt-[62px]">
                  <p className="text-[14px] leading-[20px] font-medium text-white">Get Support </p>
                </button>
              </div>
             </div>
             <div className="h-[330px] w-[300px] rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="pl-[28px] pt-[46px]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                 Merchant Support
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Interested in our services? Our sales experts are here to discuss how we can support your business needs
                </p>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] mt-[62px]">
                  <p className="text-[14px] leading-[20px] font-medium text-white">Contact Sales  </p>
                </button>
              </div>
             </div>
             <div className="h-[330px] w-[300px] rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="pl-[28px] pt-[46px]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                  Partnership
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Let’s collaborate! We are always open to strategic partnerships that drive innovation and growth in the digital banking space.
                </p>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] mt-[62px]">
                  <p className="text-[14px] leading-[20px] font-medium text-white">Partner Now  </p>
                </button>
              </div>
             </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
