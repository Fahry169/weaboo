"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages = [
    "banner_op.png",
    "banner_naruto.png",
    "banner_bleach.png",
  ];

  const logoImages = [
    "logo_op.png",
    "logo_naruto.png",
    "logo_bleach.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handleLeft = () => {
    setCurrentIndex(
      (currentIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex + 1) % bannerImages.length);
  };

  return (
    <div
      style={{
        backgroundImage: `url(/banner/${bannerImages[currentIndex]})`,
      }}
      className="w-full h-[650px] bg-cover bg-center bg-no-repeat transition-all duration-700 relative"
    >
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={handleLeft}
          className="hover:scale-110 transition-all duration-100 hover:animate-pulse"
        >
          <ArrowLeft size={32} color="white" />
        </button>
        <button
          onClick={handleRight}
          className="hover:scale-110 transition-all duration-100 hover:animate-pulse"
        >
          <ArrowRight size={32} color="white" />
        </button>
      </div>
      <div className="absolute left-10 md:left-16 lg:left-24 transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2 md:translate-y-0">
      <Image
                unoptimized={false}
                src={`/logo/${logoImages[currentIndex]}`}
                alt={"test"}
                width={500}
                height={180}
                className="w-max h-12 md:h-20 lg:h-32 hover:scale-105 transition-all duration-300"
              />
      </div>
    </div>
  );
};

export default Banner;
