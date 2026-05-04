import { useState } from "react";
import {X_FRONTEND_KEY} from "@/shared/constants/app";

export const usePagination = <T>(initialData: T) => {
    const [data, setData] = useState<T>(initialData);

    const fetchPage = async (url: string) => {
        const res = await fetch(url, {
            headers: {
                'X-FRONTEND-KEY': X_FRONTEND_KEY,
            },
        });
        const json = await res.json();

        setData(json);

        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    };

    return {
        data,
        fetchPage,
    };
};