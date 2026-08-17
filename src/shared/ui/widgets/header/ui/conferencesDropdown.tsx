import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {getConferencesData} from "@/entities/conferences/Model/api";
import {extractYear} from "@/shared/ui/widgets/header/lib/header.utils";



export function ConferencesDropdown({ onClose }: { onClose: () => void }) {
    const { data: rawData } = useQuery({
        queryKey: ["conferences"],
        queryFn: () => getConferencesData(),
        staleTime: 1000 * 60 * 10,
    });


    const conferencesArray = rawData?.data || [];

    const uniqueYears = Array.from(
        new Set(
            conferencesArray
                .map((item: any) => extractYear(item))
                .filter((year: string) => year !== "")
        )
    ) as string[];

    const sortedYears = uniqueYears.sort((a, b) => Number(b) - Number(a));

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 w-full bg-[#1E1E1E] text-white py-12 border-t border-white/5"
        >
            <div className="max-w-[1680px] m-auto text-center flex  justify-center items-center flex-col gap-y-5">
                {sortedYears.map((year) => (
                    <Link
                        key={year}
                        href={`/conferences/${year}`}
                        onClick={onClose}
                        className="group flex flex-col gap-2"
                    >
                        <span className="text-5xl serif">
                            <span className="text-2xl">NT</span> {year}
                        </span>
                    </Link>
                ))}

                {sortedYears.length === 0 && (
                    <span className="text-gray-500 text-lg">Конференции не найдены</span>
                )}
            </div>
        </motion.div>
    );
}