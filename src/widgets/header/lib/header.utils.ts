export const isDarkHeaderPage = (pathname?: string) => {
    if (!pathname) return false;
    return pathname.startsWith("/services/design") || pathname.startsWith("/services/human");
};

export const getHeaderStyles = (pathname: string, isOpen: boolean, isScrolled: boolean) => {
    const isDark = isDarkHeaderPage(pathname);

    if (isOpen || isScrolled) {
        return {
            nav: "text-white hover:text-white/70",
            underline: "bg-white",
            logoClass: "brightness-0 invert"
        };
    }

    return {
        nav: isDark ? "text-black hover:text-black/70" : "text-white/80 hover:text-white",
        underline: isDark ? "bg-black" : "bg-white",
        logoClass: ""
    };
};