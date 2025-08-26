// import React from 'react'

import languageSoundbox from '/image/HomePage/languageSoundbox.svg'
import KnowMoreRightIcon from '/image/HomePage/Icon/KnowMoreRightIcon.svg'
function ZyroSoundBox() {
  return (
    <section className="max-w-screen-lg lg:px-[20px] xl:px-0 mx-auto mt-[200px]">
    

           <div className='lg:flex justify-between items-center'>
            <div className='lg:w-[50%] p-3'>
                <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold max-[400px]:text-28px text-[32px] lg:text-[47.74px] leading-[40px] lg:leading-[59.68px] text-center lg:text-left">ZYRO Soundbox</h2>
             <div className='flex justify-center'>
                 <p className="max-[360px]:w-full w-[335px] sm:w-[450px] lg:w-full text-white max-[400px]:text-19px text-[20px] lg:text-[31.83px] font-medium leading-[28px] lg:leading-[37px] mt-[15px] align-middle text-center lg:text-left">Get Real Time & Instant Audio Confirmations on Successful Payments</p>
             </div>
                <div className='flex justify-center lg:justify-start mt-[39px]'>
                      <button className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center flex items-center justify-center gap-[3px]">Know more <img src={KnowMoreRightIcon} alt="" className='h-[13px] w-[13px]' /></button>

                </div>
            </div>
            <div className='flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] mt-[87px] lg:mt-[52px]'>
                <img src={languageSoundbox} alt="" />
            </div>
        </div>

    </section>
  )
}

export default ZyroSoundBox