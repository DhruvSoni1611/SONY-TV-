import type React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("mx-auto max-w-[2000px] px-6", className)}>
      {children}
    </div>
  );
};
