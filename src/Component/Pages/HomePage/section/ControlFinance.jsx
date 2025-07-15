
import takeControllgradiant from '../../../../../public/image/shades/take_control_gradiant.png';
function ControlFinance() {
  return (
     <section className="max-w-screen-lg lg:mx-auto mx-4 mt-[120px] relative">
<div className="text-center ">
  <p className="max-[375px]:text-[24px] text-[28px] lg:text-[45px] text-white90 font-medium">Take control of your Finance now</p>  
  <p className="max-[375px]:text-[14px] text-[18px] lg:text-[29px] text-white70 font-normal pt-[19px]">Accelerate your business with ZYRO</p>
  <button className="h-[45px] w-[140px] bg-[#4F31B4] rounded-[44px] shadow-ControlFinance-custom-shadow text-[#FFF] text-[16px] font-medium mt-[45px]">Get Started</button>
</div>
<div className='absolute bottom-[-164px] right-[101px] z-[-1]'>
  <img src={takeControllgradiant} alt="" />
</div>
  <div className="ControlFinance_gradient"></div>
        </section>
  )
}

export default ControlFinance