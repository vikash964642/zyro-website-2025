
import RealTimeBeneficiaryImg from '/image/IMPSSwitch/RealTimeBeneficiaryImg.webp';
import RealTimeBeneficiaryImgMob from '/image/IMPSSwitch/RealTimeBeneficiaryImgMob.svg';
function RealTimeBeneficiary() {
  return (
      <section className=" mt-[160px] lg:mt-[240px] px-[20px] xl:px-0 relative">
         <div className="max-w-screen-lg lg:mx-auto relative">
             
            
    <p className='RealTimeBeneficiaryHeaderGradient text-[24px] sm:text-[34px] lg:text-[38px] font-semibold lg:leading-[55px] text-center'>
Real-Time Beneficiary Name Validation
    </p>

      <p className=' text-[16px] font-normal leading-[26px] text-center text-[#9E9C9F] pt-[10px]'>
   Build trust & ensure payment accuracy with instant confirmation
    </p>


            <div className='mt-[33px] lg:mt-[30px] flex justify-center'>
                <img src={RealTimeBeneficiaryImg} alt="multilanguage"   className='hidden md:block lg:w-[960px]'/>
                <img src={RealTimeBeneficiaryImgMob} alt="multilanguage"   className='sm:w-full md:hidden'/>
            </div>
       
         </div>
         </section>
  )
}

export default RealTimeBeneficiary