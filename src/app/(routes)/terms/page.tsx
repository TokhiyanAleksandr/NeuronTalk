const Terms = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0F] text-[#E5E7EB] px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold my-8 text-white">
                    Terms & Conditions
                </h1>

                <p className="text-sm text-[#9CA3AF] mb-8">
                    Effective Date: June 6, 2026
                    <br/>
                    Last Updated: June 6, 2026
                </p>

                <p className="mb-6">
                    Welcome to NeurOn Talks (“Company,” “we,” “our,” or “us”).
                    By accessing or using this website, services, content,
                    consultations, or related platforms (collectively, the “Services”),
                    you agree to comply with and be bound by these Terms & Conditions.
                </p>

                <p className="mb-10">
                    If you do not agree with these Terms, please do not use this
                    website or our Services.
                </p>

                <Section title="1. About NeurOn Talks">
                    <p>
                        NeurOn Talks is a neuromarketing and behavioral strategy
                        business focused on helping brands improve communication
                        clarity, user engagement, customer understanding, and
                        conversion performance through ethical behavioral science
                        and marketing strategy.
                    </p>
                </Section>

                <Section title="2. Acceptance of Terms">
                    <p>
                        By accessing this website, booking a consultation,
                        submitting a form, downloading materials, or engaging with
                        our Services, you acknowledge that you have read,
                        understood, and agreed to these Terms.
                    </p>
                </Section>

                <Section title="3. Use of Website">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Copy or reproduce website content without permission
                        </li>
                        <li>
                            Attempt unauthorized access to systems or servers
                        </li>
                        <li>
                            Use automated systems to scrape or harvest data
                        </li>
                        <li>
                            Upload malicious code or disruptive technology
                        </li>
                        <li>
                            Misrepresent identity or affiliation
                        </li>
                        <li>
                            Use the website for unlawful purposes
                        </li>
                    </ul>
                </Section>

                <Section title="4. Intellectual Property">
                    <p>
                        All content, branding, frameworks, methodologies,
                        graphics, text, designs, research interpretations,
                        strategies, reports, videos, downloadable materials,
                        and other assets are the intellectual property of
                        NeurOn Talks unless otherwise stated.
                    </p>
                </Section>

                <Section title="5. Ethical Use of Behavioral Science">
                    <p>
                        NeurOn Talks applies behavioral science and
                        neuromarketing principles ethically to improve
                        communication clarity, customer understanding,
                        and user experience.
                    </p>
                </Section>

                <Section title="6. No Guaranteed Results">
                    <p>
                        We do not guarantee specific business outcomes,
                        including revenue growth, conversion increases,
                        lead generation, advertising performance,
                        or customer acquisition metrics.
                    </p>
                </Section>

                <Section title="7. Informational & Educational Disclaimer">
                    <p>
                        Content provided on this website is for informational
                        and educational purposes only and does not constitute
                        medical, psychological, financial, or legal advice.
                    </p>
                </Section>

                <Section title="8. Third-Party Services & Links">
                    <p>
                        We are not responsible for the content, security,
                        or policies of third-party websites or services.
                    </p>
                </Section>

                <Section title="9. Discovery Calls & Consultations">
                    <p>
                        Booking a consultation does not establish a formal
                        client relationship unless explicitly agreed in writing.
                    </p>
                </Section>

                <Section title="10. Payments & Client Agreements">
                    <p>
                        Certain Services may require separate written
                        agreements, invoices, or contracts with additional
                        terms and conditions.
                    </p>
                </Section>

                <Section title="11. Confidentiality">
                    <p>
                        We respect confidential information shared during
                        consultations and engagements; however, information
                        submitted through unsecured forms or email may not
                        be considered confidential.
                    </p>
                </Section>

                <Section title="12. Limitation of Liability">
                    <p>
                        To the fullest extent permitted by law,
                        NeurOn Talks shall not be liable for indirect,
                        incidental, or consequential damages arising
                        from use of this website or Services.
                    </p>
                </Section>

                <Section title="13. Website Availability">
                    <p>
                        We do not guarantee uninterrupted access to the
                        website and may modify or discontinue Services
                        at any time.
                    </p>
                </Section>

                <Section title="14. Privacy">
                    <p>
                        Your use of this website is also governed by
                        our Privacy Policy.
                    </p>
                </Section>

                <Section title="15. Cookies & Tracking Technologies">
                    <p>
                        This website may use cookies and tracking technologies
                        to improve user experience and marketing performance.
                    </p>
                </Section>

                <Section title="16. Indemnification">
                    <p>
                        You agree to indemnify and hold harmless
                        NeurOn Talks from claims arising from your
                        misuse of the website or Services.
                    </p>
                </Section>

                <Section title="17. Governing Law">
                    <p>
                        These Terms shall be governed by the laws of:
                        [Insert Country/State/Jurisdiction]
                    </p>
                </Section>

                <Section title="18. Changes to These Terms">
                    <p>
                        We may update these Terms at any time without
                        prior notice. Continued use of the website
                        constitutes acceptance of revised Terms.
                    </p>
                </Section>

                <Section title="19. Contact Information">
                    <p className="font-medium text-white mb-2">
                        NeurOn Talks
                    </p>

                    <p>Email: aramdev22@duck.com</p>
                    {/*<p>Website: [Insert Website URL]</p>*/}
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
            <h2 className="text-2xl font-semibold mb-4 text-white">
                {title}
            </h2>

            <div className="space-y-3 text-[#D1D5DB] leading-7">
                {children}
            </div>
        </section>
    );
};

export default Terms;