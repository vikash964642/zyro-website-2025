

import ConnecteBankingImg from '../../../../../public/image/ConnectedBanking/connectedHome.svg';


function HeroSection() {

  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <div className='max-w-screen-lg mx-auto   relative'>
      <div className="home-hero_gradient"></div>

  
        <div className="flex flex-col-reverse lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="lg:w-[55%] w-full lg:px-6">
            <h1 className='hidden lg:block'>
       <span className='ConnectedHeroHeaderGradient lg:text-[42px] lg:font-semibold'>Connected Banking</span><span className='lg:text-[34px] lg:font-semibold text-[#EDEDED]'> made simple with Zyro</span>
               
            </h1>

          <div className='flex justify-center lg:justify-start'>
              <p className="text-[#9E9C9F] text-[14px] md:text-[14.5px] lg:text-[20px] sm:w-[80%] lg:w-[100%] md:mt-[18px] mt-[30px] text-center lg:text-left">
            Connect and manage all your business accounts in one place with Zyro Connected Banking. Simplify vendor payments, access real-time insights, enable smooth integration and automate reconciliation. Stay on top of your cash flow without logging into multiple portals.
            </p>
          </div>

            <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[50px] lg:mt-[35px] flex-col lg:flex-row">
              <button className="bg-[#4F31B4] rounded-[24px] h-[44px] max-[375px]:w-[100%] w-[325px] lg:w-[148px] text-[#FFF] text-[18px] font-semibold">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="pt-[45px] lg:pt-0 lg:w-[45%] w-full flex justify-center items-center">
            <img src={ConnecteBankingImg} alt="Hero" className='lg:h-[412px] lg:w-[431px]' />
          </div>

          {/* Mobile Heading */}
          {/* <h1 className="md:text-[27px] xl:text-[42px] lg:hidden text-white text-[22px] text-center font-medium lg:leading-[37px] xl:leading-[55px] leading-[24px] lg:mt-[10px] max-[400px]:text-[18px]">
            {slide.heading.split(" ").map((word, idx) =>
              ["Connected", "Banking", "Solutions"].includes(word) ? (
                <span
                  key={idx}
                  className="max-[360px]:text-[28px] bg-gradientText bg-clip-text text-transparent font-semibold text-[32px] leading-[38px]"
                >
                  {word + " "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1> */}
          <div className='block lg:hidden'> 
          <h1 className=' max-[360px]:text-[28px] font-semibold text-[32px] leading-[38px] bg-gradientText bg-clip-text text-transparent text-center'>Connected Banking </h1>
          <p className='max-[360px]:text-[20px] font-medium text-[22px] text-white90 leading-[24px] text-center pt-[10px]'>made simple with Zyro</p>
          </div>
         
        </div>
</div>
    </section>
  );
}

export default HeroSection;
