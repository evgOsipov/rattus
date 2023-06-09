import axios, { AxiosResponse } from 'axios';

import { IDocument } from '@/interfaces/IDocument';
import { ICreateSpecification, IUpdateSpecification, ISpecification } from '@/interfaces/ISpecification';
import { IReport } from '@/interfaces/IReport';

const SERVER_URL = process.env.VUE_APP_SERVER;

const api = axios.create({
  baseURL: SERVER_URL,
});

export const getDocuments = async (): Promise<IDocument[]> => {
  const response: AxiosResponse<IDocument[]> = await api.get('/documents');
  return response.data;
};

export const getDocument = async (id: string): Promise<IDocument> => {
  const response: AxiosResponse<IDocument> = await api.get(`/documents/${id}`);
  return response.data;
};

// export const createDocument = async (title: string): Promise<IDocument> => {
//   const response: AxiosResponse<IDocument> = await api.post('/documents', {
//     title,
//   });
//   return response.data;
// };

export const updateDocument = async (id: string, title: string): Promise<IDocument> => {
  const response: AxiosResponse<IDocument> = await api.put('/documents', {
    id,
    title,
  });
  return response.data;
};

export const deleteDocument = async (id: string): Promise<IDocument> => {
  const response: AxiosResponse<IDocument> = await api.delete(`/documents/${id}`);
  return response.data;
};

export const getSpecificationsByDocument = async (id: string): Promise<ISpecification[]> => {
  const response: AxiosResponse<ISpecification[]> = await api.get(`/specifications/doc/?id=${id}`);
  return response.data;
};

export const getSpecificationsByReport = async (id: string): Promise<ISpecification[]> => {
  const response: AxiosResponse<ISpecification[]> = await api.get(`/specifications/rep/?id=${id}`);
  return response.data;
};

export const createSpecification = async ({
    title,
    status,
    answer,
    docId,
    reportId,
}: ICreateSpecification): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.post('/specifications', {
        title,
        status,
        answer,
        documentId: docId,
        reportId,
    });
    return response.data;
}

export const getSpecification = async (id: string): Promise<ISpecification> => {
  const response: AxiosResponse<ISpecification> = await api.get(`/specifications/${id}`);
  return response.data;
};

export const updateSpecification = async ({
    id,
    title,
    status,
    answer,
}: IUpdateSpecification): Promise<ISpecification> => {
    const response: AxiosResponse<ISpecification> = await api.put('/specifications', {
        id,
        title,
        status,
        answer,
    });
    return response.data;
}

export const deleteSpecification = async (id: string): Promise<ISpecification> => {
  const response: AxiosResponse<ISpecification> = await api.delete(`/specifications/${id}`);
  return response.data;
};

export const createReport = async (title: string, docId: string): Promise<IReport> => {
  const response: AxiosResponse<IReport> = await api.post('/reports', {
    title,
    documentId: docId,
  });
  return response.data;
};

export const getReports = async (): Promise<IReport[]> => {
    const response: AxiosResponse<IReport[]> = await api.get(`/reports`);
    return response.data;
}

export const getReport = async (id: string): Promise<IDocument> => {
    const response: AxiosResponse<IDocument> = await api.get(`/reports/${id}`);
    return response.data;
}

export const getReportsByDocument = async (id: string): Promise<IReport[]> => {
  const response: AxiosResponse<IReport[]> = await api.get(`/reports?id=${id}`);
  return response.data;
};

export const updateReport = async (id: string, title: string): Promise<IReport> => {
  const response: AxiosResponse<IReport> = await api.put('/reports', {
    id,
    title,
  });
  return response.data;
};

export const deleteReport = async (id: string): Promise<IReport> => {
  const response: AxiosResponse<IReport> = await api.delete(`/reports/${id}`);
  return response.data;
};

export const saveFullDocument = async (body: any): Promise<IReport> => {
  const response: AxiosResponse<IReport> = await api.post('/documents', body);
  return response.data;
};
