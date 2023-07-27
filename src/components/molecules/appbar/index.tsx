"use client";
import React from "react";
import SVG from "react-inlinesvg";
import Button from "../../atoms/button";
const Appbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-8">
      <div className="flex items-center cursor-pointer">
        <SVG src="icons/logo-light.svg" />
      </div>
      <Button variant="secondary">Apply for access</Button>
    </div>
  );
};

export default Appbar;
