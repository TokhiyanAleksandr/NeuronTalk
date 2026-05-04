"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
    href?: string; // Теперь необязательный
    onClick?: () => void; // Добавляем обработчик клика
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    className?: string;
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
                                textColor = "black",
                                bgColor = "white",
                                borderColor = "white",
                                hoverTextColor = "white",
                                hoverBgColor = "black",
                                disabled = false
                            }: ButtonProps) => {

    // Определяем, какой тег использовать
    const isLink = Boolean(href);
    const Tag = isLink ? Link : "button";

    // Собираем общие пропсы
    const commonProps = {
        style: {
            "--text-color": textColor,
            "--bg-color": bgColor,
            "--border-color": borderColor,
            "--hover-text-color": hoverTextColor,
            "--hover-bg-color": hoverBgColor,
        } as React.CSSProperties,
        className: `relative inline-block px-8 py-4 font-bold tracking-widest uppercase text-[11px] transition-colors duration-300 group overflow-hidden ${className}`,
        onClick: disabled ? undefined : onClick,
    };
    const tagProps = isLink
        ? { href: href as string }
        : { type: type as "button" | "submit" | "reset" };
    return (
        <Tag {...(tagProps as any)} {...commonProps}>
            {/* Фон и анимация (содержимое остается прежним) */}
            <span
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: "var(--bg-color)" }}
            />

            <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.19,1,0.22,1]"
                style={{ backgroundColor: "var(--hover-bg-color)" }}
            />

            <span
                className="absolute inset-0 border pointer-events-none"
                style={{ borderColor: "var(--border-color)" }}
            />

            <span
                className="relative z-10 transition-colors duration-500"
                style={{ color: "var(--text-color)" }}
            >
                <span className="group-hover:text-[var(--hover-text-color)] transition-colors duration-500">
                    {children}
                </span>
            </span>
        </Tag>
    );
};