import {useNavigate } from "react-router-dom";
// import { useState } from "react";
import Logo from "/image/zyro-logo.svg";
// import NavLinks from "./NavLinks";
// import { Link } from "react-router-dom";
function Header() {
    //   const [open, setOpen] = useState(false);

  const ScrollTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

//   const handleClick = () => {
//     setOpen(false);
//     ScrollTop();
//   };
    const navigate=useNavigate();
  const handleClickHome=()=>{
    navigate('/')
    ScrollTop();

  }
  return (

      <>
        <nav className="lg:bg-white bg-[#D9D9D9]   sticky top-0 z-50">
          <div className="flex items-center font-medium justify-between lg:border-b pb-2 lg:pb-0 ">
            <div className="flex justify-between z-50 pt-8 lg:w-auto w-full ml-9 lg:ml-[45px] lg:pt-0 ">
              <img src={Logo} alt="logo" className="lg:cursor-pointer h-9 custom-style" onClick={handleClickHome}/>
              <div>
                <ul className="flex gap-[25px]">
                    <li>Product</li>
                    <li>Banking +</li>
                    <li>Company</li>
                    <li>Resources</li>
                </ul>
              </div>
              </div>
              </div>
              </nav>
  </>
  )
}

export default Header