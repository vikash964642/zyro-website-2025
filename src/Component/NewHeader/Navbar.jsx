import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../../public/image/zyro-logo.webp";
// import Button from "../Utils/Buttons";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ScrollTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handleClick = () => {
    setOpen(false);
    ScrollTop();
  };
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
            <div className="flex lg:hidden">
              
              <div
                className="text-3xl lg:hidden text-[#6F41D2]  "
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mr-8">
            <ul className="lg:flex hidden lg:text-[13px] xl:text-[17.5px] items-center  gap-5 lg:gap-[8px] font-[inter]">
            <NavLinks handleClick={handleClick} />
            <Outlet />
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "py-[28px] px-3 inline-block text-primary"
                      : "py-[28px] px-3 inline-block hover:text-primary"
                  }
                  onClick={handleClick}
                >
                  Company
                </NavLink>
              </li>
             
              
            </ul>
          </div>
          <div></div>

          {/* Mobile nav */}
          <ul
            className={`lg:hidden bg-[#434343]  fixed overflow-hidden text-[#D9D9D9] w-full text-[22px] top-[4.8rem] overflow-y-auto bottom-0 pb-11 pl-4 duration-800  ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <NavLinks handleClick={handleClick}  />
            <li className=" border-light-gray-600 pb-[13px]">
              <NavLink
                to="/"
                className="pt-[45px] pb-[3px] px-3 inline-block "
                onClick={handleClick}
              >
                 Company
              </NavLink>
            </li>
          <div className=" flex justify-center mt-[15px] bottom-[66px] fixed w-[90%] bg-white z-[99px]">
              <div className="flex justify-center">
                <Link to="https://play.google.com/store/apps/details?id=com.shopaver" className="border-primary border-2 rounded-[30px]  text-center text-primary w-[141px] text-[16px]  min-[360px]:w-[182px] h-[50px] min-[360px]:text-[20px] leading-[24px] pt-[8px]">
                  Download App
                </Link>
              </div>
          </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
