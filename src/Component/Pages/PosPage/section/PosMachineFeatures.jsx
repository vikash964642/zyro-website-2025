import PosMachineFeaturesImg1 from '../../../../../public/image/Pos/PosMachineFeaturesImg1.webp';
import PosMachineFeaturesMobImg1 from '../../../../../public/image/Pos/PosMachineFeaturesMobImg1.webp';
function PosMachineFeatures() {
  return (
<section className="max-w-screen-lg lg:mx-auto px-[20px] xl:px-[0px] mt-[100px]">
    <div className='hidden lg:block h-[550px] bg-[#0E0624] rounded-[10px]'>
        <h2 className='lg:text-[34px] font-semibold PosMachineHeaderGradient text-center pt-[50px]'>What You Get in the box?</h2>
        <div className='flex  pr-[30px]'>
            <div>
                <img src={PosMachineFeaturesImg1} className='h-[400px] w-[440px]'/>
            </div>
            <div className='flex items-center'>
                <div className='flex flex-col gap-[40px]'>
                    <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Quick Operation Guide</p>
                    </div>
                     <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Onboarding & Customer Support(In Selected Locations)</p>
                    </div>
                     <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Charger & USB  Cable</p>
                    </div>
                    
                </div>
                 <div className='flex flex-col gap-[40px] pl-[40px] pt-[86px]'>
                    <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Zyro POS Swipe Machine</p>
                    </div>
                     <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Pre-activated SIM Card with 5G Data</p>
                    </div>
                     <div className='border-[0.5px] border-[#A901A3] rounded-[20px] h-[56px] w-[250px] bg-[#080219] flex items-center px-[14px]'>
                        <p className='lg:text-[14px] font-normal text-[#FFF]'>Thermal Paper Rolls</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='block lg:hidden relative'>
        <div className='PosMachineGradientTopMob'></div>
       <h2 className='text-[28px] font-semibold text-center PosMachineHeaderGradient'>What You Get in the box?</h2>
       <div className='pt-[55px]'>
          <div className='border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Quick Operation Guide</p>
                    </div>
                      <div className='my-[20px] border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Onboarding & Customer Support(In Selected Locations)</p>
                    </div>
                      <div className='border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Charger & USB  Cable</p>
                    </div>
       </div>
           <div className='flex justify-center'>
                <img src={PosMachineFeaturesMobImg1} className='max-[360px]:h-[300px] max-[360px]:w-[275px]  h-[328px] w-[315px]'/>
            </div>
               <div className='flex flex-col items-end pt-[12px]'>
          <div className='border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Zyro POS Swipe Machine</p>
                    </div>
                      <div className='my-[20px] border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex justify-center items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Pre-activated SIM Card with 5G Data</p>
                    </div>
                      <div className='border-[0.4px] border-[#A901A3] rounded-[12px] h-[48px] w-[220px] bg-[#080219] flex  items-center px-[14px]'>
                        <p className='text-[12px] font-normal text-[#FFF]'>Thermal Paper Rolls</p>
                    </div>
       </div>
    </div>
</section>
  )
}

export default PosMachineFeatures