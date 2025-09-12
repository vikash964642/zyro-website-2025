import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './ThankYou.css';
import ThankYouPageBGImg1 from '/image/ThankYouPageBGImg1.webp';
import ThankYouPageBGImg2 from '/image/ThankYouPageBGImg2.webp';
import ThankYouPageBGImg3 from '/image/ThankYouPageBGImg3.webp';
import ThankYouPageBGImg4 from '/image/ThankYouPageBGImg4.webp';
import ThankYouPageBGImg5 from '/image/ThankYouPageBGImg5.webp';
function ThankYou() {
     const navigate = useNavigate();
      useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    
    <div className='h-[90vh] bg-[#0B051E] relative'>
        <div className='ThankYouGradient1'></div>
        <img src={ThankYouPageBGImg1} className='h-[57px] w-[59.6px] lg:h-[137px] lg:w-[143px] absolute top-[120px] right-[15%] lg:top-[20%] lg:right-[12%]'/>
         <img src={ThankYouPageBGImg2} className='w-[74.5px] h-[25.5px] lg:w-[129.81px] lg:h-[43.86px] absolute left-[32px] top-[30%] lg:top-[25%] lg:left-[26%]'/>
        <img src={ThankYouPageBGImg3} className='w-[54.5px] h-[41px] lg:w-[103.7px] lg:h-[78px] absolute left-[48px] bottom-[18%] lg:bottom-[12%] lg:left-[10%]'/>
        <img src={ThankYouPageBGImg4} className='w-[70px h-[260px] lg:w-[134px] lg:h-[550px] absolute left-0 top-0'/>
              <img src={ThankYouPageBGImg5} className='h-[205px] w-[120px] lg:w-[190px] lg:h-[378px] absolute right-0 bottom-0'/>
       <div className='flex justify-center items-center flex-col h-full px-[15px] sm:px-0'>
        <h2 className='ThankYouHeaderGradient text-[#FFF] text-[41.8px] sm:text-[48px] lg:text-[64px] font-semibold'>Thank You</h2>

          <p className='lg:w-[549px]  text-[#A9A9A9] text-[15.65px] sm:text-[18px] lg:text-[24px] font-medium pt-[4.5px] lg:pt-[7.5px] text-center lg:leading-[38px]'>Your request has been successfully submitted.</p>
           <p className='lg:w-[549px]  text-[#A9A9A9] text-[15.65px] sm:text-[18px] lg:text-[24px] font-medium  text-center lg:leading-[38px]'>We will contact you soon.</p>
          <Link to='/' className='bg-[#4F31B4] flex justify-center items-center max-[360px]:w-full w-[325px] lg:w-[290px] h-[55px] rounded-[30px] lg:rounded-[24.77px] text-[#FFF] text-[22px] lg:text-[20px] font-semibold mt-[28px] lg:mt-[43px] relative z-30'>Back to Home</Link>
        </div> 

    </div>
  )
}

export default ThankYou