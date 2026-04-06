import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <div className={`max-w-420 px-6 m-auto mb-46 ${className}`}>
      {children}
    </div>
  );
}
