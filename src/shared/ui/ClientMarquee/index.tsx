"use client";

import React from 'react';
import styles from './style.module.scss';
import {Section} from "@/shared/ui/section";


const clients = [
    {id: 1, name: 'Client 1', logo: '/client-logo-oceanco.svg'},
    {id: 2, name: 'Client 2', logo: '/client-logo-aliaxis.svg'},
    {id: 3, name: 'Client 3', logo: '/over-ons-logo-ifs-ultimo-about-us-grid-brands.svg'},
    {id: 6, name: 'Client 6', logo: '/client-logo-repsol.svg'},
    {id: 4, name: 'Client 4', logo: '/client-logo-vetus.svg'},
    {id: 5, name: 'Client 5', logo: '/client-logo-partspoint.svg'},
];

interface IProps {
    title?: boolean,
}

export const ClientsMarquee = ({title = true}: IProps) => {
    const allClients = [...clients, ...clients, ...clients];

    return (
        <Section>
            {
                title &&
                <div className="text-center">
                    <div className="w-9 h-9 mb-13.75 m-auto">
                        <img src="/arrow-down-white.svg" alt="" title=""/>
                    </div>
                    <p className="serif text-[23px] font-medium">
                        We work for brands that lead the way
                    </p>
                </div>
            }
            <div className={`w-full  pt-11.5 overflow-hidden relative `}>
                <div className={styles.marqueeContainer}>
                    {allClients.map((client, index) => (
                        <div
                            key={index}
                            className={styles.marqueeItem}
                        >
                            <img
                                src={client.logo}
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