// import React from 'react'
import languageSoundbox from '../../../../../public/image/HomePage/zyroposmachine.png'

function ZyroPosMachine() {
  return (
     <section className="max-w-screen-lg mx-auto mt-[120px]">
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-[50%] p-3'>
                    <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] lg:text-[47.74px] leading-[40px] lg:leading-[59.68px] text-center lg:text-left">ZYRO POS Machine</h2>
                    <p className='pr-[20px] lg:mt-[17px] lg:mb-[38px] text-[28px] leading-[40px] font-semibold text-center lg:text-left lg:text-[36px] text-white '> <span className='bg-gradientText bg-clip-text text-transparent'>Fast, Flexible</span> and Built for In-Store Payments</p>
                    <p className="text-[#9E9C9F] text-[14px] lg:text-[20px] font-normal leading-[28px] mt-[18px] align-middle text-center lg:text-left px-[40px] lg:px-[0px] ">Whether you run a retail shop, café, restaurant, spa, or salon- our all-in-one POS system helps you manage sales and accept payments easily.</p>
                    <div className='text-center lg:text-left mt-[39px]'>
                          <button className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center">Know more &gt;&gt;</button>
    
                    </div>
                </div>
                <div className='lg:w-[50%] '>
                    <img src={languageSoundbox} alt=""  className='h-[357px] w-[386px]'/>
                </div>
            </div>
        </section>
  )
}

export default ZyroPosMachine