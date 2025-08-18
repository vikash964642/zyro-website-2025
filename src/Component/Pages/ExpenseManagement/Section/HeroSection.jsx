// import React from 'react'
import ExpenseHero from '/image/ExpenseManagement/ExpenseHero.webp';
import './Expense.css';

function HeroSection() {
  return (
    <section className='min-h-[90vh] flex items-center'>
      <div className='max-w-screen-lg mx-auto relative mt-[80px] lg:mt-0'>
        <div className=' hero-left-gradiant'></div>
              <div className='lg:flex justify-between items-center'>
                  <div className='lg:w-[50%] px-7 lg:p-3'>
                      <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold  text-[26px] lg:text-[36px] leading-[39px] lg:leading-[46px] text-center lg:text-left">Track, Manage & Control Business Expenses with Ease</h2>
                      <p className=" text-heroDesc px-5 lg:px-0 text-[16px] lg:text-[20px] font-normal leading-[30px] mt-[11px] mb-[58px] lg:mb-[47px]  align-middle text-center lg:text-left lg:pr-[40px]">Simplify expense tracking, card & finance management, reimbursements, and policy compliance, all in one smart solution built for growing businesses</p>
                      <div className='text-center lg:text-left mt-[39px] hidden lg:block'>
                            <button className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center">Get Started</button>
      
                      </div>
                  </div>
                  <div className='flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] '>
                      <img src={ExpenseHero} alt="" />
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