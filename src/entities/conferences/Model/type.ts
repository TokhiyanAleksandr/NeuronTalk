import { PaginatedResponse } from "@/shared/types/types";

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
    video_url: string |null;
};

export type Speaker = {
    id: number;
    fullname: string;
    subtitle: string | null;
    profession: string;
    image: string;
    created_at: string;
    updated_at: string;
    pivot: {
        conference_id: number;
        speaker_id: number;
    };
};

export type Partner = {
    id: number;
    name: string;
    logo: string | null;
    link: string | null;
    created_at: string;
    updated_at: string;
    pivot: {
        conference_id: number;
        partner_id: number;
    };
};

export type Agenda = {
    id: number;
    conference_id: number;
    name: string;
    icon: string | null;
    time_from: string;
    time_to: string;
    created_at: string;
    updated_at: string;
};

export type Section = {
    id: number;
    conference_id: number;
    title: string;
    description: string;
    image: string | null;
    created_at: string;
    updated_at: string;
};

export type ConferenceDetail = Conference & {
    speakers: Speaker[];
    partners: Partner[];
    agendas: Agenda[];
    sections: Section[];
};

export interface IPaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    total: number;
}

export type ConferencesResponse = PaginatedResponse<Conference>;