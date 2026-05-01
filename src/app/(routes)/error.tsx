'use client';

import React from 'react';
import Link from 'next/link';

const Error = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-zinc-900 to-black text-white">
            <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
                <h1 className="text-6xl font-bold uppercase tracking-[4px] text-white md:text-7xl">
                    Error
                </h1>
                <h2 className="text-xl font-medium text-zinc-200 md:text-2xl">
                    Oops! Something went wrong
                </h2>
                <p className="max-w-md text-sm text-zinc-400 md:text-base">
                    An unexpected error occurred. Please try again later or return to the homepage.
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

export default Error;