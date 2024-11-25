import React, { useEffect, useState } from 'react'
import collab1 from "../../../../public/image/axis_bank.png";
import collab2 from "../../../../public/image/axis_bank2.png";

export default function Connected_banking() {
    const [currImg, setCurrImg] = useState(0);

    const collaborators = [
        collab1,
        collab2
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrImg(prev => (prev + 1) % collaborators.length)
        }, 2000);

        return () => clearInterval(interval);
    }, [collaborators.length]);

    return (
        <div className='flex items-center justify-center bg-[#080411] py-10'>
            <div className='flex flex-col items-center w-3/4'>
                <h1 className='xs:text-2xl text-6xl text-[#EDEDED] text-center font-semibold'>Connected Banking</h1>
                <p className='w-[90%] text-[#9E9C9F] text-center xs:text-sm xs:leading-4 text-xl font-normal my-3'>Connected Banking simplifies your financial management by integrating your current account, payout & payments from a single dashboard. Connect your bank accounts
                    to pay vendors, receive payments & reconcile effortlessly</p>

                <button className= 'xs:bg-[transparent] bg-[#6F41D2] xs:text-[#6F41D2] text-white px-4 py-2 rounded-3xl mt-6 mb-16 border-1 border-[#6F41D2]'>Know more »</button>

                <div className='flex xs:gap-8 flex-row xs:flex-col-reverse items-center justify-between xs:w-full w-[500px] xs:h-[450px] h-40'>
                    <div className='flex items-center justify-center overflow-hidden w-40 h-full bg-white rounded-full'>
                        <img src={collaborators[currImg]} alt="random_collaborators" />
                    </div>

                    <img src="./image/partnership.png" alt="partnership" />

                    <div className='flex items-center justify-center w-40 h-full bg-white rounded-full'>
                        <img src="./image/zyro_logo.png" alt="zyro_logo" />
                    </div>
                </div>

            </div>
        </div>
    )
}

