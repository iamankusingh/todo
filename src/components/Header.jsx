import React from "react";

const Header = () => {
  return (
    <header className="w-full p-4 lg:p-6 flex flex-col justify-center items-center cursor-default bg-stroke">
      <a href="https://github.com/iamankusingh/todo" target="blank">
        <h1 className="text-4xl font-bold z-10">Todo Tasks</h1>
      </a>

      <h3 className="text-xl z-10">Manage your all todos here...</h3>
    </header>
  );
};

export default Header;
