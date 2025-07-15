
// import React from "react";
import './HomePageCss.css'
function Scroller() {
  const logos = [
    "../../../../../public/image/HomePage/icon/canara-icon.jpg",
    "../../../../../public/image/HomePage/icon/icici.jpg",
    "../../../../../public/image/HomePage/icon/idfc-icon.jpg",
    "../../../../../public/image/HomePage/icon/npci.jpg",
    "../../../../../public/image/HomePage/icon/pine-labs.jpg",
    "../../../../../public/image/HomePage/icon/yes-bank-icon.jpg",
    "../../../../../public/image/HomePage/icon/rbl-icon.jpg"
    
  ];

  return (
    <section className="max-w-screen-lg mx-auto scroller-section mt-[131px]">
      <h1>Our Partners</h1>
      <div className="slider">
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller_gradient_left"></div>
        <div className="scroller_gradient_right"></div>
      </div>
       
    </section>
  );
}

export default Scroller;
