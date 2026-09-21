"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="ВАШ_SITE_KEY"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
};