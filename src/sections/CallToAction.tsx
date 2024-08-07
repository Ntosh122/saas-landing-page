'use client'
import React, { useRef } from "react";
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from "next/image";
import { motion,useScroll,useTransform } from "framer-motion";

const CallToAction = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0,1],[150,-150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="title">Sign Up For Free Today</h2>
          <p className="description mt-5">
          Experience the satisfaction of achievement with an app crafted to monitor your progress and inspire your endeavors.
          </p>
          <motion.img src={starImage.src} width={360} className="absolute -left-[350px] -top-[137px]" alt="/" style={{
          translateY}}/>
          <motion.img src={springImage.src} width={360} className="absolute -right-[331px] -top-[19px]" alt="/" style={{
            translateY
          }}/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for for free</button>
          <button className="btn btn-text">Learn more</button>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
