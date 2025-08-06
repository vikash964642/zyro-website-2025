import React from 'react'
import arrowRight from '../../../../../public/image/ConnectedBanking/arrowRight.svg';
import BusinessBankingImg from '../../../../../public/image/Pos/BusinessBanking.webp';
function BusinessBanking() {
  return (
  <section className="max-w-screen-lg lg:mx-auto mt-[100px]">
    <div className='bg-[#0E0624] overflow-hidden rounded-[20px] px-[25px] lg:pl-[70px] lg:pr-[70px] lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px]'>
      <div className='relative mt-[55px] lg:mt-[0px] lg:w-[65%] flex flex-col justify-center items-center lg:items-start'>
          <div>
            <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90'>Ready to accept payments the smart way?</h2>
            <p className='max-[360px]:text-[12px] text-[14px] lg:text-[16px] font-normal text-center lg:text-left text-white70 pt-[10px]'>Join the future of payments with Zyro POS.</p>
        </div>

           <div className='relative  mt-[40px] cursor-pointer z-20'>
            <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                <p className='text-[16px] font-semibold text-[#FFF]'>Contact Sales</p>
            </div>
            <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                <img src={arrowRight}/>
            </div>
        </div>
 <div className='businessBankingGradient1 w-[200px] h-[250px] lg:w-[300px] lg:h-[300px] z-10'></div>
      </div>
<div className='flex items-end justify-center lg:justify-start lg:w-[35%] relative'>
     <img src={BusinessBankingImg} className='w-[303px] h-[360px]'/>

        <div className='w-[200px] h-[250px] lg:w-[300px] lg:h-[300px] businessBankingGradient2'></div>
 
</div>
    </div>
  </section>
  )
}

export default BusinessBanking