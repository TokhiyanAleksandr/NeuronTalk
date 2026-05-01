"use client";

import React from 'react';
import styles from './style.module.scss';
import {Section} from "@/shared/ui/section";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    isTitle?: boolean,
    data: HomeResponse['partners']
}

export const ClientsMarquee = ({isTitle = true, data}: IProps) => {
    return (
        <Section>
            {
                isTitle &&
                <div className="text-center">
                    <div className="w-9 h-9 mb-13.75 m-auto">
                        <img src="/arrow-down-white.svg" alt="" title=""/>
                    </div>
                    <p className="serif text-[23px] font-medium">
                        {data.title}
                    </p>
                </div>
            }
            <div className={`w-full  pt-11.5 overflow-hidden relative `}>
                <div className={styles.marqueeContainer}>
                    {data.data.map((client, index) => (
                        <div
                            key={index}
                            className={styles.marqueeItem}
                        >
                            <img
                                src={client.logo || ""}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/150?text=Logo";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};