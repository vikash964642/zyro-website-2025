import React from 'react'

export default function Features() {
    return (
        <div className='flex justify-center items-center bg-[#080411] py-16'>
            <div className='xs:w-[90%] w-3/4 grid xs:grid-cols-1 grid-cols-2 xs:grid-rows-[auto,auto] grid-rows-2 gap-4'>
                <div className='py-4 px-5 bg-[#19113380] border border-[#8D31F533] rounded-3xl'>
                    <h3 className='text-white xs:text-xl text-2xl font-semibold'>Current Account</h3>
                    <p className='text-[#FFFFFFB2] xs:text-sm text-base leading-5 font-normal py-2'>Easily open your current account online with ZYRO business banking.</p>
                    <button className='px-3 py-[6px] mt-4 mb-2 xs:float-end bg-[#6F41D2] text-white xs:[13px] text-sm xs:font-semibold font-bold rounded-3xl'>Know more</button>
                </div>

                <div className='py-4 px-5 bg-[#19113380] border border-[#8D31F533] rounded-3xl'>
                    <h3 className='text-white xs:text-xl text-2xl font-semibold'>Payout</h3>
                    <p className='text-[#FFFFFFB2] xs:text-sm text-base leading-5 font-normal py-2'>Quickly disburse payments using NEFT, RTGS, IMPS  & UPI for hassle-free transactions.</p>
                    <button className='px-3 py-[6px] mt-4 mb-2 xs:float-end bg-[#6F41D2] text-white xs:[13px] text-sm xs:font-semibold font-bold rounded-3xl'>Know more</button>
                </div>

                <div className='py-4 px-5 bg-[#19113380] border border-[#8D31F533] rounded-3xl'>
                    <h3 className='text-white xs:text-xl text-2xl font-semibold'>Smart Collect</h3>
                    <p className='text-[#FFFFFFB2] xs:text-sm text-base leading-5 font-normal py-2'>Automate your cash flow management with ZYRO smart collect.</p>
                    <button className='px-3 py-[6px] mt-4 mb-2 xs:float-end bg-[#6F41D2] text-white xs:[13px] text-sm xs:font-semibold font-bold rounded-3xl'>Know more</button>
                </div>

                <div className='py-4 px-5 bg-[#19113380] border border-[#8D31F533] rounded-3xl'>
                    <h3 className='text-white xs:text-xl text-2xl font-semibold'>Payment</h3>
                    <p className='text-[#FFFFFFB2] xs:text-sm text-base leading-5 font-normal py-2'>Accelerate your Business with our advanced Payment Solutions.</p>
                    <button className='px-3 py-[6px] mt-4 mb-2 xs:float-end bg-[#6F41D2] text-white xs:[13px] text-sm xs:font-semibold font-bold rounded-3xl'>Know more</button>
                </div>
            </div>
        </div>
    )
}




