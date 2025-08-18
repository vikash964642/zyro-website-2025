// import React from 'react'
import roadMap from '/image/AboutUs/roadMap.webp';
import roadMapMob from '/image/AboutUs/roadMapMob.webp';

function WhoWeAre() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
  <div className="max-w-screen-lg mx-auto relative">
    <div>
      <h2 className="whoWeHeader lg:text-[34px] text-[24px] leading-[32px] font-semibold lg:leading-[46px] text-center">
    Who We Are
      </h2>
      <p className="text-[15.5px] leading-[28px] font-normal text-center text-[#A9A9A9] lg:px-[100px] px-[38px]">
        We are a team of technologists, finance experts, and problem-solvers
        on a mission to transform the way businesses bank. With Zyro, you
        get modern, real-time financial tools built to move as fast as your
        business.
      </p>
    </div>
    <div className='bgGradiant'></div>
    <div className='flex justify-center items-center pt-[89px] px-[20px]'>
        <img src={roadMap} alt=""  className='hidden lg:block'/>
        <img src={roadMapMob} alt="" className='block lg:hidden'/>
    </div>
  </div>
</section>

  );
}

export default WhoWeAre;
