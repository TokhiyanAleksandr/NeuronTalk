import {Section, ScrollContainer, AvatarStack, Showcase} from '@/entities/conferences';
import styles from './style.module.scss';
import {SlideButton,Footer} from "@/shared/ui";
import {EventShowcase} from "@/entities/conferences/EventShowcase";
import {UpcomingEvents} from "@/entities/conferences/UpcomingEvents";
import {Speakers} from "@/entities/conferences/Speakers";
import {Partners} from "@/entities/conferences/Partners";
import {getConferenceData} from "@/entities/conferences/Model/api";

interface IProps {
    params: Promise<{ year: string }>;
}

export default async function Conference({params}: IProps) {
    const { year } = await params;

    const data = await getConferenceData(year);


    // const conferencesArray = rawData?.data || [];

    // const data = conferencesArray.find((item: any) =>
    //     item.title?.includes(year) || item.slug?.includes(year)
    // );

    if (!data) {
        return (
            <div className="text-white text-center py-20">
                Конференция на {year} год не найдена в базе данных.
            </div>
        );
    }

    return (
        <ScrollContainer>
            <Section className={styles.slide}>
                {data?.main_image && (
                    <div className={styles.imgBanner}>
                        <img src={data.main_image} alt={data.title || ''} title=""/>
                    </div>
                )}
                <div className={styles.bodyBanner}>
                    <div className="w-full">
                        {/*<h2 className={styles.title}>Discover Creative Sparks <span>Through Ideas</span> That Inspire*/}
                        {/*    Action</h2>*/}
                        <h2 className={styles.title}>{data?.title}</h2>
                        <SlideButton href={data?.video_url || ''}>{data?.button_title}</SlideButton>
                    </div>
                    <div className="flex justify-between pb-25 items-end">
                        <p className={styles.description}>
                            {data?.description}
                        </p>
                        {/*<div className="flex flex-col gap-y-2 max-w-[300px] text-white">*/}
                        {/*    <AvatarStack/>*/}
                        {/*    <p className={styles.date}>*/}
                        {/*        {data?.created_at ? new Date(data.created_at).toDateString() : ''}*/}
                        {/*    </p>*/}
                        {/*    /!*<p className={styles.date}>May 24, 11:00, Holiday Inn Yerevan - Republic Square</p>*!/*/}
                        {/*    <p className="text-4xl font-semibold serif">Proof Creative Sistem*/}
                        {/*        <svg*/}
                        {/*            width="40"*/}
                        {/*            height="40"*/}
                        {/*            viewBox="0 0 24 24"*/}
                        {/*            fill="none"*/}
                        {/*            stroke="currentColor"*/}
                        {/*            strokeWidth="2"*/}
                        {/*            strokeLinecap="round"*/}
                        {/*            strokeLinejoin="round"*/}
                        {/*            className="ml-2 inline-block"*/}
                        {/*        >*/}
                        {/*            <line x1="7" y1="17" x2="17" y2="7"></line>*/}
                        {/*            <polyline points="7 7 17 7 17 17"></polyline>*/}
                        {/*        </svg>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Section>
            {/*<Section className={styles.bgFeatures}>*/}
            {/*    <Showcase/>*/}
            {/*</Section>*/}
            {/*<Section className={styles.bgDark}>*/}
            {/*    <EventShowcase/>*/}
            {/*</Section>*/}
            {/*<Section>*/}
            {/*    <UpcomingEvents/>*/}
            {/*</Section>*/}
            <Section>
                <Speakers data={data?.speakers}/>
            </Section>
{/*            <Section>
                <Partners data={data?.partners}/>
            </Section>*/}
            <Footer/>
        </ScrollContainer>
    );
}