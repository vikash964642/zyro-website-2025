// import React from "react";
import yesBank from "/image/HomePage/Icon/yesIcon.jpg";
function Scroller() {
  const logos = [
    "/image/HomePage/Icon/canara-icon.jpg",
    "/image/HomePage/Icon/icici.jpg",
    "/image/HomePage/Icon/idfc-icon.jpg",
    "/image/HomePage/Icon/npci.jpg",
    "/image/HomePage/Icon/pine-labs.jpg",
    yesBank,
    "/image/HomePage/Icon/rbl-icon.jpg",
  ];

  return (
    <section className="max-w-screen-lg mx-auto scroller-section mt-[131px]">
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
