import React, { ReactNode } from "react";
import "@/app/components/copy/copy.css";

interface CopyProps {
  children: ReactNode;
}

export default function Copy({ children }: CopyProps) {
  return <>{children}</>;
}
