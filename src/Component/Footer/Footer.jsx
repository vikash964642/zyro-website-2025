import { Link, NavLink } from "react-router-dom";
import Facebook from "/image/FooterImage/Facebook.svg";
import Instagram from "/image/FooterImage/Instagram.svg";
import Youtube from "/image/FooterImage/Youtube.svg";
import XTwitter from "/image/FooterImage/XTwitter.svg";
import linkedIn from "/image/FooterImage/LinkedIn.svg";
import zyrologo from "/image/zyro-logo.svg";
// import { useNavigate } from 'react-router-dom';
import GooglePlay from "../../../public/image/FooterImage/playStore.svg";
import AppStore from "../../../public/image/FooterImage/appStore.svg";
// import certificatezyro from "/image/FooterImage/certificatezyro.png";
import certificatezyro from "../../../public/image/FooterImage/certificateNew1.svg";
function Footer() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <section className="relative overflow-hidden">
      <div className="FooterGradient1"></div>
   <div className="border-white20 border-solid border-t-[1px]  lg:mt-[120px] mt-[80px]"></div>
      <div className="bg-secondary p-[20px] min-[450px]:px-[50px] lg:p-[50px] pt-[30px]">
         
        <div className="flex lg:justify-between    flex-col lg:flex-row  ">
          <div className=" lg:w-[30%]">
            <img src={zyrologo}></img>
            <p className="text-white70 pt-[30px] text-[14px] lg:text-[15px]">
              ZYRO is designed to empower businesses by providing a
              next-generation banking platform that simplifies financial
              process, enhances operational efficiency and ensures precise
              control over your finances.
            </p>

            <div className="flex gap-3 mt-[30px]">
              <a href="https://play.google.com/store/apps/details?id=com.ZYRO" target="_blank">
                <img
                  src={GooglePlay}
                  className="hidden lg:block  cursor-pointer"
                ></img>
              </a>
              <a href='https://apps.apple.com/in/app/zyro/id6743227331' target="_blank">
                <img
                  src={AppStore}
                  className="hidden lg:block  cursor-pointer"
                ></img>
              </a>

            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around   lg:w-[40%]">
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/smart-soundbox-speaker" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link to="/pos-machine-system" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link to="/expense-management-tracking-software" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link to="/prepaid-cards" onClick={ScrollTop}>
                    Prepaid Card
                  </Link>
                </li>
                <li>
                  <Link to="/upi-stack" onClick={ScrollTop}>
                    UPI Stack
                  </Link>
                </li>
                <li>
                     <Link to="/imps-switch" onClick={ScrollTop}>
                   IMPS Switch & BANL
                  </Link>
                </li>
                {/* <li>
                  <Link to="" onClick={ScrollTop}>
                   UPI Stack
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/connected-banking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                {/* <li>
                  <Link to="/payout-payment" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="">Bank Account Verification</Link>
                </li> */}
                {/* <li>
                  <Link to="">Escrow Account</Link>
                </li> */}
                {/* <li>
                  <Link to="">Zyro Capital</Link>
                </li> */}
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
                  <Link to="/about-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="https://zyro.in/blog/" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={ScrollTop}>
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link to="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className=" max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/terms-and-conditions" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link to="">Cookies Policy</Link>
                </li> */}
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
                  <Link to="/smart-soundbox-speaker" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link to="/pos-machine-system" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link to="/expense-management-tracking-software" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link to="/prepaid-cards" onClick={ScrollTop}>
                   Prepaid Card
                  </Link>
                </li>
                <li>
                 <Link to="/upi-stack" onClick={ScrollTop}>
                    UPI Stack
                  </Link>
                </li>
                <li>
                  <Link to="/imps-switch" onClick={ScrollTop}>
                   IMPS Switch & BANL
                  </Link>
                </li>
                {/* <li>
                  <Link to="" onClick={ScrollTop}>
                  UPI Stack
                  </Link>
                </li> */}
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
                  <Link to="/about-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="https://zyro.in/blog/" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={ScrollTop}>
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link to="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li> */}
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
                  <Link to="/connected-banking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                {/* <li>
                  <Link to="/payout-payment" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="">Bank Account Verification</Link>
                </li>
                <li>
                  <Link to="">Escrow Account</Link>
                </li>
                <li>
                  <Link to="">Zyro Capital</Link>
                </li> */}
              </ul>
            </div>
            <div className="pt-[154px] min-[768px]:pt-[100px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/terms-and-conditions" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link to="">Cookies Policy</Link>
                </li> */}
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

          {/* <div className="flex gap-[20px] pt-[5px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Address:
            </p>
            <p
              href="tel:9560050703"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              H-31, 5th Floor, Sector-63 Noida, Uttar-Pradesh 201301
            </p>
 
          </div> */}
        </div>
    </div>
        <div className="mt-[30px] flex lg:hidden  justify-start min-[425px]:justify-center flex-wrap max-[375px]:flex-col max-[375px]:gap-[20px] gap-[30px]">
          <div className="flex max-[375px]:justify-between max-[350px]:gap-1  min-[375px]:gap-5">
            <a href="https://play.google.com/store/apps/details?id=com.ZYRO" target="_blank">
              <img src={GooglePlay}></img>
            </a>
          
            <a href='https://apps.apple.com/in/app/zyro/id6743227331' target="_blank">
               <img src={AppStore}></img>
           
           </a>
          </div>
          <div className="flex items-center gap-[20px]">
            <NavLink to="https://www.facebook.com/zyrobank/?ti=as" target="_blank">
              <img src={Facebook} />
            </NavLink>
            <NavLink to="https://www.instagram.com/my_zyro/?utm_medium=copy_link" target="_blank">
              <img src={Instagram} className=""></img>
            </NavLink>
            <NavLink>
              <img src={Youtube} className=""></img>
            </NavLink>
            <NavLink to="https://www.linkedin.com/company/myzyro/" target="_blank">
              <img src={linkedIn} className=""></img>
            </NavLink>
            <NavLink to="https://x.com/myzyro" target="_blank">
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

            {/* <div className="flex items-center gap-[20px] pt-[5px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Address:
              </p>
              <p
                href="tel:9560050703"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                H-31, 5th Floor, Sector-63 Noida, Uttar-Pradesh 201301
              </p>
            </div> */}
          </div>
          <img src={certificatezyro}></img>
        </div>
        <div className="border-t border-white20 mt-[35px]"></div>
        <div className="flex justify-center lg:justify-between items-center mt-[30px]">
          <div className="hidden lg:flex items-center gap-[20px] ">
            <NavLink to="https://www.facebook.com/zyrobank/?ti=as" target="_blank">
              <img src={Facebook} />
            </NavLink>
            <NavLink to="https://www.instagram.com/my_zyro/?utm_medium=copy_link" target="_blank">
              <img src={Instagram} className=""></img>
            </NavLink>
            <NavLink>
              <img src={Youtube} className=""></img>
            </NavLink>
            <NavLink to="https://www.linkedin.com/company/myzyro/" target="_blank">
              <img src={linkedIn} className=""></img>
            </NavLink>
            <NavLink to="https://x.com/myzyro" target="_blank">
              <img src={XTwitter} className=""></img>
            </NavLink>
          </div>
          <p className="text-[12px] lg:text-[14px] text-white70 font-normal">
            © 2024 KGC Infotech Pvt.Ltd.. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
