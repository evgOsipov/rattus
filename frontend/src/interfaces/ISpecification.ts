export interface ISpecification {
    id: string;
    title: string;
    status: string;
    answer: string;
    document_id: string;
    report_id: string;
}

export interface ICreateSpecification {
    title: string;
    status?: string;
    answer?: string;
    reportId?: string;
    docId?: string;
}

export interface IUpdateSpecification {
    id: string;
    title?: string;
    status?: string;
    answer?: string;
}
