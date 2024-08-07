import React from "react";

import Logo from "@/assets/logosaas.png";
import Image from "next/image";
// import MenuIcon from '@/assets/menu.svg'
import MenuIcon from "@/assets/hamburger.png";
const Navbar = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="saas logo" height={40} width={40} />
          {/* <MenuIcon className='w-5 h-5'/> */}
          <Image
            src={MenuIcon}
            width={20}
            height={20}
            alt="/"
            className="md:hidden"
          />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
