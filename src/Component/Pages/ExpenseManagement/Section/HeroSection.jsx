// import React from 'react'
import ExpenseHero from '/image/ExpenseManagement/ExpenseHero.webp';
import './Expense.css';

function HeroSection() {
  return (
    <section className='lg:mt-[134px] mt-[50px]'>
      <div className='max-w-screen-lg mx-auto relative '>
        <div className=' hero-left-gradiant'></div>
              <div className='lg:flex justify-between items-center'>
                  <div className='lg:w-[50%] px-7 lg:p-3'>
<div className='flex justify-center lg:justify-start'>
                        <h2 className="bg-gradientText bg-clip-text text-transparent sm:w-[530px] lg:w-full font-semibold  text-[26px] sm:text-[33px] lg:text-[36px] leading-[39px] lg:leading-[46px] text-center lg:text-left">Track, Manage & Control Business Expenses with Ease</h2>
</div>
                     <div className='flex justify-center lg:justify-start  mt-[11px] mb-[58px] lg:mb-[47px]'>
                       <p className="sm:w-[550px] lg:w-full text-heroDesc px-5 sm:px-0 text-[16px] lg:text-[20px] font-normal leading-[30px]   text-center lg:text-left lg:pr-[40px]">Simplify expense tracking, card & finance management, reimbursements, and policy compliance, all in one smart solution built for growing businesses</p>
                     </div>
                      <div className='text-center lg:text-left mt-[39px] hidden lg:block'>
                            <button className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center">Get Started</button>
      
                      </div>
                  </div>
                  <div className='flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] '>
                      <img src={ExpenseHero} alt="" className='sm:w-[484px] sm:h-[331px] lg:w-auto lg:h-auto'/>
                  </div>
                   <div className='text-center lg:text-left mt-[39px] lg:hidden '>
                            <button className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center">Get Started</button>
      
                      </div>
              </div>
               <div className='hero-right-gradiant hidden lg:block'></div>
               </div>
          </section>
  )
}

export default HeroSection