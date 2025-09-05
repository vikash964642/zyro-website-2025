import { Link } from 'react-router-dom';
import IMPSHeroSectionImg1 from '/image/IMPSSwitch/IMPSHeroSectionImg1.webp';
import IMPSHeroSectionImgMob from '/image/IMPSSwitch/IMPSHeroSectionImgMob.webp';
import './IMPSSwitch.css';
function HeroSection() {
  return (
      <section className=" mt-[60px] lg:mt-[31px] relative">
        <div className='IMPSHeroSectionGradient'></div>
             <div className="max-w-screen-lg lg:mx-auto lg:px-[25px] xl:px-0">
<div className='flex items-center justify-between flex-col lg:flex-row gap-[32px]'>
    <div>
        <h2 className='IMPSSwitchHeroSectionHeaderGradient text-center lg:text-left text-[28px] lg:text-[55px] font-semibold leading-[39px] lg:leading-[55px]'>IMPS Switch</h2>
        <p className='w-[275px] lg:w-[405px] text-center lg:text-left text-[20px] lg:text-[30px] text-[#DFDFDF] lg:text-[#FFF] font-normal leading-[34px] lg:leading-[42px] lg:pt-[15px]'>Get real-time payments with our IMPS Switch</p>
        <Link className='mt-[50px] w-[148.6px] h-[46px] bg-[#4F31B4] rounded-[24.77px] hidden lg:flex justify-center items-center text-[18.1px] text-[#FFF] font-semibold'>Contact Us</Link>
    </div>
    <img src={IMPSHeroSectionImg1} className='hidden lg:block lg:w-[437px] lg:h-[422px]'/>
    <img src={IMPSHeroSectionImgMob} className='block lg:hidden px-[20px] sm:px-0 sm:w-[370px] md:w-[425px]'/>
      <Link className='mt-[40px] max-[360px]:w-[300px] max-[360px]:h-[50px] w-[325px] h-[55px] bg-[#4F31B4] rounded-[30px] flex justify-center items-center lg:hidden text-[22px] text-[#FFF] font-semibold'>Contact Us</Link>
</div>
             </div>
      </section>
  )
}

export default HeroSection