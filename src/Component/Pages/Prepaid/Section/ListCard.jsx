import React from 'react'
import ListCardImg1 from '../../../../../public/image/Prepaid/ListCardImg1.webp'
import ListCardImg2 from '../../../../../public/image/Prepaid/ListCardImg2.webp'
import ListCardImg3 from '../../../../../public/image/Prepaid/ListCardImg3.webp'
function ListCard() {
  return (
       <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[80px] mt-[110px] ">
        <div className='ListCardGradientTop'></div>
        <div className='border-[0.688px] border-[#434343] rounded-[16.5px] px-[12px] pt-[16px] pb-[19px] md:px-[18px] md:pt-[20px] md:pb-[24px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={ListCardImg1} className='h-[25px] w-[25px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Accepted Everywhere</h2>
            </div>
        </div> 
      
          <div className='pl-[70px] md:pl-[93px]'>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F]'>Shop Online - Fashion, Food, Travel, subscriptions, and more.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[5px]'>Pay in store - Swipe, Insert or Tap at any POS machine.</li>
            </ul>
          </div>
        </div>

               <div className='border-[0.688px] my-[20px] border-[#434343] rounded-[16.5px] px-[12px] pt-[16px] pb-[19px] md:px-[18px] md:pt-[20px] md:pb-[24px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={ListCardImg2} className='h-[26px] w-[26px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Free Reloads, Always</h2>
            </div>
        </div> 
     
              <div className='pl-[70px] md:pl-[93px]'>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F]'>Zero Top-Up Fees - Every rupee goes directly to your card.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[5px]'>No Hidden Charges - Know exactly what you’re spending.</li>
            </ul>
          </div>
        </div>

               <div className='border-[0.688px] border-[#434343] rounded-[16.5px] px-[12px] pt-[16px] pb-[19px] md:px-[18px] md:pt-[20px] md:pb-[24px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={ListCardImg3} className='h-[24px] w-[24px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Bank- Level Security, Always On</h2>
            </div>
        </div> 
              <div className='pl-[70px] md:pl-[93px]'>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F]'>Instantly block, freeze, or restrict cards.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[5px]'>Control how and where your money is spent with custom limits.</li>
            </ul>
          </div>
        </div>
        <div className='ListCardGradientBottom'></div>
        </section>
  )
}

export default ListCard