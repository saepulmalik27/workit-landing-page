"use client";
import React from "react";
import Button from "../../atoms/button";
import Image from "next/image";
import Appbar from "../../molecules/appbar";

const Hero = () => {
  return (
    <header className="relative h-[482px] md:h-[541px] lg:h-[730px] before:hero-before md:hero-background-tablet lg:hero-background">
      <div className="z-20 relative">
        <Appbar />
      </div>
      <div className="z-20 relative p-4 flex flex-col gap-10 justify-center items-center">
        <div className="max-w-[343px] md:max-w-[573px] lg:max-w-[635px]">
          <h1 className="text-[50px] font-semibold md:heading-lg text-center text-white">
            Data <u className="decoration-eucaplyptus">tailored</u> to your
            needs.
          </h1>
        </div>
        <Button>Learn more</Button>
        <Image
          src={"/image-hero.webp"}
          width={715}
          height={427}
          alt="hero asset"
          className="w-[320px] md:w-[480px] lg:mt-10 lg:w-[715px]"
        />
      </div>
    </header>
  );
};

export default Hero;
