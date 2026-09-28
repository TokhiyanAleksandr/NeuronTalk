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
    hoverBorderColor?: string;
    disabled?: boolean;
    textSize?: string;
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
                                hoverTextColor = "#fff",
                                hoverBgColor = "black",
                                hoverBorderColor = "#fff",
                                disabled = false,
                                textSize = "20px"
                            }: ButtonProps) => {

    const isLink = Boolean(href);
    const Tag = isLink ? Link : "button";

    const cursorStyle = disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer";

    const getFontSize = (size: string) => {
        if (size.startsWith("text-[") && size.endsWith("]")) {
            return size.slice(6, -1);
        }
        return size;
    };

    const commonProps = {
        style: {
            "--text-color": textColor,
            "--bg-color": bgColor,
            "--border-color": borderColor,
            "--hover-text-color": hoverTextColor,
            "--hover-bg-color": hoverBgColor,
            "--hover-border-color": hoverBorderColor,
        } as React.CSSProperties,
        className: `relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest uppercase transition-colors duration-300 group overflow-hidden ${cursorStyle} ${width} ${height} ${className}`,
        onClick: disabled ? undefined : onClick,
        disabled: !isLink ? disabled : undefined,
    };

    const tagProps = isLink
        ? { href: href as string, target: '_blank' }
        : { type };

    return (
        <Tag {...(tagProps as any)} {...commonProps}>
            {/* Основной фон */}
            <span
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: "var(--bg-color)" }}
            />

            {/* Выезжающий фон при ховере */}
            <span
                className={`absolute inset-0 -translate-x-full ${!disabled ? "group-hover:translate-x-0" : ""} transition-transform duration-500 ease-[0.19,1,0.22,1]`}
                style={{ backgroundColor: "var(--hover-bg-color)" }}
            />

            {/* Статическая рамка */}
            <span
                className="absolute inset-0 border pointer-events-none transition-colors duration-500"
                style={{ borderColor: "var(--border-color)" }}
            />

            {/* Рамка при ховере */}
            <span
                className="absolute inset-0 border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: "var(--hover-border-color)" }}
            />

            {/* Текст кнопки */}
            <span className="relative z-10">
                <span suppressHydrationWarning
                    className="transition-colors duration-500"
                    style={{
                        // Меняем цвет текста через CSS-переменную при наведении на родительский .group
                        color: disabled ? "var(--text-color)" : undefined,
                        fontSize: getFontSize(textSize)
                    }}
                >
                    <style jsx>{`
                        span {
                            color: var(--text-color);
                        }
                        .group:hover span {
                            color: ${disabled ? "var(--text-color)" : "var(--hover-text-color)"};
                        }
                    `}</style>
                    {children}
                </span>
            </span>
        </Tag>
    );
};