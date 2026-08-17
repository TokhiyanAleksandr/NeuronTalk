'use client';

interface BurgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 relative z-50 focus:outline-none"
            aria-label="Toggle menu"
        >
            <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                }`}
            />
            <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
        </button>
    );
}