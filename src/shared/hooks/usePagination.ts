import { useState } from "react";

export const usePagination = <T>(initialData: T) => {
    const [data, setData] = useState<T>(initialData);

    const fetchPage = async (url: string) => {
        const res = await fetch(url);
        const json: T = await res.json();
        setData(json);

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {
        data,
        fetchPage,
    };
};