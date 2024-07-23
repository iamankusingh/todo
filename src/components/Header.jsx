import React from "react";
import stroke from "../assets/pink-stroke.png"

const Header = () => {
  return (
    <header className="w-full p-4  text-center cursor-default bg-stroke">
      {/* <img src={stroke} alt="stroke" className="absolute right-1/2 " /> */}
      <h1 className="text-4xl font-bold z-10">Todo Tasks</h1>
      <h3 className="text-xl z-10">Manage your all todos here...</h3>
    </header>
  );
};

export default Header;
