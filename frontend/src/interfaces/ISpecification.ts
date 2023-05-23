export interface ISpecification {
    id: string;
    title: string;
    status: string;
    answer: string;
    document_id: string;
    report_id: string;
}

export interface ICreateSpecifications {
    title: string;
    status?: string;
    answer?: string;
    reportId?: string;
    docId?: string;
}
