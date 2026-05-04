import {Blog} from "@/entities/insight/Model/type";

export type ModelType =
    | "Partner"
    | "Service"
    | "Project"
    | "Execution"
    | "Blog"
    | null;

export type BaseBlock<T = unknown> = {
    title: string;
    subtitle: string | null;
    description: string | null;
    image: string | null;
    button_title: string | null;
    button_link: string | null;
    model_type: ModelType;
    data: T;
};

export type Partner = {
    id: number;
    name: string;
    logo: string | null;
    link: string | null;
    created_at: string;
    updated_at: string;
};

export type Service = {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
};

export type Project = {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    gallery: string | null;
    created_at: string;
    updated_at: string;
};

export type Execution = {
    id: number;
    title: string;
    subtitle: string;
    slug: string;
    description: string;
    image: string | null;
    color: string;
    created_at: string;
    updated_at: string;
};


export type HomeResponse = {
    banner: BaseBlock<null>;
    partners: BaseBlock<Partner[]>;
    services: BaseBlock<Service[]>;
    projects: BaseBlock<Project[]>;
    methodology: BaseBlock<Execution[]>;
    blogs: BaseBlock<Blog[]>;
    get_in_touch: BaseBlock<null>;
};

export type SettingsResponse = {
    site_logo: string;
}