import React from "react";
import logo from "../../assets/cinetastic_logo.png";
import "../../App.css";
import { BiRadio } from "react-icons/bi";
import { BsCameraReels } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { GiHamburgerMenu, GiHearingDisabled } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuON, setMenuOn] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOn(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  const openMenu = () => {
    setMenuOn(true);
  };
  return (
    <div className="navContainer z-10 px-4 sm:px-14">
      <div className="navbar flex items-center gap-14 py-3">
        <Link to="/" className="mr-[auto] flex items-center">
          <GiHamburgerMenu
            onClick={openMenu}
            className="menu text-2xl inline mr-2"
          />
          <img className="w-[180px] sm:w-[200px]" src={logo} alt="" />
        </Link>
        <div className="desktopNavbar flex gap-14">
          <Link to="/movies/popular" className="font-bold">
            Tv Shows
          </Link>
          <Link to="/movies/top_rated" className="font-bold">
            Top Rated
          </Link>
          <Link to="/movies/upcoming" className="font-bold">
            Upcoming
          </Link>
        </div>
      </div>
      <div
        ref={navRef}
        style={{ display: menuON ? "flex" : "none" }}
        className="mobileNavbar"
      >
        <img src={logo} className="p-[10px]" alt="" />
        <Link to="/movies/popular" className="">
          <BsCameraReels className="inline mr-2" />
          Tv Shows
        </Link>
        <Link to="/movies/top_rated" className="">
          <span>
            <BiRadio className="inline mr-2" />
          </span>
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="">
          <FcFilmReel className="inline mr-2" />
          Upcoming
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
