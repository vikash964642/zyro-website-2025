import React, { useEffect, useState } from 'react'

export default function Credit_facility() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 426)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 426)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    return (
        <div className='flex flex-col justify-center items-center bg-[#080411] py-16'>
            <div className='flex flex-col items-center xs:w-[90%] w-3/4'>
                <h2 className='text-white xs:text-[40px] text-5xl font-semibold xs:bg-custom-gradient xs:text-transparent xs:bg-clip-text'>Credit Facility</h2>
                <p className='w-3/4 xs:w-[100%] text-white xs:text-2xl text-4xl font-medium text-center my-3'>Elevate your <span className='inline-block xs:text-white bg-custom-gradient text-transparent bg-clip-text'>business growth</span>
                    {isMobile ? (
                        <div className='xs:text-base xs:font-medium'>with our reliable credit solutions</div>
                    ) : (
                        <span> with our reliable credit solutions</span>
                    )}
                </p>
                <button className='xs:bg-[transparent] bg-[#6F41D2] xs:text-[#6F41D2] text-white px-4 py-2 rounded-3xl mt-6 mb-16 border-1 border-[#6F41D2]'>Know more »</button>
            </div>

            <div className='no-scollbar flex items-center gap-4 xs:w-[90%] w-3/4 xs:px-0 px-3 pb-6 overflow-auto'>

                <div className='w-[150px] h-[200px] py-2 px-3 flex flex-col bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-[borderImage] rounded-full'>
                            <img src="./image/approval.png" width={65} alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Instant Approval</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/paperless.png" width={65} alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>100% Paperless</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/disbursal.png" width={65} alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Fast Disbursal</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/loan.png" width={65} alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Flexible Loan Tenure</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/interest.png" width={45} alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Competitive Interest Rates</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='relative w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/docs1.png" className='absolute' width={35} alt="docs1" />
                            <img src="./image/docs2.png" className='absolute top-5 left-9' width={35} alt="docs2" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Minimal Documentation</p>
                </div>

                <div className='w-[150px] h-[200px] p-2 flex flex-col justify-center bg-[#19113333] border-[0.69px] border-[#8D31F533] rounded-xl shrink-0'>
                    <div className='h-2/3 flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] mb-2 p-5 flex items-center justify-center bg-[#0B0618] border border-image-gradient rounded-full'>
                            <img src="./image/helpline.png" alt="approval" />
                        </div>
                    </div>
                    <p className='h-1/3 text-white xs:text-base text-lg leading-6 xs:font-medium font-semibold'>Customer Support</p>
                </div>

            </div>
        </div>
    )
}




