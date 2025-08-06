import PosFeatureImg1 from '../../../../../public/image/Pos/PosFeatureImg1.webp';
import PosFeatureImg2 from '../../../../../public/image/Pos/PosFeatureImg2.webp';
import PosFeatureImg3 from '../../../../../public/image/Pos/PosFeatureImg3.webp';
import PosFeatureImg4 from '../../../../../public/image/Pos/PosFeatureImg4.webp';
import PosFeatureImg5 from '../../../../../public/image/Pos/PosFeatureImg5.webp';
import './Pos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
const CardData=[
    {
        image:PosFeatureImg1,
        heading:"Multiple Payment Methods",
        paragraph:"Accept payments via UPI, Cards, EMI, Payment Link and Wallets"
    },
       {
        image:PosFeatureImg2,
        heading:"Long-Lasting Battery",
        paragraph:"Full-day usage without charging interruptions"
    },
       {
        image:PosFeatureImg3,
        heading:"High-Speed Connectivity",
        paragraph:"Full-day usage without charging interruptions"
    },
       {
        image:PosFeatureImg4,
        heading:"Built-in-Printer",
        paragraph:"Instant & Clear receipts with built-in-high-speed thermal printer."
    },
       {
        image:PosFeatureImg5,
        heading:"Real-Time Payment Alerts",
        paragraph:"On-Screen notifications for every successful transaction."
    },
]
function PosFeatures() {
  return (
    <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[80px] mt-[110px]">
     <h2 className='text-center lg:text-[34px] text-[24px] leading-[32px] lg:leading-[48px] font-semibold PaymentHeaderGradient'>Advanced POS Features that Simplify all Payments</h2> 
      <div className='h-[580px] overflow-hidden md:h-[445px] max-[360px]:px-[15px] max-[400px]:px-[25px] px-[40px] md:px-0 mt-[45px] md:mt-[40px]  border-[0.5px] border-[#45465E] rounded-[23px] '>
        <div className='PosFeatureGradientTop'></div>
 <Swiper
       className='h-full'
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        {CardData.map((card, index) => (
          <SwiperSlide key={index}>
           

              <div className='flex flex-col md:flex-row h-full'>
                <div className='md:w-[50%] relative h-[40%] md:h-full pt-[45px] md:pt-0 md:pl-[30px] lg:pl-[57px] flex flex-col md:justify-center  items-center md:items-start'>
                <h3 className='max-[360px]:text-[28px] max-[400px]:text-[31px] text-[32.895px] lg:text-[36px] font-semibold text-[#FFF] text-center md:text-left'>{card.heading}</h3>
                <div className='hidden md:block w-[1px] h-[117px] PaymentBorderLineGradient mt-[18px]'></div>
                <p className='max-[360px]:text-[14px] max-[400px]:text-[15.5px] text-[16.44px] lg:text-[18px] font-normal text-[#C7C9D1] pt-[15px] text-center md:text-left'>{card.paragraph}</p>
                 <div className='PosFeatureGradientBottom1'></div>
                </div>
                <div className='relative md:w-[50%] h-[60%] md:h-full flex flex-col justify-center items-center'>
                  <img src={card.image} className='max-[360px]:w-[258px] max-[360px]:h-[230px] w-[298px] h-[258px]'/>
<div className='PosFeatureGradientBottom2'></div>
                </div>
              </div>
    
          </SwiperSlide>
        ))}
            </Swiper>
      </div>
    </section>    
  )
}

export default PosFeatures