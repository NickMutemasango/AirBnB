import React from "react";
import logo from "./img/LOGO.svg";
import one from "./img/image 28.svg";
import two from "./img/image 30.svg";
import three from "./img/image 26.svg";
import four from "./img/image 27.svg";
import five from "./img/image 29.svg";
import six from "./img/image 22.svg";
import seven from "./img/image 23.svg";
import eight from "./img/image 25.svg";
import nine from "./img/image 24.svg";

const Header = () => {
  return (
    <div>
      <header className="p-4 md:p-5  shadow-xl">
        {/* Flex container */}
        <div>
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </header>

      {/* Gallery */}
      <div className="flex md:flex-row justify-center items-center h-fully space-x-2">
        {/* First */}
        <div>
          <img src={one} className="h-5/6" alt="" />
        </div>

        {/* Second */}
        <div className="space-y-2 pb-4">
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>

        {/* Third */}
        <div className="space-y-2 pt-16">
          <img src={four} alt="" />
          <img src={five} alt="" />
        </div>

        {/* Fourth */}
        <div className="space-y-2">
          <img src={six} alt="" />
          <img src={seven} alt="" />
        </div>

        {/* Fifth */}
        <div className="space-y-2 pt-11">
          <img src={eight} alt="" />
          <img src={nine} alt="" />
        </div>
      </div>

      <div className="flex flex-col space-y-1 pt-8">
        <h1 className="font-bold text-5xl pb-3 lg:text-left">
          Online Experiences
        </h1>
        <p className=" lg:text-left">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Header;
