// import React from "react";
function Scroller() {
  const logos = [
    "../../../../../public/image/HomePage/icon/canara-icon.jpg",
    "../../../../../public/image/HomePage/icon/icici.jpg",
    "../../../../../public/image/HomePage/icon/idfc-icon.jpg",
    "../../../../../public/image/HomePage/icon/npci.jpg",
    // "../../../../../public/image/HomePage/icon/pine-labs.jpg",
    "../../../../../public/image/HomePage/icon/yes-bank-icon.jpg",
    "../../../../../public/image/HomePage/icon/rbl-icon.jpg",
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
