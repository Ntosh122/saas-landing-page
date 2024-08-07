import React from "react";
// import ArrowRight from "@/assets/arrow-right.svg";
// import ArrowRight from "@/assets/arrow-right.png";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          {/* <Image src={ArrowRight} width={20} height={20} alt='/' className="nline-flex justify-center items-center"/> */}
          {/* <ArrowRight classname="h-4 w-4 inline-flex justify-center items-center" /> */}
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
