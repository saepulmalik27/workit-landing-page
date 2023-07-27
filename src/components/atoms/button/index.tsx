import React from "react";
import { twMerge } from "tailwind-merge";

type TButton = {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<TButton> = ({
  className,
  variant = "primary",
  children,
}) => {
  const primary = twMerge(
    "bg-eucaplyptus text-dark-purple hover:bg-dark-purple hover:bg-dark-purple border-eucaplyptus border-2 hover:text-eucaplyptus"
  );
  const secondary = twMerge("text-white hover:text-eucaplyptus");

  const buttonVariant = {
    primary,
    secondary,
  };

  return (
    <button
      className={twMerge(
        "text-main text-center font-bold px-6 py-3 ",
        buttonVariant[variant]
      )}
    >
      <p className="text-current w-fit ">
        {children}
      </p>
      <hr className={twMerge("bg-eucaplyptus border-none h-1 w-full", variant !== "secondary" && 'hidden')} />
    </button>
  );
};

export default Button;
