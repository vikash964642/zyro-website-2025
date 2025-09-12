import './PageNotFound.css';
import ThankYouImg from '/image/ThankYouImg.webp';
import ThankYouPageBGImg1 from '/image/ThankYouPageBGImg1.webp';
import ThankYouPageBGImg2 from '/image/ThankYouPageBGImg2.webp';
import ThankYouPageBGImg3 from '/image/ThankYouPageBGImg3.webp';
import ThankYouPageBGImg4 from '/image/ThankYouPageBGImg4.webp';
import ThankYouPageBGImg5 from '/image/ThankYouPageBGImg5.webp';
function PageNotFound() {
  return (
    
    <div className='h-[90vh] bg-[#0B051E] relative'>
        <div className='PageNotFoundGradient1'></div>
         <img src={ThankYouPageBGImg1} className='h-[57px] w-[59.6px] lg:h-[137px] lg:w-[143px] absolute top-[120px] right-[15%] lg:top-[20%] lg:right-[12%]'/>
                 <img src={ThankYouPageBGImg2} className='w-[74.5px] h-[25.5px] lg:w-[129.81px] lg:h-[43.86px] absolute left-[32px] top-[30%] lg:top-[25%] lg:left-[26%]'/>
                <img src={ThankYouPageBGImg3} className='w-[54.5px] h-[41px] lg:w-[103.7px] lg:h-[78px] absolute left-[48px] bottom-[18%] lg:bottom-[12%] lg:left-[10%]'/>
                <img src={ThankYouPageBGImg4} className='w-[70px h-[260px] lg:w-[134px] lg:h-[550px] absolute left-0 top-0'/>
                      <img src={ThankYouPageBGImg5} className='h-[205px] w-[120px] lg:w-[190px] lg:h-[378px] absolute right-0 bottom-0'/>
       <div className='flex justify-center items-center flex-col h-full px-[15px] sm:px-0'>
        <img src={ThankYouImg} className='w-[222px] h-[140px] sm:w-[352px] sm:h-[222px]'/>
        <p className='text-[#FFF] text-[37.5px] sm:text-[48px] lg:text-[59.38px] font-semibold pt-[22px] lg:pt-[35px]'>404</p>
         <p className='PageNotFoundTextGradient text-[20.25px] sm:text-[26px] lg:text-[32px] font-semibold pt-[9.5px] lg:pt-[14.5px] text-center'>Oops! Page not found</p>
          <p className='text-[#A9A9A9] text-[13.5px] sm:text-[17px] lg:text-[21.37px] font-medium pt-[4.5px] lg:pt-[7.5px] text-center'>Sorry, the page you are looking for does not exist</p>
        </div> 

    </div>
  )
}

export default PageNotFound