'use client';

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Ваши импорты
import { NavLink, ServicesDropdown, ConferencesDropdown, getHeaderStyles } from "@/widgets/header";
import {useQuery} from "@tanstack/react-query";
import {getSettings} from "@/entities/home/Model/api";

const navigation = [
    { name: "Services", href: "/services", hasDropdown: true, id: "services" },
    { name: "Works", href: "/works" },
    { name: "Conferences", href: "/conferences", hasDropdown: true, id: "conferences" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const { data } = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings,
        staleTime: 1000 * 60 * 10,
    });

    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const isAnyOpen = activeDropdown !== null;

    // Проверяем, что мы внутри конкретной конференции (например /conferences/nt2024)
    // Если нужно только для nt2024, замени на: pathname === '/conferences/nt2024'
    const isSpecificConference = pathname?.startsWith('/conferences/');

    const theme = getHeaderStyles(pathname || "", isAnyOpen, isScrolled);

    useEffect(() => {
        const handleScroll = (e: any) => {
            // Проверяем скролл как в контейнере, так и в окне
            const scrollPos = e.target.scrollTop !== undefined ? e.target.scrollTop : window.scrollY;
            setIsScrolled(scrollPos > 50);
        };

        // true позволяет ловить скролл внутри ScrollContainer
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

    // Сброс при смене страницы
    useEffect(() => {
        setIsScrolled(false);
        setActiveDropdown(null);
    }, [pathname]);

    const toggleDropdown = (id?: string) => {
        if (!id) {
            setActiveDropdown(null);
            return;
        }
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    // Определяем цвет фона
    const getBgColor = () => {
        if (isAnyOpen) return "bg-[#1E1E1E]";
        if (isScrolled) {
            // Если мы на странице конкретной конфы — красный, иначе черный
            return isSpecificConference ? "bg-[rgba(0,0,0,.8)]" : "bg-black";
        }
        return "bg-transparent";
    };
    console.log(data,'data')
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${getBgColor()} ${
                isAnyOpen || isScrolled ? "border-white/10 py-2" : "border-transparent py-4"
            }`}
        >
            <motion.nav
                className="m-auto max-w-[1680px] px-6 flex items-center justify-between"
                animate={{ height: isScrolled ? 60 : 80 }}
            >
                <Link href="/">
                    {data?.site_logo ? (
                        <Image
                            src={data.site_logo}
                            alt="Logo"
                            width={180}
                            height={50}
                            priority
                            className={`transition-all duration-500 ${theme.logoClass}`}
                            style={{ transform: isScrolled ? "scale(0.85)" : "scale(1)" }}
                        />
                    ) : null}
                </Link>

                <div className="hidden items-center gap-10 md:flex" ref={navRef}>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            item={item}
                            isActive={pathname === item.href || pathname?.startsWith(item.href + "/")}
                            theme={theme}
                            isServicesOpen={activeDropdown === item.id}
                            onClick={() => item.hasDropdown ? toggleDropdown(item.id) : setActiveDropdown(null)}
                        />
                    ))}
                </div>
            </motion.nav>

            <AnimatePresence mode="wait">
                {activeDropdown === "services" && (
                    <ServicesDropdown key="services" onClose={() => setActiveDropdown(null)} />
                )}
                {activeDropdown === "conferences" && (
                    <ConferencesDropdown key="conferences" onClose={() => setActiveDropdown(null)} />
                )}
            </AnimatePresence>
        </motion.header>
    );
}