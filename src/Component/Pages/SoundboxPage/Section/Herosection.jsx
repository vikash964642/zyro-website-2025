// import React from 'react'
import languageSoundbox from '/image/soundbox/soundboxnew.svg'


function Herosection() {
  return (
   <section className="min-h-[90vh] flex justify-center items-center">
          <div className='max-w-screen-lg mx-auto  mt-[80px] lg:mt-0'>
             <div className='lg:flex justify-between items-center'>
                 <div className='lg:w-[50%] p-3'>
                     <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold max-[400px]:text-28px text-[32px] lg:text-[40px] leading-[42px] lg:leading-[56px] text-center lg:text-left">ZYRO Soundbox</h2>
                     <p className="hidden lg:block text-white max-[400px]:text-19px text-[20px] lg:text-[24px] font-medium leading-[39px] mt-[12px] align-middle text-center lg:text-left lg:pr-[40px]">The Smart Way to Accept Payments with Instant Voice Alerts</p>
                     <div className='text-center lg:text-left mt-[39px] hidden lg:block'>
                           <button className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center">Get Your Speaker</button>
            
                     </div>
                 </div>
                 <div className='flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] '>
                     <img src={languageSoundbox} alt="" />
                 </div>
                    <p className="lg:hidden  text-white max-[400px]:text-19px text-[20px]  font-medium leading-[36px] mt-[44px] align-middle text-center px-[35px] ">The Smart Way to Accept Payments with Instant Voice Alerts</p>
                  <div className='text-center lg:text-left mt-[39px] lg:hidden '>
                           <button className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center">Get Your Speaker</button>
            
                     </div>
             </div>
          </div>
       </section>
  )
}

export default Herosection