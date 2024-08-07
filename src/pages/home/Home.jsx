import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" className="hero-banner" srcset="" />
        <div className="hero-caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
            laudantium nisi ullam magnam corrupti labore incidunt fuga, commodi
            soluta a aliquam corporis fugiat quasi perspiciatis repellat. Id,
            officiis non.
          </p>
          <div className="hero-buttons">
            <button>
              <img src={play_icon} alt="" srcset="" />
              Play
            </button>
            <button>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
