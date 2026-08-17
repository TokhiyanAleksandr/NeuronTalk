"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
    item: { name: string; href: string; hasDropdown?: boolean };
    isActive: boolean;
    theme: { nav: string; underline: string };
    isServicesOpen: boolean;
    onClick?: () => void;
}

export function NavLink({ item, isActive, theme, isServicesOpen, onClick }: NavLinkProps) {
    return (
        <div className="relative">
            {item.hasDropdown ? (
                <button
                    onClick={onClick}
                    className={`text-[1rem] flex items-center gap-1 font-semibold tracking-wide transition-colors ${theme.nav}`}
                >
                    {item.name}
                    <motion.svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </button>
            ) : (
                <Link href={item.href} className={`text-[1rem] font-semibold tracking-wide transition-colors ${theme.nav}`}>
                    {item.name}
                </Link>
            )}

            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-2 left-0 right-0 h-[2px] ${theme.underline}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </div>
    );
}