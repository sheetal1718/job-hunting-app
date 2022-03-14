export interface JobDetailModel {
    id: number
    title: string,
    location: string,
    snippet: string,
    salary: string,
    source: string,
    type: string,
    link: string,
    company: string,
    updated: string,
}

export interface ApiResponse {
    totalCount: number,
    jobs: JobDetailModel[]
}

export interface jobProps {
    jobItem: JobDetailModel,
    keywords: string
}

export interface SearchParam {
    jobProps: any,
    page?: number
}