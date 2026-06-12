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

export function extractYear(item: { title?: string; slug?: string }): string {
    const yearRegex = /\b(20\d{2})\b/;

    const slugMatch = item?.slug?.match(yearRegex);
    if (slugMatch) return slugMatch[1];

    const titleMatch = item?.title?.match(yearRegex);
    if (titleMatch) return titleMatch[1];

    return "";
}