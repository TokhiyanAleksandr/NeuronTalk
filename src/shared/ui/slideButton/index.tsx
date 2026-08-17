"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    className?: string;
    width?: string;
    height?: string;
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    disabled?: boolean;
}

export const SlideButton = ({
                                href,
                                onClick,
                                type = "button",
                                children,
                                className = "",
                                width = "w-auto",
                                height = "h-auto",
                                textColor = "black",
                                bgColor = "white",
                                borderColor = "white",
                                hoverTextColor = "white",
                                hoverBgColor = "black",
                                disabled = false
                            }: ButtonProps) => {

    const isLink = Boolean(href);
    const Tag = isLink ? Link : "button";

    // Указываем нужный курсор в зависимости от disabled
    const cursorStyle = disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer";

    const commonProps = {
        style: {
            "--text-color": textColor,
            "--bg-color": bgColor,
            "--border-color": borderColor,
            "--hover-text-color": hoverTextColor,
            "--hover-bg-color": hoverBgColor,
        } as React.CSSProperties,
        className: `relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest uppercase text-[11px] transition-colors duration-300 group overflow-hidden ${cursorStyle} ${width} ${height} ${className}`,
        onClick: disabled ? undefined : onClick,
        disabled: !isLink ? disabled : undefined,
    };

    const tagProps = isLink
        ? { href: href as string, target: '_blank' }
        : { type };

    return (
        <Tag {...(tagProps as any)} {...commonProps}>
            {/* Фон базовый */}
            <span
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: "var(--bg-color)" }}
            />

            {/* Slide-анимация фона (не срабатывает hover, если disabled) */}
            <span
                className={`absolute inset-0 -translate-x-full ${!disabled ? "group-hover:translate-x-0" : ""} transition-transform duration-500 ease-[0.19,1,0.22,1]`}
                style={{ backgroundColor: "var(--hover-bg-color)" }}
            />

            {/* Бордер */}
            <span
                className="absolute inset-0 border pointer-events-none"
                style={{ borderColor: "var(--border-color)" }}
            />

            {/* Текст */}
            <span
                className="relative z-10 transition-colors duration-500"
                style={{ color: "var(--text-color)" }}
            >
                <span className={`${!disabled ? "group-hover:text-[var(--hover-text-color)]" : ""} transition-colors duration-500`}>
                    {children}
                </span>
            </span>
        </Tag>
    );
};