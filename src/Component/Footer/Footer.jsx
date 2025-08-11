import { Link, NavLink } from "react-router-dom";
import Facebook from "../../../public/image/FooterImage/Facebook.svg";
import Instagram from "../../../public/image/FooterImage/Instagram.svg";
import Youtube from "../../../public/image/FooterImage/Youtube.svg";
import XTwitter from "../../../public/image/FooterImage/XTwitter.svg";
import linkedIn from "../../../public/image/FooterImage/LinkedIn.svg";
import zyrologo from "../../../public/image/zyro-logo.svg";
// import { useNavigate } from 'react-router-dom';
import GooglePlay from "../../../public/image/FooterImage/playstore.svg";
import certificatezyro from "../../../public/image/FooterImage/certificatezyro.png";

function Footer() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
   <div className="border-white20 border-solid border-t-[1px]  lg:mt-[120px] mt-[80px]"></div>
      <div className="bg-secondary p-[20px] min-[450px]:px-[50px] lg:p-[50px] pt-[30px]">
         
        <div className="flex lg:justify-between    flex-col lg:flex-row  ">
          <div className=" lg:w-[30%]">
            <img src={zyrologo}></img>
            <p className="text-white70 pt-[30px] text-[14px] lg:text-[15px]">
              ZYRO is designed to empower businesses by providing a
              next-generation banking platform that streamlines financial
              process, enhances operational efficiency and ensures precise
              control over your finances.
            </p>
            <img
              src={GooglePlay}
              className="hidden lg:block mt-[30px] cursor-pointer"
            ></img>
          </div>

          <div className="hidden lg:flex lg:justify-around   lg:w-[40%]">
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/connectedbanking" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link to="/posPage" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link to="/ExpenseManagement" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link to="/prepaidPage" onClick={ScrollTop}>
                    Prepaid Card
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Gift Cards API
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                   Billing & Accounting
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                   UPI Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/connectedbanking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                <li>
                  <Link to="/payout" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li>
                <li>
                  <Link to="">Bank Account Verification</Link>
                </li>
                <li>
                  <Link to="">Escrow Account</Link>
                </li>
                <li>
                  <Link to="">Zyro Capital</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around  lg:w-[30%] ">
            <div className="lg:ml-[12px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Company
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/" onClick={ScrollTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs" onClick={ScrollTop}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="">Cookies Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[25px] flex justify-between gap-0 min-[425px]:justify-center min-[425px]:gap-[80px] lg:hidden ">
          <div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/soundboxPage" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link to="/posPage" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link to="/ExpenseManagement" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link to="/prepaidPage" onClick={ScrollTop}>
                   Prepaid Card
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                   Gift Cards API
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                   Billing & Accounting
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                  UPI Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-[30px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Company
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/" onClick={ScrollTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs" onClick={ScrollTop}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/connectedbanking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                <li>
                  <Link to="/payout" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li>
                <li>
                  <Link to="">Bank Account Verification</Link>
                </li>
                <li>
                  <Link to="">Escrow Account</Link>
                </li>
                <li>
                  <Link to="">Zyro Capital</Link>
                </li>
              </ul>
            </div>
            <div className="pt-[80px] min-[768px]:pt-[100px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="">Cookies Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden pt-[40px]">
          <img src={certificatezyro} className="rounded-[7.83px]"></img>
        </div>
    <div className="flex min-[425px]:justify-center lg:hidden mt-[25px]">
          <div className="">
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Support:
            </p>
            <a
              href="tel:9560050703"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              +919560050703
            </a>
          </div>
          <div className="flex items-center gap-[40px] pt-[8px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Email:
            </p>
            <a
              href="mailto:support@myzyro.com"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              support@myzyro.com
            </a>
          </div>

          <div className="flex gap-[20px] pt-[5px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Address:
            </p>
            <p
              href="tel:9560050703"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              H-143, Ground Floor, Sector 63 Noida, Uttar Pradesh 201301
            </p>
 



 


  {/* <div className="[writing-mode:vertical-lr] rotate-180 text-purple-400 text-xl font-bold">
    Bottom to Top
  </div> */}



          </div>
        </div>
    </div>
        <div className="mt-[30px] flex lg:hidden items-center justify-center max-[375px]:flex-col max-[375px]:gap-[20px] gap-[50px]">
          <img src={GooglePlay}></img>
          <div className="flex items-center gap-[20px]">
            <NavLink to="">
              <img src={Facebook} />
            </NavLink>
            <NavLink to="https://www.instagram.com/shopaver/">
              <img src={Instagram} className=""></img>
            </NavLink>
            <NavLink>
              <img src={Youtube} className=""></img>
            </NavLink>
            <NavLink to="https://www.linkedin.com/company/shopaver/">
              <img src={linkedIn} className=""></img>
            </NavLink>
            <NavLink t="https://x.com/ShopaverApp">
              <img src={XTwitter} className=""></img>
            </NavLink>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-end pt-[30px]">
          <div>
            <div className="flex items-center gap-[20px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Support:
              </p>
              <a
                href="tel:9560050703"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                +919560050703
              </a>
            </div>
            <div className="flex items-center gap-[40px] pt-[8px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Email:
              </p>
              <a
                href="mailto:support@myzyro.com"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                support@myzyro.com
              </a>
            </div>

            <div className="flex items-center gap-[20px] pt-[5px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Address:
              </p>
              <p
                href="tel:9560050703"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                H-143, Ground Floor, Sector 63 Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
          <img src={certificatezyro}></img>
        </div>
        <div className="border-t border-white20 mt-[35px]"></div>
        <div className="flex justify-center lg:justify-between items-center mt-[30px]">
          <div className="hidden lg:flex items-center gap-[20px] ">
            <NavLink to="">
              <img src={Facebook} />
            </NavLink>
            <NavLink to="https://www.instagram.com/shopaver/">
              <img src={Instagram} className=""></img>
            </NavLink>
            <NavLink>
              <img src={Youtube} className=""></img>
            </NavLink>
            <NavLink to="https://www.linkedin.com/company/shopaver/">
              <img src={linkedIn} className=""></img>
            </NavLink>
            <NavLink t="https://x.com/ShopaverApp">
              <img src={XTwitter} className=""></img>
            </NavLink>
          </div>
          <p className="text-[12px] lg:text-[14px] text-white70 font-normal">
            © 2024 KGC Infotech Pvt.Ltd.. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
