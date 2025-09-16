
import { useNavigate } from "react-router-dom";
import arrowRight from '/image/ConnectedBanking/arrowRight.svg';
import BusinessBankingMob from '/image/ConnectedBanking/BusinessBankingMob.svg';
function BusinessBanking() {
    const navigate = useNavigate();
  //  const ScrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
     const handleLinkClick = (pageName) => {
        // ScrollTop();
    navigate("/contact-us", { state: { pageName } }); 
  
  };
  return (
  <section className="max-w-screen-lg lg:mx-auto mt-[140px] lg:mt-[200px]">
    <div className='bg-[#0E0624] rounded-[20px] px-[22px] lg:pl-[70px] lg:pr-[90px] lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] mx-[11px] lg:mx-0 overflow-hidden relative'>
       <div className='businessBankingGradient1  z-10'></div>
      <div className='relative mt-[55px] lg:mt-[0px] lg:w-[60%] flex flex-col justify-center items-center lg:items-start'>
          <div>
            <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90'>Ready to Simplify Your Business Banking</h2>
            <p className='max-[360px]:text-[12px] text-[14px] lg:text-[16px] font-normal text-center lg:text-left text-white70 pt-[10px]'>Experience faster payments, real-time insights, and seamless financial management with Zyro Connected Banking.</p>
        </div>

           <button onClick={() => handleLinkClick("Connected Banking")} className='relative  mt-[40px] cursor-pointer z-20'>
            <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                <p className='text-[16px] font-semibold text-[#FFF]'>Get Started</p>
            </div>
            <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                <img src={arrowRight}/>
            </div>
        </button>

      </div>
<div className='flex items-end justify-center lg:justify-start lg:w-[40%] relative'>
     <img src={BusinessBankingMob} className="relative z-30"/>

        <div className=' businessBankingGradient2'></div>
 
</div>
    </div>
  </section>
  )
}

export default BusinessBanking