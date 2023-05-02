import { IDocument } from '@/interfaces/IDocument'
import axios, { AxiosResponse } from 'axios'
import { ISpecification } from "@/interfaces/ISpecification";

const SERVER_URL = process.env.SERVER_URL

const api = axios.create({
    baseURL: SERVER_URL,
})

export const getDocuments = async (): Promise<IDocument[]> => {
    const response: AxiosResponse<IDocument[]> = await api.get('/documents');
    return response.data;
}

export const getDocument = async (id: string): Promise<IDocument> => {
    const response: AxiosResponse<IDocument> = await api.get(`/documents/${id}`);
    return response.data;
}

export const createDocument = async (title: string): Promise<IDocument> => {
    const response: AxiosResponse<IDocument> = await api.post('/documents', {
        title,
    });
    return response.data;
}

export const updateDocument = async (id: string, title: string): Promise<IDocument> => {
    const response: AxiosResponse<IDocument> = await api.put('/documents', {
        id,
        title,
    });
    return response.data;
}

export const deleteDocument = async (id: string): Promise<IDocument> => {
    const response: AxiosResponse<IDocument> = await api.delete(`/documents/${id}`);
    return response.data;
}

export const getSpecificationsByDocuments = async (id: string): Promise<ISpecification[]> => {
    const response: AxiosResponse<IDocument[]> = await api.get(`/specifications?id=${id}`);
    return response.data;
}

export const createSpecification = async (title: string, docId: string): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.post('/specifications', {
        title,
        documentId: docId,
    });
    return response.data;
}

export const getSpecification = async (id: string): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.get(`/specifications/${id}`);
    return response.data;
}

export const updateSpecification = async (id: string, title: string): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.put('/specifications', {
        id,
        title,
    });
    return response.data;
}

export const deleteSpecification = async (id: string): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.delete(`/specifications/${id}`);
    return response.data;
}
