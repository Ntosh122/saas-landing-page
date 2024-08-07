'use client'
import React, { useRef } from "react";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramid from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import { motion, useScroll,useTransform} from "framer-motion"

const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} =
  useScroll({
    target:sectionRef,
    offset:['start end', 'end start']
  })
  const translateY=useTransform(scrollYProgress, [0,1], [150,-150])
  return (
    <section ref={sectionRef} className="overflow-x-clip bg-gradient-t-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="title mt-5 ">
            A more effective way to track progress
          </h2>
          <p className="description mt-5">
          Effortlessly transform your ideas into a fully functional, responsive SaaS website with our intuitive template. Perfect for startups and established businesses alike, this template allows you to launch a stunning, user-friendly website in no time.
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="/" className="mt-10" />
        <motion.img src={pyramid.src} alt="/" className="hidden md:block absolute  -right-36 -top-32" height={262} width={262}
        style={{translateY}}/>
        <motion.img src={tube.src} alt='/' width={248} height={248} className="hidden md:block absolute bottom-24 -left-36"
        style={{
          translateY
        }}/>
        </div>
       
      </div>
    </section>
  );
};

export default ProductShowcase;
