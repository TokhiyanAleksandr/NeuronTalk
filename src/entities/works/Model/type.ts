import {PaginatedResponse} from "@/shared/types/types";

export type Technology = {
    id: number;
    name: string;
    icon: string | null;
    created_at: string;
    updated_at: string;
    pivot: {
        project_id: number;
        technology_id: number;
    }
}

export type Project = {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    gallery: string | null;
    created_at: string;
    updated_at: string;
    technologies: Technology[];
};

export type ProjectsResponse = PaginatedResponse<Project>;