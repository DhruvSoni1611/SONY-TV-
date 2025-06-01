import type React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Button = ({ children, size = "md", className }: Props) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "bg-white text-textBlack px-3 py-1 rounded-full",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};
