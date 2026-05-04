import Link from "next/link";
import { motion } from "framer-motion";

const years = [2026, 2025, 2024];

export function ConferencesDropdown({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 w-full bg-[#1E1E1E] text-white py-12 border-t border-white/5"
        >
            <div className="max-w-[1680px] m-auto text-center flex  justify-center items-center flex-col gap-y-5">
                {years.map((year) => (
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
            </div>
        </motion.div>
    );
}