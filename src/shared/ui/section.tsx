import {ReactNode} from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export function Section({children, className = ""}: SectionProps) {
    return (
        <div className={`max-w-[1680px] px-6 mx-auto mb-12 md:mb-20 lg:mb-32 ${className}`}>
            {children}
        </div>
    );
}
