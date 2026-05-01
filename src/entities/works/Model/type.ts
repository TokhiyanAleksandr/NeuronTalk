export type ProjectsResponse<T> = {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
};

export type Technology = {
        
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

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};