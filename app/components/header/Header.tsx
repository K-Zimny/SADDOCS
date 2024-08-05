import React, { ReactNode } from "react";
import "@/app/components/header/header.css";

interface HeaderProps {
  children: ReactNode;
  element: keyof JSX.IntrinsicElements;
}

export default function Header({ children, element: Element }: HeaderProps) {
  return <Element>{children}</Element>;
}
