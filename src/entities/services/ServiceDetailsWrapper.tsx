"use client"

import {IService} from "@/entities/services/Model/type";

interface IProps {
    data: IService
}

const ServiceDetailsWrapper = ({data}: IProps) => {
    return (
        <>
            <div className="bg-[#FAE232] text-black px-4 md:px-6 pb-16">
                <div className="max-w-[1680px] mx-auto pt-20 md:pt-[120px]">
                    <div className="flex flex-col 2xl:flex-row gap-0 2xl:gap-10 2xl:h-[1000px]">
                        <div className="pt-12 relative z-10 max-w-[1160px]">
                            <p className="mb-8 md:mb-15 text-[16px] md:text-[21px] uppercase font-semibold tracking-[3px]">
                                {data?.title}
                            </p>
                            <h1 className="serif font-semibold text-3xl sm:text-5xl md:text-[80px] leading-tight">
                                {data?.subTitle}
                            </h1>
                            <p className="max-w-[825px] mt-8 md:mt-15 text-[18px] md:text-[24px] font-medium">
                                {data?.description}
                            </p>
                        </div>
                        <div className="w-full 2xl:w-[40%] 2xl:h-[60%] relative 2xl:absolute right-0 mt-10 2xl:mt-0">
                            <img
                                src={data?.image || ""}
                                alt=""
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="min-h-screen min-h-[2150px] pt-[10rem] bg-linear-to-b from-[#FAE232] to-black">*/}
            {/*    <div className="max-w-[1680px] m-auto">*/}
            {/*        <div className="flex justify-center items-center max-w-[420px] flex-col m-auto  text-center">*/}
            {/*            <h2 className="leading-[65px] font-semibold mb-15 text-[4.0rem] serif">Neuroscience as a*/}
            {/*                guide </h2>*/}
            {/*            <span className={styles.stripe}/>*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <div className="max-w-[672px] ">*/}
            {/*                <h3 className="serif font-semibold text-[40px] mb-[20px]">Bring brands to life</h3>*/}
            {/*                <p className="text-[21px] font-semibold">*/}
            {/*                    A creative translation of your brand must be applicable online and offline. We know how*/}
            {/*                    to make design plausible and attractive to different <Link className="underline"*/}
            {/*                                                                               href="#"> thinking*/}
            {/*                    styles </Link>*/}
            {/*                    in the brain. In this way we ensure that every means of communication and every message*/}
            {/*                    reinforces your*/}
            {/*                    <Link className="underline" href="#"> image </Link> in the market at all times.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="w-[100%] max-w-[812px]">*/}
            {/*                <img src="/services/design/Breng-merken-tot-leven.png" alt="" title=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center justify-between mt-[5rem]">*/}
            {/*            <div className="w-[100%] max-w-[812px]">*/}
            {/*                <img src="/services/design/design-E.png" alt="" title=""/>*/}
            {/*            </div>*/}
            {/*            <div className="max-w-[672px] ">*/}
            {/*                <h3 className="serif font-semibold text-[40px] mb-[20px]">Bring brands to life</h3>*/}
            {/*                <p className="text-[21px] font-semibold">*/}
            {/*                    Standing out is not difficult. Unless form and content must fit within existing*/}
            {/*                    frameworks. Or have to fit seamlessly with your organization’s identity. In such cases,*/}
            {/*                    we provide you with a unique story, a striking brand promise and an eye-catching <Link*/}
            {/*                    className="underline"*/}
            {/*                    href="#"> design </Link>. Effective creativity that pinpoints exactly what your brand*/}
            {/*                    stands for.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="max-w-420 m-auto mb-40">*/}
            {/*    <h2 className="serif font-semibold text-[3.75rem] mb-[2.5rem]">Design</h2>*/}

            {/*    <div className=" grid grid-cols-4 gap-[20px] sm:grid-cols-2 lg:grid-cols-2">*/}

            {/*        {data?.processSteps.map((step, index) => (*/}
            {/*            <motion.div*/}
            {/*                key={step.title}*/}
            {/*                initial={{opacity: 0, y: 30}}*/}
            {/*                whileInView={{opacity: 1, y: 0}}*/}
            {/*                viewport={{once: true}}*/}
            {/*                transition={{delay: index * 0.15, duration: 0.6}}*/}
            {/*                className="flex flex-col"*/}
            {/*            >*/}
            {/*                <div*/}
            {/*                    className="flex p-[2.5rem] min-h-[270px] justify-between items-center bg-[#FAE232] text-black">*/}
            {/*                    <div className="h-[100%] justify-between flex flex-col">*/}
            {/*                        <h2 className="serif text-[2.125rem] font-semibold">{step.title}</h2>*/}
            {/*                        <p className="text-[20px] font-medium">{step.description}</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-[55px] h-[50px] ">*/}
            {/*                        <img src="/arrow-right.svg" alt="" title=""/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </motion.div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="max-w-420 m-auto mb-40">*/}
            {/*    <div className="m-auto  text-center">*/}
            {/*        <h2 className="leading-[65px] font-semibold mb-15 text-[4.0rem] serif">*/}
            {/*            The best insights*/}
            {/*        </h2>*/}
            {/*        <span className={styles.stripe}/>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center justify-between">*/}
            {/*        <div className="max-w-[672px] ">*/}
            {/*            <h3 className="serif font-semibold text-[40px] mb-[20px]">Brand Monitor</h3>*/}
            {/*            <p className="text-[21px] font-semibold">*/}
            {/*                What makes your brand unique? What resources and stories do you need to have this? What*/}
            {/*                thinking*/}
            {/*                styles in the brain are you addressing with this? And which ones are you not addressing? We*/}
            {/*                map*/}
            {/*                this out with the Brand Monitor from BrainSells®, our*/}
            {/*                <Link className="underline" href="#"> method </Link> for approaching a communication issue*/}
            {/*                from different thinking*/}
            {/*                styles. This is how we determine what concept, message, means and design will provide the*/}
            {/*                best*/}
            {/*                results.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="w-[100%] max-w-[812px]">*/}
            {/*            <img src="/services/design/Service-Design-diagram.png" alt="" title=""/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className="max-w-420 m-auto mb-40">*/}
            {/*    <ParallaxGrid projects={projects}/>*/}
            {/*</div>*/}

            {/*<Insights insights={insights}/>*/}
        </>
    );
};

export default ServiceDetailsWrapper;