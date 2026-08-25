import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0F] text-[#E5E7EB] px-5 sm:px-[30px] py-12 md:py-20">
            <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-[30px]  mt-12">
                <h1 className="text-3xl sm:text-4xl font-bold my-6 md:my-8 text-white">
                    Privacy Policy
                </h1>

                <p className="text-base sm:text-sm text-[#9CA3AF] mb-6 md:mb-8">
                    Effective Date: June 6, 2026 <br />
                    Last Updated: June 6, 2026
                </p>

                <p className="text-base sm:text-lg mb-6 leading-8">
                    NeurOn Talks (“we,” “our,” or “us”) respects your privacy and is
                    committed to protecting your personal information.
                </p>

                <p className="text-base sm:text-lg mb-10 leading-8">
                    This Privacy Policy explains how we collect, use, disclose, and
                    safeguard information when you visit our website or interact with our
                    Services.
                </p>

                <Section title="1. Information We Collect">
                    <h3 className="text-lg sm:text-xl font-medium text-white mt-4 mb-2">
                        Personal Information
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company name</li>
                        <li>Job title</li>
                        <li>Information submitted through forms or consultations</li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-medium text-white mt-6 mb-2">
                        Technical & Usage Information
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Session duration</li>
                        <li>Referral source</li>
                        <li>Interaction behavior</li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-medium text-white mt-6 mb-2">
                        Cookies & Tracking Data
                    </h3>

                    <p>
                        We may use cookies, analytics tools, and tracking technologies to
                        understand user behavior and improve website functionality and
                        marketing performance.
                    </p>
                </Section>

                <Section title="2. How We Use Information">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to inquiries</li>
                        <li>Schedule consultations</li>
                        <li>Deliver Services</li>
                        <li>Improve website functionality</li>
                        <li>Analyze user behavior</li>
                        <li>Personalize user experience</li>
                        <li>Send updates or marketing communications</li>
                        <li>Measure campaign effectiveness</li>
                        <li>Maintain website security</li>
                    </ul>
                </Section>

                <Section title="3. Behavioral Analytics & Marketing">
                    <p>
                        As a neuromarketing and behavioral strategy business, we may analyze
                        aggregated user interaction patterns to improve communication
                        effectiveness, website usability, and marketing performance.
                    </p>

                    <p className="mt-4">
                        We do not use behavioral analysis to manipulate users or exploit
                        sensitive personal vulnerabilities.
                    </p>
                </Section>

                <Section title="4. Legal Basis for Processing (GDPR)">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Consent</li>
                        <li>Contractual necessity</li>
                        <li>Legitimate business interests</li>
                        <li>Legal obligations</li>
                    </ul>
                </Section>

                <Section title="5. Sharing of Information">
                    <p>We do not sell personal information.</p>

                    <p className="mt-4 mb-4">
                        We may share information with trusted third-party providers that
                        support our operations, including:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Analytics providers</li>
                        <li>CRM platforms</li>
                        <li>Email marketing systems</li>
                        <li>Scheduling tools</li>
                        <li>Payment processors</li>
                        <li>Website hosting providers</li>
                    </ul>
                </Section>

                <Section title="6. Data Retention">
                    <p>
                        We retain personal information only as long as reasonably necessary
                        for business operations, legal compliance, service delivery,
                        analytics and reporting, and security purposes.
                    </p>
                </Section>

                <Section title="7. Data Security">
                    <p>
                        We implement reasonable technical and organizational safeguards
                        designed to protect personal information.
                    </p>

                    <p className="mt-4">
                        However, no method of internet transmission or electronic storage is
                        completely secure, and we cannot guarantee absolute security.
                    </p>
                </Section>

                <Section title="8. Your Rights">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion</li>
                        <li>Withdraw consent</li>
                        <li>Restrict processing</li>
                        <li>Object to certain processing activities</li>
                        <li>Request data portability</li>
                    </ul>
                </Section>

                <Section title="9. Third-Party Links">
                    <p>
                        Our website may contain links to external websites or services not
                        operated by NeurOn Talks.
                    </p>

                    <p className="mt-4">
                        We are not responsible for third-party privacy practices or content.
                    </p>
                </Section>

                <Section title="10. Children's Privacy">
                    <p>
                        This website and Services are not intended for individuals under the
                        age of 13 (or the minimum age required by local law).
                    </p>

                    <p className="mt-4">
                        We do not knowingly collect personal information from children.
                    </p>
                </Section>

                <Section title="11. International Users">
                    <p>
                        If you access the website from outside our operating jurisdiction,
                        you acknowledge that your information may be transferred and
                        processed in jurisdictions with different data protection laws.
                    </p>
                </Section>

                <Section title="12. Updates to This Privacy Policy">
                    <p>We may revise this Privacy Policy periodically.</p>

                    <p className="mt-4">
                        Updated versions will be posted on this page with a revised “Last
                        Updated” date.
                    </p>
                </Section>

                <Section title="13. Contact Information">
                    <p className="mb-2 font-medium text-white">NeurOn Talks</p>
                    <p>Email: contact@neurontalks.am</p>
                </Section>
            </div>
        </div>
    );
};

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
    return (
        <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {title}
            </h2>

            <div className="space-y-4 text-base text-[#D1D5DB] leading-8">
                {children}
            </div>
        </section>
    );
};

export default PrivacyPolicy;