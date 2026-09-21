'use client';

import {useEffect, useState} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {useQuery} from "@tanstack/react-query";
import {getServicesData} from "@/entities/services/Model/api";
import {getConferencesData} from "@/entities/conferences/Model/api";
import {extractYear} from "@/shared/ui/widgets/header/lib/header.utils";
// import {extractYear} from "@/widgets/header/lib/header.utils";

interface NavigationItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    id?: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    navigation: NavigationItem[];
    pathname: string | null;
    onClose: () => void;
}

// const servicesLinks = [
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "UI/UX Design", href: "/services/ui-ux-design" },
//     { name: "Marketing", href: "/services/marketing" },
//     { name: "Branding", href: "/services/branding" },
// ];

// const conferencesLinks = [
//     { name: "Conference 2024", href: "/conferences/2024" },
//     { name: "Conference 2025", href: "/conferences/2025" },
//     { name: "All Conferences", href: "/conferences" },
// ];

export function MobileMenu({ isOpen, navigation, pathname, onClose }: MobileMenuProps) {
    const { data: dataService } = useQuery({
        queryKey: ["services"],
        queryFn: getServicesData,
        staleTime: 1000 * 60 * 10,
    });

    const { data: dataConferences } = useQuery({
        queryKey: ["conferences"],
        queryFn: () => getConferencesData(),
        staleTime: 1000 * 60 * 10,
    });

    const conferencesArray = dataConferences?.data || [];

    const uniqueYears = Array.from(
        new Set(
            conferencesArray
                .map((item: any) => extractYear(item))
                .filter((year: string) => year !== "")
        )
    ) as string[];

    const sortedYears = uniqueYears.sort((a, b) => Number(b) - Number(a));

    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);


    useEffect(() => {
        if (!isOpen) {
            setActiveMobileDropdown(null);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-[#1E1E1E] pt-24 px-6 pb-6 overflow-y-auto flex flex-col justify-between md:hidden z-40"
                >
                    <div className="flex flex-col gap-y-3">
                        {navigation.map((item) => {
                            const isDropdownOpen = activeMobileDropdown === item.id;
                            const isLinkActive = pathname === item.href || pathname?.startsWith(item.href + "/");

                            return (
                                <div key={item.name} className="border-b border-white/5 pb-2">
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setActiveMobileDropdown(isDropdownOpen ? null : (item.id || null))}
                                                className={`w-full flex justify-between items-center text-xl font-medium py-2 transition-colors ${
                                                    isLinkActive ? "text-amber-500" : "text-white active:text-amber-500"
                                                }`}
                                            >
                                                <span>{item.name}</span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    className={`transition-transform duration-300 text-gray-400 ${
                                                        isDropdownOpen ? "rotate-180 text-amber-500" : ""
                                                    }`}
                                                >
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col gap-y-3 pl-4 pt-2 pb-3 mt-1 bg-white/[0.03] rounded-lg">
                                                            {item.id === "services" &&
                                                                dataService?.data?.map((service) => (
                                                                    <Link
                                                                        key={service.title}
                                                                        href={`/services/${service.slug}`}
                                                                        onClick={onClose}
                                                                        className={`text-base py-1 transition-colors ${
                                                                            pathname === service.slug ? "text-amber-500 font-medium" : "text-gray-400 hover:text-white"
                                                                        }`}
                                                                    >
                                                                        {service.title}
                                                                    </Link>
                                                                ))
                                                            }
                                                            {item.id === "conferences" &&
                                                                sortedYears.map((year) => (
                                                                    <Link
                                                                        key={year}
                                                                        href={`/conferences/${year}`}
                                                                        onClick={onClose}
                                                                        className={`text-base py-1 transition-colors ${
                                                                            pathname === year ? "text-amber-500 font-medium" : "text-gray-400 hover:text-white"
                                                                        }`}
                                                                    >
                                                                        <span className="text-[12px]">NT</span>{year}
                                                                    </Link>
                                                                ))
                                                            }
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className={`block text-xl font-medium py-2 transition-colors ${
                                                isLinkActive ? "text-amber-500" : "text-white active:text-amber-500"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500 tracking-wider font-light">
                        <p>PROOF CREATIVE SYSTEM</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}