import React from "react";
import Logo from "../../src/assets/logo.png";


const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img src={Logo} alt="logo" className="md:cursor-pointer" />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
