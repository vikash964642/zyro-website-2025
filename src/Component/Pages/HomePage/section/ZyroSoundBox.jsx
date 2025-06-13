// import React from 'react'
import languageSoundbox from '../../../../../public/image/HomePage/language-soundbox.png'

function ZyroSoundBox() {
  return (
    <section className="max-w-screen-lg mx-auto">
        <div className='lg:flex justify-between items-center'>
            <div className='lg:w-[50%] p-3'>
                <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] lg:text-[47.74px] leading-[40px] lg:leading-[59.68px] text-center lg:text-left">ZYRO Soundbox</h2>
                <p className="text-white text-[20px] lg:text-[31.83px] font-medium leading-[100%] mt-[18px] align-middle text-center lg:text-left px-[40px] lg:px-[0px] ">Get Real Time & Instant Audio Confirmations on Successful Payments</p>
                <div className='text-center lg:text-left mt-[39px]'>
                      <button className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center">Know more &gt;&gt;</button>

                </div>
            </div>
            <div className='lg:w-[50%] px-[30px] lg:px-[0px] mt-[87px] lg:mt-[52px]'>
                <img src={languageSoundbox} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ZyroSoundBox