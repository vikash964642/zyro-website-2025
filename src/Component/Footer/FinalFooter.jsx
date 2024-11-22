import logo from '../../../public/image/zyro-logo.webp';
// import Facebook from "../../assets/icons/facebook.svg";
// import Instagram from "../../assets/icons/Instagram.svg";
// import X from "../../assets/icons/X.svg";
// import Youtube from "../../assets/icons/youtube.svg";
// import Linkedin from "../../assets/icons/Linkedin.svg";
// import QR from "../../../public/assets/img/QRFooter.webp";
import { Link,NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FinalFooter() {
  const ScrollTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  const navigate=useNavigate();
  const handleClickHome=()=>{
    navigate('/')
    ScrollTop();

  }
  return (
   <>
   <div className='bg-secondary lg:mt-[120px]'>
   <div className='flex lg:justify-between  px-[32px] border-y-[1px] border-opacity-20 text-white flex-col lg:flex-row lg:pt-[50px] pt-[30px] max-[600px]:pr-[32px] max-[1124px]:pr-[15px] min-[1125px]:mr-[16px] min-[1125px]:ml-[35px] '> 
    <div className=''>
        <img src={logo} onClick={handleClickHome}></img>
        <p className='font-normal text-[13px] leading-[20.8px]  md:text-[15px] md:font-medium md:leading-[23px] mt-[10px] lg:mt-[15px] md:w-[75%] lg:w-[390px] max-[500px]:w-[343px]  max-[400px]:w-[auto]'>Shopaver is the all-in-one solution for businesses, from online presence to in-person sales, compliance, billing, and inventory management—empowering retail and e-commerce efficiency.</p>
        <div className="hidden lg:block mt-[40px]">
                <p className="text-[22px] md:font-semibold text-webtext">Address</p>
                <p className="font-semibold text-[15px] leading-[25px] text-webtext">
                  Unit No. 409, 4th Floor, Ithum Tower,<br/>Sector - 62 Noida,<br/>Uttar Pradesh - 201301
                </p>
                {/* <div className='flex items-center gap-[20px] mt-[45px]'>
                <NavLink to="https://www.facebook.com/ShopaverApp">
                  <img src={Facebook}  />
                </NavLink>
                <NavLink to="https://www.instagram.com/shopaver/">
                  <img src={Instagram} className=""></img>
                </NavLink>
                <NavLink>
                  <img src={Youtube} className=""></img>
                </NavLink>
                <NavLink to="https://www.linkedin.com/company/shopaver/">
                  <img src={Linkedin} className=""></img>
                </NavLink>
                <NavLink t="https://x.com/ShopaverApp">
                  <img src={X} className=""></img>
                </NavLink>
                </div> */}
              </div>
    </div>
   
    <div className='flex justify-between max-[360px]:w-[225px] max-[400px]:w-[266px] max-[425px]:w-[300px]  max-[550px]:w-[340px] max-[1023px]:w-[415px] min-[1024px]:w-[26%] max-[1124px]:w-[26%] min-[1125px]:w-[23%]  mt-[24px] lg:mt-[0px]'>
        <div className='lg:ml-[12px]'>
            <p className='text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px] min-[1024px]:text-[19px]  min-[1124px]:text-[22px]'>Features</p>
            <ul className='font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]'>
                <li><Link to='/posbilling' onClick={ScrollTop}>POS Billing</Link></li>
                <li><Link to='/quickbilling' onClick={ScrollTop}>Quick Billing</Link></li>
                <li><Link to='/inventory' onClick={ScrollTop}>Inventory</Link></li>
                <li><Link to='/khata' onClick={ScrollTop}>Khata</Link></li>
                <li><Link to='/ondc' onClick={ScrollTop}>ONDC</Link></li>
                <li><Link to='/onlinestore' onClick={ScrollTop}>Online Store</Link></li>
                <li><Link to='/WhatsappCommerce' onClick={ScrollTop}>Whatsapp Commerce</Link></li>
            </ul>
        </div>
        <div className=' max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]'>
            <p className='text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px]  min-[1024px]:text-[19px]  min-[1124px]:text-[22px]'>Shopaver</p>
            <ul className='font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]'>
                <li><Link to='/' onClick={ScrollTop}>Home</Link></li>    
                <li><Link to='/about' onClick={ScrollTop}>About Us</Link></li>
                <li><Link to='/'>Careers</Link></li>
                <li><Link to='/'>Resources</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
                <li><Link to='/'>Policy</Link></li>
                </ul>
        </div>
        <div className='lg:ml-[12px]'>
            <p className='text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px] min-[1024px]:text-[19px]  min-[1124px]:text-[22px]'>Features</p>
            <ul className='font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]'>
                <li><Link to='/posbilling' onClick={ScrollTop}>POS Billing</Link></li>
                <li><Link to='/quickbilling' onClick={ScrollTop}>Quick Billing</Link></li>
                <li><Link to='/inventory' onClick={ScrollTop}>Inventory</Link></li>
                <li><Link to='/khata' onClick={ScrollTop}>Khata</Link></li>
                <li><Link to='/ondc' onClick={ScrollTop}>ONDC</Link></li>
                <li><Link to='/onlinestore' onClick={ScrollTop}>Online Store</Link></li>
                <li><Link to='/WhatsappCommerce' onClick={ScrollTop}>Whatsapp Commerce</Link></li>
            </ul>
        </div>
        <div className=' max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]'>
            <p className='text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px]  min-[1024px]:text-[19px]  min-[1124px]:text-[22px]'>Shopaver</p>
            <ul className='font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]'>
                <li><Link to='/' onClick={ScrollTop}>Home</Link></li>    
                <li><Link to='/about' onClick={ScrollTop}>About Us</Link></li>
                <li><Link to='/'>Careers</Link></li>
                <li><Link to='/'>Resources</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
                <li><Link to='/'>Policy</Link></li>
                </ul>
        </div>
    </div>
    <div>
        <div className='flex justify-between mt-[30px] lg:mt-[0px]  max-[360px]:w-[257px] max-[400px]:w-[310px] max-[425px]:w-[345px]  max-[550px]:w-[385px]  max-[1023px]:w-[460px]'>
        <p className='text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px]  min-[1024px]:text-[19px]  min-[1124px]:text-[22px]'>Contact Info</p>
        {/* <div className='flex items-center gap-[8px] lg:hidden max-[360px]:gap-[5px]'>
        <NavLink to="https://www.facebook.com/ShopaverApp">
                    <img
                      width={"24.17px"}
                      height={"24.17px"}
                      src={Facebook}
                      className="facebook2"
                    ></img>
                  </NavLink>
                  <NavLink to="https://www.instagram.com/shopaver/">
                    <img
                      width={"29px"}
                      height={"29px"}
                      src={Instagram}
                      className="insta2"
                    ></img>
                  </NavLink>
                  <NavLink>
                    <img
                      width={"25.13px"}
                      height={"17.66px"}
                      src={Youtube}
                      className="youtube2"
                    ></img>
                  </NavLink>
                  <NavLink to="https://www.linkedin.com/company/shopaver/">
                    <img
                      width={"21.27px"}
                      height={"21.27px"}
                      src={Linkedin}
                      className="linkedin2"
                    ></img>
                  </NavLink>
                  <NavLink to="https://x.com/ShopaverApp">
                    <img
                      width={"22px"}
                      height={"22px"}
                      src={X}
                      className="x2"
                    ></img>
                  </NavLink>
                </div> */}
                

        </div>
       
        <p className='md:font-bold font-semibold text-[14px] md:text-[20px] md:leading-[30px] mt-[12px] '>Email</p>
        <p  className='md:font-bold font-semibold text-[14px] md:text-[20px] md:leading-[30px] mt-[15px] '>Contact</p>
        <div className='md:mt-[8px] flex gap-[26px]'>
        <p className="font-medium text-[13px] leading-[19.5px] md:text-[16px] md:leading-[24px] min-[1023px]:font-medium min-[1150px]:font-semibold">Sales : </p>
        <a href="tel:+91 9898989898" className='text-primary'>+91 9773994025</a>

        </div>
        <div className='md:mt-[8px] flex gap-[6px]'>
        <p className="font-medium text-[13px] leading-[19.5px] md:text-[16px] md:leading-[24px] min-[1023px]:font-medium min-[1150px]:font-semibold">Support : </p>
        <a href="tel:+91 9898989898" className='text-primary'>+91 9773994025</a>

        </div>
        
    </div>
   

   </div>
   

   <div className='lg:hidden pl-[32px] mt-[30px]'>
   <p className="text-[22px] md:font-semibold font-semibold text-webtext max-[360px]:text-[18px]">Address</p>
                <p className="text-[13px] md:text-[16px] font-normal md:font-medium text-webtext ">
                  Unit No. 409, 4th Floor, Ithum Tower,<br/>Sector - 62 Noida,<br/>Uttar Pradesh - 201301
                </p>
   </div>

   </div>
   </>
  )
}

export default FinalFooter