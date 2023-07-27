"use client";
import Image from "next/image";
import React from "react";
import Button from "../../atoms/button";
import SVG from 'react-inlinesvg'
type TFounderProps = {
  title: string;
  description: string;
  action: {
    label: string;
    onClick?: () => void;
  };
};

const Founder: React.FC<TFounderProps> = ({ title, description, action }) => {
  return (
    <section className="lg:pt-[110px] pt-[100px]">
      <div className="px-4 md:px-10 relative max-w-[1112px] m-auto ">
        <div className="w-full flex justify-center md:justify-start items-center absolute top-0 left-0 lg:left-4 md:left-10">
          <Image
            src={"/image-founder.webp"}
            alt="founder"
            width={477}
            height={477}
            className="aspect-square w-[281px] h-[281] lg:w-[477px] lg:h-[477px]"
          />
        </div>
        <div className="relative pt-[228px] md:pt-[151px] lg:pt-[173px] z-20 w-full flex justify-center md:justify-end">
          <div className="p-8 lg:p-16 md:p-14 flex flex-col gap-4 md:gap-6 lg:gap-8 bg-dark-purple lg:max-w-[730px] md:max-w-[514px]">
            <h2 className="lg:heading-md md:heading-m text-white">{title}</h2>
            <p className="text-base md:text-main leading-7 text-white">
              {description}
            </p>
            <div className="w-fit">
              <Button>{action?.label}</Button>
            </div>
          </div>
        </div>
        <SVG src="icons/bg-pattern-3.svg" className="absolute -bottom-16 z-30 lg:right-24 md:right-14 hidden md:block" />
      </div>
      <div className="lg:pt-[120px] md:pt-[80px] pt-[74px] w-full flex justify-center items-center flex-col gap-10">
        <SVG src="icons/logo-dark.svg" />
        <div className="flex gap-4">
            <SVG src="icons/icon-facebook.svg" />
            <SVG src="icons/icon-instagram.svg" />
            <SVG src="icons/icon-twitter.svg" />
        </div>
      </div>
    </section>
  );
};

export default Founder;
