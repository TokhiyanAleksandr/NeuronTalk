'use client';

import { usePathname } from 'next/navigation';
import { Footer } from "@/shared/ui";

export function FooterWrapper() {
    const pathname = usePathname();

    // Список страниц, где футер НЕ нужен в общем Layout
    const hiddenRoutes = ['/conferences', '/nt2024'];
    const isHidden = hiddenRoutes.some(route => pathname?.startsWith(route));

    if (isHidden) return null;

    return <Footer />;
}