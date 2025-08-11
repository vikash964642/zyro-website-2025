
import './HomePageCss.css';
function NewsletterBox() {
  return (
 <section className="max-w-screen-lg mx-auto px-[20px] xl:px-0 mt-[120px]">
    <div className='lg:h-[540px] lg:rounded-[59px] rounded-[19px] bg-newletterBG  border-[0.928px] border-newletterboxBorder  border-solid'>
       <div className='flex justify-center items-center h-[100%] m-[10px] lg:m-0 py-[35px] lg:py-0 relative'>
        <div >
            <p className='max-[375px]:text-[21px] max-[400px]:text-[23px] text-[27px] lg:text-[40px] lg:font-medium lg:leading-[76px] leading-[32px] text-white90 text-center '>Newsletter</p>
            <p className='max-[375px]:text-[20px] max-[400px]:text-[22px] text-[26px] lg:text-[40px] font-medium lg:leading-[76px] leading-[32px] text-white90 text-center '>Join our readers community</p>
            <p className='max-[375px]:text-[14px] max-[400px]:text-[15px] text-[16px] lg:text-[20px] pt-[10px] lg:pt-0 font-normal lg:leading-[30px] text-white70 text-center'>Subscribe to receive the latest news and updates</p>
            <div className='flex justify-center lg:gap-[15px] lg:items-center lg:flex-row flex-col mt-[40px]'>
                <input placeholder='Email' className='lg:w-[398px] w-[100%] lg:h-[55px] h-[46px] px-[30px] border-[1px] border-solid border-bordercolor1 bg-backgroundColor1 rounded-[30px] text-white text-[15px] font-normal focus:outline-none'/>
                <button className='h-[46px] lg:h-[55px] lg:w-[125px] w-[100%] rounded-[30px] mt-[25px] lg:mt-0 Newaletter-subscribe-btn'>Subscribe</button>
            </div>
            <div className='flex items-center lg:justify-center lg:gap-[30px] gap-[5px] lg:flex-row flex-col mt-[30px] lg:mt-[50px]'>
                <p className='text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]'>No Promotion</p>
                <p className='text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]'>No Spam</p>
                <p className='text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]'>Only Finance</p>
            </div>
        </div>
        <div className='Newsletter-gradient'></div>
        </div> 
    </div>
 </section>
  )
}

export default NewsletterBox