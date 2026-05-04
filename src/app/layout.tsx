import type {Metadata} from "next";
import {Source_Serif_4, Barlow} from "next/font/google";
import "./styles/globals.css";
import "./styles/main.scss";
import {Header} from "@/widgets/header";
import {SmoothScrollProvider} from "@/components/smooth-scroll-provider";
import {ReCaptchaProvider} from "@/shared/providers/ReCaptchaProvider";
import {FooterWrapper} from "@/widgets/footer/footerWrapper";
import {QueryProvider} from "@/shared/providers/QueryProvider";


const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-source-serif",
});

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-barlow",
});

export const metadata: Metadata = {
    title: "Multi-font",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning className={`${sourceSerif.variable} ${barlow.variable}`}>
        <body>
        <SmoothScrollProvider>
            <QueryProvider>
                <div className="flex min-h-screen flex-col">
                    <Header/>
                    <ReCaptchaProvider>
                        {children}
                    </ReCaptchaProvider>
                    <FooterWrapper/>
                </div>
            </QueryProvider>
        </SmoothScrollProvider>
        </body>
        </html>
    );
}
