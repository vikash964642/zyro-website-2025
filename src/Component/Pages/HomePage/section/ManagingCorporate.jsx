// import React from 'react'
import ManageingCorporate from '../../../../../public/image/HomePage/managing-corporate.png';


function ManagingCorporate() {
  return (
     <section className="max-w-screen-lg mx-auto mt-[120px]">
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-[50%] p-3'>
                    <h2 className="bg-gradientText bg-clip-text text-transparent lg:font-normal font-semibold text-[28px] lg:text-[20px] leading-[44px] lg:leading-[36.3px] text-center lg:text-left">Managing Corporate Card and Expense Made Easy with Zyro</h2>
                    <p className="text-white text-[14px] lg:text-[20.83px] font-normal leading-[20px] lg:leading-[36.6px] mt-[18px] align-middle text-center lg:text-left px-[40px] lg:px-[0px] ">Say goodbye to spreadsheets, delays, reimbursements, and manual entries. Zyro makes it simple to track and manage your corporate card spending and expense automatically, accurately, and in real time.</p>
                    <div className='text-center lg:text-left mt-[39px]'>
                          <button className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center">Know more &gt;&gt;</button>
    
                    </div>
                </div>
                <div className='lg:w-[50%] pl-[85px]'>
                    <img src={ManageingCorporate} alt="" />
                </div>
            </div>
        </section>
  )
}

export default ManagingCorporate