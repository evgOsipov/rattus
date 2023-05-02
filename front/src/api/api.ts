import { IDocument } from '@/interfaces/IDocument'
import axios, { AxiosResponse } from 'axios'

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
    const response: AxiosResponse<IDocument> = await api.put(`/documents/${id}`);
    return response.data;
}
