"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LearnMoreLink } from "@/shared/ui/learnMoreLink";
import {getServicesData} from "@/entities/services/Model/api";
import {useQuery} from "@tanstack/react-query";


export function ServicesDropdown({ onClose }: { onClose: () => void }) {

    const { data } = useQuery({
        queryKey: ["services"],
        queryFn: getServicesData,
        staleTime: 1000 * 60 * 10,
    });
    console.log(data, 'data888')
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 w-full bg-[#1E1E1E] border-t border-white/10"
            style={{ top: "100%" }}
        >
            <div className="max-w-[1680px] m-auto grid md:grid-cols-4 h-[400px]">
                {data?.data?.map((service, index) => (
                    <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        style={{ backgroundColor: service.service_color }}
                        className="group relative overflow-hidden flex items-center justify-center transition-transform hover:z-10"
                        onClick={onClose}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                        />
                        <div className="relative z-20 text-center">
                            <h3 className="serif text-3xl font-medium" style={{ color: '#000' }}>
                                {service.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="py-10 text-center bg-[#1E1E1E]">
                <LearnMoreLink href="/services">All Services</LearnMoreLink>
            </div>
        </motion.div>
    );
}