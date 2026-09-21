'use client';

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { getSettings } from "@/entities/home/Model/api";

import { BurgerButton } from "./BurgerButton";
import { MobileMenu } from "./MobileMenu";
import {ConferencesDropdown, getHeaderStyles, NavLink, ServicesDropdown} from "@/shared/ui/widgets/header";

const navigation = [
    { name: "Services", href: "/services", hasDropdown: true, id: "services" },
    { name: "Projects", href: "/projects" },
    { name: "Conferences", href: "/conferences", hasDropdown: true, id: "conferences" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const { data } = useQuery({ queryKey: ["settings"], queryFn: getSettings, staleTime: 1000 * 60 * 10 });
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const isAnyOpen = activeDropdown !== null;
    const isSpecificConference = pathname?.startsWith('/conferences/');
    const theme = getHeaderStyles(pathname || "", isAnyOpen || isMobileMenuOpen, isScrolled);

    useEffect(() => {
        const handleScroll = (e: any) => {
            const scrollPos = e.target.scrollTop !== undefined ? e.target.scrollTop : window.scrollY;
            setIsScrolled(scrollPos > 50);
        };
        window.addEventListener("scroll", handleScroll, true);

        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll, true);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsScrolled(false);
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const getBgColor = () => {
        if (isAnyOpen || isMobileMenuOpen) return "bg-[#1E1E1E]";
        if (isScrolled) return isSpecificConference ? "bg-[rgba(0,0,0,.8)]" : "bg-black";
        return "bg-transparent";
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${getBgColor()} ${
                isAnyOpen || isScrolled || isMobileMenuOpen ? "border-white/10 py-2" : "border-transparent py-4"
            }`}
        >
            <motion.nav
                className="m-auto max-w-[1680px] px-6 flex items-center justify-between relative z-50"
                animate={{ height: isScrolled ? 60 : 80 }}
            >
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    {data?.site_logo && (
                        <Image
                            src={data.site_logo}
                            alt="Logo"
                            width={180}
                            height={50}
                            priority
                            className={`transition-all duration-500 ${theme.logoClass}`}
                            style={{ transform: isScrolled ? "scale(0.85)" : "scale(1)" }}
                        />
                    )}
                </Link>

                <div className="hidden items-center gap-10 md:flex" ref={navRef}>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            item={item}
                            isActive={pathname === item.href || pathname?.startsWith(item.href + "/")}
                            theme={theme}
                            isServicesOpen={activeDropdown === item.id}
                            onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.id ? null : (item.id || null)) : setActiveDropdown(null)}
                        />
                    ))}
                </div>

                <BurgerButton
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </motion.nav>

            <div className="hidden md:block">
                <AnimatePresence mode="wait">
                    {activeDropdown === "services" && <ServicesDropdown key="services" onClose={() => setActiveDropdown(null)} />}
                    {activeDropdown === "conferences" && <ConferencesDropdown key="conferences" onClose={() => setActiveDropdown(null)} />}
                </AnimatePresence>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                navigation={navigation}
                pathname={pathname}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </motion.header>
    );
}