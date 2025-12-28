import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('src/assets/header_img.png')" }}
      id="Header"
    >
      <NavBar></NavBar>
      <div className="container text-center mx-auto py-4 px-6 md:px-20">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white">
          Explore homes that fits your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#Contact" className="border bg-blue-500 px-8 py-3 rounded">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
