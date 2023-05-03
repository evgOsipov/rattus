import { onMounted, Ref, ref } from 'vue'
import { IDocument } from '@/interfaces/IDocument'
import { deleteDocument, deleteReport, getDocuments, getReports } from '@/api/api'
import { IReport } from '@/interfaces/IReport'
import { Routes } from '@/router'

export function useDocuments (path: string) {
    const documents: Ref<Array<IDocument | IReport>> = ref([])
    const totalPages: Ref<number> = ref(0)
    const isPageLoading: Ref<boolean> = ref(true)
    const removeDocument = async (id: string) => {
        path === Routes.MAIN ? await deleteDocument(id) : await deleteReport(id);
        documents.value = documents.value.filter(doc => doc.id !== id)
    }
    const fetching = async () => {
        try {
            documents.value = path === Routes.MAIN ? await getDocuments() : await getReports();
            totalPages.value = 1
        } catch (e) {
            console.log(e)
        } finally {
            isPageLoading.value = false
        }
    }
    onMounted(fetching)
    return {
        documents, totalPages, isPageLoading, removeDocument
    }
}
