"use client";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import quantum from "@/assets/logo-quantum.png";
import celeste from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat:Infinity,
              ease:'linear',
              repeatType:'loop'
            }}
          >
            <Image src={apex} alt="/" className="logo-ticker-img" />
            <Image src={echo} alt="/" className="logo-ticker-img" />
            <Image src={acmeLogo} alt="/" className="logo-ticker-img" />
            <Image src={quantum} alt="/" className="logo-ticker-img" />
            <Image src={celeste} alt="/" className="logo-ticker-img" />
            <Image src={pulseLogo} alt="/" className="logo-ticker-img" />

            <Image src={apex} alt="/" className="logo-ticker-img" />
            <Image src={echo} alt="/" className="logo-ticker-img" />
            <Image src={acmeLogo} alt="/" className="logo-ticker-img" />
            <Image src={quantum} alt="/" className="logo-ticker-img" />
            <Image src={celeste} alt="/" className="logo-ticker-img" />
            <Image src={pulseLogo} alt="/" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
