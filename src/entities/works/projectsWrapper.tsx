'use client'

import {usePagination} from "@/shared/hooks/usePagination";
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import Pagination from "@/shared/ui/pagination";
import {PaginatedResponse} from "@/shared/types/types";
import {ProjectsResponse} from "@/entities/works/Model/type";

interface IProps {
    projects: ProjectsResponse,
}

const ProjectsWrapper = ({projects}: IProps) => {
    const { data, fetchPage } =
        usePagination<ProjectsResponse>(projects);

    return (
        <div>
            <ParallaxGrid projects={data}
                          headSectionTitle="Works"
                          headSectionDescription="Our projects, from strategy to execution. With measurable results."
            />
            <Pagination onPageChange={fetchPage} data={data} />
        </div>
    );
};

export default ProjectsWrapper;