'use client';

import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
            <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <h1 className="text-[120px] font-bold leading-none tracking-widest text-white drop-shadow-lg md:text-[180px]">
                    404
                </h1>
                <h2 className="text-2xl font-semibold uppercase tracking-[4px] text-zinc-200 md:text-3xl">
                    Page Not Found
                </h2>
                <p className="max-w-md text-sm text-zinc-400 md:text-base">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/">
                    <button className="mt-4 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-medium uppercase tracking-[2px] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;