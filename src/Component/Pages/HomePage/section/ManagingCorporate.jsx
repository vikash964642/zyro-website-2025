// import React from 'react'
import ManageingCorporate from '../../../../../public/image/HomePage/managing-corporate.png';
import './HomePageCss.css'

function ManagingCorporate() {
  return (
     <section className="max-w-screen-lg mx-4 lg:mx-auto mt-[120px]">
          
            <div className='lg:flex justify-between items-center relative'>
                <div className='lg:w-[50%]'>
                    <h2 className="bg-gradientText bg-clip-text text-transparent font-normal lg:font-semibold  max-[400px]:text-[26px] text-[28px] lg:text-[38px] leading-[44px] lg:leading-[55px] text-center lg:text-left">Managing Corporate Card and Expense Made Easy with Zyro</h2>
                    <p className="text-white text-[14px] lg:text-[20.83px] font-normal leading-[20px] lg:leading-[36.6px] mt-[18px] align-middle text-center lg:text-left ">Say goodbye to spreadsheets, delays, reimbursements, and manual entries. Zyro makes it simple to track and manage your corporate card spending and expense automatically, accurately, and in real time.</p>
                    <div className='text-center lg:text-left mt-[39px]'>
                          <button className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center">Know more &gt;&gt;</button>
       
                    </div>
                </div>
                <div className='lg:w-[50%] flex justify-center mt-[80px] lg:mt-0'>
                        <div className="ManagingCorporate-gradient"></div>
                    <img src={ManageingCorporate} alt="" />
                  
                </div>
            </div>
       
        </section>
  )
}

export default ManagingCorporate