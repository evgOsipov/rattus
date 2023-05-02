import moment from "moment";
import { onMounted, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import {deleteDocument, getDocuments} from '@/api/api'

export function useDocuments() {
    const documents: Ref<IDocument[]> = ref([]);
    const totalPages: Ref<number> = ref(0);
    const isPostLoading: Ref<boolean> = ref(true);
    const removeDocument = async (id: string) => {
        await deleteDocument(id);
        documents.value = documents.value.filter(doc => doc.id !== id)
    }
    const fetching = async () => {
        try {
            documents.value = await getDocuments();
            totalPages.value = 1;
        } catch (e) {
            console.log(e)
        } finally {
            isPostLoading.value = false;
        }
    };
    onMounted(fetching);
    return {
        documents, totalPages, isPostLoading, removeDocument,
    }
}
