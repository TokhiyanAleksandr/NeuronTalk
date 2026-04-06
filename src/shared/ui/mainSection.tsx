import { ReactNode } from "react";

interface MainSectionProps {
  children: ReactNode;
  className?: string;
}

export function MainSection({ children, className = "" }: MainSectionProps) {
  return (
    <div className={`pt-[170px] ${className}`}>
      {children}
    </div>
  );
}
