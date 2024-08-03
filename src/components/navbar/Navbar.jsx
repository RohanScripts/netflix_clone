import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" srcset="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className="pointer" />
        <p className="pointer">Children</p>
        <img src={bell} alt="" className="pointer" />
        <div className="nav-profile">
          <img src={profile_icon} alt="" className="profile-icon" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
