import React from 'react'

export default function QrSoundBox() {
    return (
        <div className='flex items-center justify-center bg-[#080411] custom-md:pt-10 pt-32 pb-10'>
            <div className='flex custom-md:flex-col flex-row items-center justify-between custom-md:w-[90%] w-3/4 border border-white'>
                <div className='custom-md:w-full w-1/2 custom-md:text-center border border-white'>
                    <p className='text-white custom-md:text-xl text-[32px] custom-md:leading-6 leading-[38px] font-medium'>The smart way to track instant payments with our</p>
                    <h2 className='inline-block my-3 custom-md:text-[32px] text-[40px] custom-md:leading-10 leading-[48px] custom-md:font-semibold font-extrabold bg-custom-gradient text-transparent bg-clip-text'>Dynamic, Static & Pocket QR Sound Box</h2>
                    <button className='custom-md:bg-transparent bg-[#6F41D2] custom-md:text-[#6F41D2] text-white px-4 py-2 rounded-3xl mt-6 border-1 border-[#6F41D2]'>Know more »</button>
                </div>
                
                {/* <img src="./image/sound_box_image.png"
                className='absolute right-[-22rem] border border-red-500' 
                // className='w-1/2 border border-red-500'
                alt="sound_box_image" /> */}

                <div className='relative custom-md:w-full w-1/2 custom-md:h-72 border border-white flex custom-md:items-end items-center custom-md:justify-center justify-end'>
                    <img src="./image/sound_box.png" className='custom-md:w-[150px]' alt="sound_box" />
                    <img src="./image/remote.png" className='custom-md:w-[5.5rem]' alt="remote" />
                    <img src="./image/streaks.png" className='absolute custom-md:top-20 -top-24 custom-md:-right-1 -right-5 custom-md:w-8' alt="streaks" />
                </div>
                    
            </div>
        </div>
    )
}


