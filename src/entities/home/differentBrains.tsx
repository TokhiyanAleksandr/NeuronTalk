import {SlideButton} from "@/shared/ui/slideButton";
import {Section} from "@/shared/ui/section";


export const DifferentBrains = () => {
    return (
        <div>
            <div className="flex justify-center bg-[#fe968e]">
                <Section className="mb-0! w-full flex items-center justify-between ">
                    <div className="max-w-177.5  text-black px-[10px]">
                        <h2 className="serif text-[3.75rem] leading-12 font-semibold">
                            Different brains, the same heart
                        </h2>
                        <p className="my-10 text-[1.125rem] font-medium">
                            At our agency, you’ll have the opportunity to showcase your skills. Explore our current
                            vacancies, reach out to us, and we hope to welcome you soon to our dynamic team of
                            communication
                            professionals. Build your career and contribute to groundbreaking brand strategies that
                            make
                            an
                            impact and a difference.
                        </p>

                        <SlideButton
                            href="/contact"
                            textColor="white"
                            bgColor="black"
                            borderColor="black"
                            hoverBgColor="white"
                            hoverTextColor="black"
                        >
                            Get in touch
                        </SlideButton>
                    </div>
                    <div className="w-full max-w-206.5">
                        <img src="/careers.webp" alt="" title=""/>
                    </div>
                </Section>
            </div>
        </div>
    );
};
;