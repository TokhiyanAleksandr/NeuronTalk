import {PaginatedResponse} from "@/shared/types/types";

export type Conference = {
    id: number;
    title: string;
    slug: string;
    subtitle: string | null;
    date: string | null;
    location: string | null;
    description: string;
    created_at: string;
    updated_at: string;
    button_title: string | null;
    button_link: string | null;
    main_image: string | null;
    video_url: string | null;
};

export type Speaker = {
    id: number;
    fullname: string;
    subtitle: string;
    profession: string;
    image: string;
    created_at: string;
    updated_at: string;
    pivot: {
        conference_id: string;
        speaker_id: string;
    };
};

export type Partner = {
    id: number;
    name: string;
    logo: string | null;
    link: string;
    created_at: string;
    updated_at: string;
    pivot: {
        conference_id: string;
        partner_id: string;
    };
};

export type Agenda = {
    id: number;
    conference_id: string;
    name: string;
    icon: string | null;
    time_from: string;
    time_to: string;
    created_at: string;
    updated_at: string;
};

export type Section = {
    id: number;
    conference_id: string;
    title: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
};

export type ConferenceDetail = Conference & {
    speakers: Speaker[];
    partners: Partner[];
    agendas: Agenda[];
    sections: Section[];
};


export type ConferencesResponse = PaginatedResponse<Conference>;
