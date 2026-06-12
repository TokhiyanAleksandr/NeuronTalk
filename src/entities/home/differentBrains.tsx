import {SlideButton} from "@/shared/ui/slideButton";
import {Section} from "@/shared/ui/section";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['get_in_touch']
}

export const DifferentBrains = ({ data }: IProps) => {
    return (
        <div className="flex justify-center bg-[#fe968e]">
            <Section className="mb-0! w-full flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="max-w-[700px] text-black px-4 md:px-0">
                    <h2 className="serif text-3xl md:text-[3.75rem] leading-tight font-semibold mt-2">
                        {data?.title}
                    </h2>

                    <p className="my-6 md:my-10 text-[1.125rem] font-medium">
                        {data?.description}
                    </p>

                    <SlideButton
                        href={data?.button_link || "contact"}
                        textColor="white"
                        bgColor="black"
                        borderColor="black"
                        hoverBgColor="white"
                        hoverTextColor="black"
                    >
                        {data?.button_title}
                    </SlideButton>
                </div>

                <div className="w-full max-w-206.5">
                    <img src={data?.image || ""} alt="" />
                </div>

            </Section>
        </div>
    );
};