// import React from "react";
import canara from '../../../../../public/image/HomePage/Icon/canaraIcon.jpg'
import icici from '../../../../../public/image/HomePage/Icon/icici.jpg'
import idfcIcon from '../../../../../public/image/HomePage/Icon/idfcIcon.jpg'
import npci from '../../../../../public/image/HomePage/Icon/npci.jpg'
import pinelabs from '../../../../../public/image/HomePage/Icon/pinelabs.jpg'
import yesIcon from '../../../../../public/image/HomePage/Icon/yesIcon.jpg'
import rblicon from '../../../../../public/image/HomePage/Icon/rblicon.jpg'
function Scroller() {
  const logos = [
    canara,
    icici,
    idfcIcon,
    pinelabs,
    npci,
    rblicon,
    yesIcon,
   
  ];

  return (
    <section className="max-w-screen-lg mx-auto scroller-section mt-[130px]">
      <h3 className="text-[23px] font-normal pb-[32px]">Our Trusted Partners</h3>
      <div className="slider relative">
        <div className="scroller-left-gradient"></div>
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller-right-gradient"></div>
      </div>
    </section>
  );
}

export default Scroller;
