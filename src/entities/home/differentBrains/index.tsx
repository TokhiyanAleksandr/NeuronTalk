import {SlideButton} from "@/shared/ui/slideButton";
import {Section} from "@/shared/ui/section";
import {HomeResponse} from "@/entities/home/Model/type";
import style from "./style.module.scss"

interface IProps {
    data: HomeResponse['get_in_touch']
}

export const DifferentBrains = ({ data }: IProps) => {
    console.log(data, 'data111')
    return (
        <div className={style.differentBrains}>
            {/*<Section className="mb-0! w-full flex flex-col md:flex-row items-center justify-between gap-10">*/}

                <div className="max-w-[700px] text-black pl-15">
                    <h2 className={style.title}>
                        {data?.title}
                    </h2>

                    <p className={style.description}>
                        {data?.description}
                    </p>

                    <SlideButton
                        href={data?.button_link || "contact"}
                        textColor="white"
                        bgColor="#141614"
                        borderColor="#141614"
                        hoverBgColor="#fff"
                        hoverTextColor="black"
                    >
                        {data?.button_title}
                    </SlideButton>
                </div>

                <div className="w-full">
                    <img src={data?.image || ""} alt="" />
                </div>

            {/*</Section>*/}
        </div>
    );
};