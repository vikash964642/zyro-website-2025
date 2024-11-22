// import React from "react";
import Logo from "../../../public/image/zyro-logo.webp";
import PlaystoreIcon from "../../../public/image/Download - Component.png";
import certificate from "../../../public/image/certificate.webp";
import playstoreWhitebg from "../../../public/image/playstore_white_bg.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const sections = [
    {
      title: "Product",
      items: [
        "QR Sound Box",
        "Prepaid Card",
        "Credit Facility",
        "ONDC",
        "Gift Card",
        "Billing & Accounting",
      ],
    },
    {
      title: "Banking+",
      items: [
        "Connected Banking",
        "Payout",
        "Payment",
        "Smart Collect",
        "Dashboard",
        "Escrow Account",
      ],
    },
    {
      title: "Resources",
      items: ["Blog", "News", "Careers", "YouTube"],
    },
    {
      title: "Company",
      items: ["About Us", "Help Desk"],
    },
  ];

  const socialIcons = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "https://youtube.com",
    },
  ];

  return (
    <div className="w-full mt-24 bg-[#080411] text-gray-300 py-8 px-2 pl-[22px] lg:bg-footerSape bg-footerMobileSape bg-right lg:bg-center bg-no-repeat ">
      <div className="flex flex-col lg:flex-row lg:gap-36">
        <div className="pt-8 md:pt-2 lg:pl-[55px] lg:max-w-[32%]">
          <img src={Logo} alt="zyro-logo" />
          <p className="py-4 text-[14px] opacity-70 ">
            ZYRO is designed to empower businesses by providing a
            next-generation banking platform that streamlines financial
            processes, enhances operational efficiency, and ensures precise
            control over your finances.
          </p>
          <img
            src={PlaystoreIcon}
            alt="playStore-icon"
            className="pt-[24px] hidden lg:block"
          />
        </div>
        <div className=" grid w-full gap-[2%] grid-cols-2 md:grid-cols-4 py-8 ">
          {/* Logo and Description */}

          {/* Section Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-medium pt-2 text-[16px]">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-gray-500 text-[14px] hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Support and Certificate */}

      <div className="flex md:flex-row md:align-bottom flex-col-reverse justify-between">
        <div className=" table w-full ... lg:w-auto lg:pl-[55px]">
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell ...">
                <p className="text-[13px] lg:text-[14px] font-medium leading-[16.6px]">
                  Support
                </p>
              </div>
              <div className="table-cell ...">
                <span>:</span>
              </div>
              <div className="table-cell ...">
                <p className="text-[13px] font-normal leading-[16.6px] pl-3">
                  +91 95600 50703
                </p>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">
                <p className="text-[13px] lg:text-[14px] font-medium leading-[16.6px] pr-3">
                  Email
                </p>
              </div>
              <div className="table-cell ...">
                <span>:</span>
              </div>
              <div className="table-cell ...">
                <p className="text-[13px] font-normal leading-[16.6px] pl-3">
                  support@myzyro.com
                </p>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">
                <p className="text-[13px] lg:text-[14px] font-medium leading-[16.6px] pr-3">
                  Address
                </p>
              </div>
              <div className="table-cell ...">
                <span>:</span>
              </div>
              <div className="table-cell ...">
                <p className="text-[13px] font-normal leading-[16.6px] pl-3">
                  H-143, Ground Floor, Sector 63 Noida, Uttar Pradesh 201301
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end items-center lg:pr-32 justify-center pb-[41px] md:pb-0">
          <img
            src={certificate}
            alt="certificate"
            className="sm:w-auto w-full px-[23px]"
          />
        </div>
      </div>
      <div className="flex lg:justify-between py-4 lg:border-hidden border-b-2 border-gray-400 flex-wrap justify-center gap-5">
        <img
          src={playstoreWhitebg}
          alt="playstoreWhitebg "
          className="lg:hidden block"
        />
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-2xl lg:hidden">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label={item.name}
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
      {/* Footer Links and Social Icons */}
      <div className="flex justify-between items-center mt-6 lg:px-[65px] flex-col lg:flex-row lg:border-t-2 pt-[29px] ">
        {/* Policies */}
        <div className="text-center">
          <div className="flex lg:justify-center justify-between space-x-12 ">
            <span className="cursor-pointer text-[12px] font-normal leading-[21px] underline">
              Terms of Use
            </span>
            <span className="cursor-pointer text-[12px] font-normal leading-[21px]">
              Cookies Policy
            </span>
            <span className="cursor-pointer text-[12px] font-normal leading-[21px] underline">
              Privacy Policy
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="lg:flex justify-center space-x-6 text-2xl hidden">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label={item.name}
            >
              <item.icon />
            </a>
          ))}
        </div>

        {/* Website */}
        <div className="text-right cursor-pointer lg:w-[332px]">
          <span className="text-[12px] font-normal leading-[21px] ">
          COPYRIGHT © 2024 - zyro, India
          </span>
        </div>
      </div>
    </div>
  );
}
