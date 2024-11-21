import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const handleClick=props.handleClick;
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [activeLink, setActiveLink] = useState(null);
  const [hoveredSublinkIndex, setHoveredSublinkIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkMouseEnter = (linkName) => {
    if (!isMobile) {
      setActiveLink(linkName);
    }
  };

  const handleLinkMouseLeave = () => {
    if (!isMobile) {
      setActiveLink(null);
      setHoveredSublinkIndex(null);
    }
  };

  const handleLinkClick = (linkName) => {
    if (isMobile) {
      setActiveLink((prevLink) => (prevLink === linkName ? null : linkName));
    }
  };

  const handleSublinkClick = () => {
    if (isMobile) {
      setActiveLink(null); // Close the menu on mobile
    }
    setHoveredSublinkIndex(null);
  };

  const handleBlogLinkClick = (e, link) => {
    handleClick();
    if (link.name === "Blog") {
      e.preventDefault();
      window.open(link.link, "_blank");
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div
            className="px-[1.50rem] text-left md:cursor-pointer group"
            onMouseEnter={() => handleLinkMouseEnter(link.name)}
            onMouseLeave={handleLinkMouseLeave}
            onClick={() => handleLinkClick(link.name)}
          >
            <Link
              to={link.name === "Blog" ? "#" : link.link}
              onClick={(e) => {
                if (link.name === "Blog") {
                  e.preventDefault();
                  window.open(link.link, "_blank");
                }
                if (isMobile) {
                  setActiveLink(null); // Close the menu on mobile
                }
              }}
            >
              <p className="md:pt-[25px] pt-[50px] pb-[21px] flex justify-between items-center md:pr-0 pr-5 group hover:text-primary focus:text-primary lg:border-hidden border-b border-light-gray-600">
                {link.name}
                <span className="text-[22px] leading-[27px] md:hidden inline">
                  <ion-icon
                    name={`${activeLink === link.name ? "chevron-up" : "chevron-down"}`}
                    className={`${activeLink === link.name ? "text-primary" : "text-black" }`}
                  ></ion-icon>
                </span>
              </p>
            </Link>
            {link.submenu && activeLink === link.name && (
              <div className="lg:absolute md:block group-hover:md:block hover:md:block ">
                <div className=" pr-2 pb-4 gap-7 lg:relative lg:right-[90px] border-[#C3C3C3] lg:bg-white  lg:border-t-0 lg:border-x lg:border-b lg:rounded-b-lg group fill-white stroke-0.5 stroke-gray-600 filter  ">
                  {link.sublinks &&
                    link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex} onClick={handleSublinkClick}>
                        <Link
                          to={mysublinks.link}
                          onClick={(e) => handleBlogLinkClick(e, mysublinks)}
                        >
                          <div
                            className={`flex hover:bg-secondary items-center h-7 w-64 py-3 pt-5 rounded ${isMobile ? 'my-4' : 'my-[6px]'}`}
                            onMouseOver={() => setHoveredSublinkIndex(subIndex)}
                            onMouseLeave={() => setHoveredSublinkIndex(null)}
                          >
                            <div className="flex items-center justify-center w-7 mr-3 lg:ml-[12px]">
                              <img
                                src={`/assets/icons/${mysublinks.img}.svg`}
                                alt=""
                              />
                            </div>
                            <p
                              className={`text-[17px] font-medium rounded items-center   ${
                                hoveredSublinkIndex === subIndex
                                  ? "text-[#6F41D2]"
                                  : "text-[#909090]"
                              }`}
                              onClick={ScrollTop}
                            >
                              {mysublinks.name}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  handleClick: PropTypes.any,
};

export default NavLinks;
