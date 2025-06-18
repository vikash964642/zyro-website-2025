import { Link, NavLink } from "react-router-dom";
import Facebook from "../../../public/image/FooterImage/Facebook.svg";
import Instagram from "../../../public/image/FooterImage/Instagram.svg";
import Youtube from "../../../public/image/FooterImage/Youtube.svg";
import XTwitter from "../../../public/image/FooterImage/XTwitter.svg";
import linkedIn from "../../../public/image/FooterImage/LinkedIn.svg";
import zyrologo from "../../../public/image/zyro-logo.svg";
// import { useNavigate } from 'react-router-dom';
import GooglePlay from "../../../public/image/FooterImage/GooglePlay.png";

function Footer() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-secondary lg:mt-[120px] p-[20px] min-[450px]:px-[50px] lg:p-[50px] pt-[30px]">
        <div className="flex lg:justify-between    flex-col lg:flex-row  ">
          <div className=" lg:w-[30%]">
            <img src={zyrologo} ></img>
            <p className="text-white70 pt-[30px] text-[14px] lg:text-[15px]">
              ZYRO is designed to empower businesses by providing a
              next-generation banking platform that streamlines financial
              process, enhances operational efficiency and ensures precise
              control over your finances.
            </p>
             <img src={GooglePlay}className="hidden lg:block pt-[30px]"></img>
            <div className="hidden lg:block mt-[40px] text-white">
              <p className="text-[22px] md:font-semibold text-webtext">
                Address
              </p>
              <p className="font-semibold text-[15px] leading-[25px] text-webtext">
                Unit No. 409, 4th Floor, Ithum Tower,
                <br />
                Sector - 62 Noida,
                <br />
                Uttar Pradesh - 201301
              </p>
            
            </div>
          </div>

          <div className="flex justify-between lg:justify-around min-[360px]:w-[322px] min-[450px]:w-[400px]  lg:w-[40%] mt-[24px] lg:mt-[0px]">
            <div className="">
              <p className="text-white80 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/posbilling" onClick={ScrollTop}>
                  Connected Banking
                  </Link>
                </li>
                <li>
                  <Link to="/quickbilling" onClick={ScrollTop}>
                   Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link to="/inventory" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link to="/khata" onClick={ScrollTop}>
             Expense Management
                  </Link>
                </li>
                <li>
                  <Link to="/ondc" onClick={ScrollTop}>
                 Billing & Accounting
                  </Link>
                </li>
                <li>
                  <Link to="/onlinestore" onClick={ScrollTop}>
                  Gift Cards API
                  </Link>
                </li>
                <li>
                  <Link to="/WhatsappCommerce" onClick={ScrollTop}>
               Prepaid Card
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-white80 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/" onClick={ScrollTop}>
                Connected Banking
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li>
                <li>
                  <Link to="/">Bank Account Verification</Link>
                </li>
                <li>
                  <Link to="/">Escrow Account</Link>
                </li>
                <li>
                  <Link to="/">Zyro Capital</Link>
                </li>
              
              </ul>
            </div>
          </div>

  <div className="flex justify-between lg:justify-around min-[360px]:w-[300px] min-[450px]:w-[375px]  lg:w-[30%] mt-[24px] lg:mt-[0px]">
            <div className="lg:ml-[12px]">
              <p className="text-white80 font-medium text-[16px] leading-[21px]">
                Company
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link to="/posbilling" onClick={ScrollTop}>
                  Home
                  </Link>
                </li>
                <li>
                  <Link to="/quickbilling" onClick={ScrollTop}>
              About Us
                  </Link>
                </li>
                <li>
                  <Link to="/inventory" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/khata" onClick={ScrollTop}>
            Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/ondc" onClick={ScrollTop}>
                 Careers
                  </Link>
                </li>
             
              </ul>
            </div>
            <div className=" max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]">
              <p className="text-white80 font-medium text-[16px] leading-[21px]">
              Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link to="/" onClick={ScrollTop}>
               Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={ScrollTop}>
                  Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/">Cookies Policy</Link>
                </li>
              
              </ul>
            </div>
          </div>
 </div>
 <div className="mt-[30px] flex lg:hidden items-center min-[376px]:justify-between max-[375px]:flex-col max-[375px]:gap-[20px] max-[375px]:justify-center min-[450px]:w-[405px]">
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
              <p className="text-[12px] lg:text-[14px] text-white70 font-normal">© 2024 KGC Infotech Pvt.Ltd.. All Rights Reserved.</p>
   </div>
      </div>
    </>
  );
}

export default Footer;
