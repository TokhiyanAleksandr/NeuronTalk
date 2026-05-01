import {SlideButton} from "@/shared/ui/slideButton";
import {Section} from "@/shared/ui/section";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['get_in_touch']
}

export const DifferentBrains = ({data}: IProps) => {
    return (
        <div>
            <div className="flex justify-center bg-[#fe968e]">
                <Section className="mb-0! w-full flex items-center justify-between ">
                    <div className="max-w-177.5  text-black px-[10px]">
                        <h2 className="serif text-[3.75rem] leading-12 font-semibold">
                            {data.title}
                        </h2>
                        <p className="my-10 text-[1.125rem] font-medium">
                            {data.description}
                        </p>

                        <SlideButton
                            href={data.button_link || "contact"}
                            textColor="white"
                            bgColor="black"
                            borderColor="black"
                            hoverBgColor="white"
                            hoverTextColor="black"
                        >
                            {data.button_title}
                        </SlideButton>
                    </div>
                    <div className="w-full max-w-206.5">
                        <img src={data.image || ""} alt="" title=""/>
                    </div>
                </Section>
            </div>
        </div>
    );
};
;