import React, { ReactNode, MouseEventHandler } from "react";
import "@/app/components/button/button.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className,
  onButtonClick,
}: ButtonProps) {
  return (
    <button className={className} onClick={onButtonClick}>
      {children}
    </button>
  );
}
