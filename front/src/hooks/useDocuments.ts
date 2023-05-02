import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { getDocuments } from '@/api/api'

export function useDocuments() {
    const documents: Ref<IDocument[]> = ref([]);
    const totalPages: Ref<number> = ref(0);
    const isPostLoading: Ref<boolean> = ref(false);
    const fetching = async () => {
        try {
            documents.value = await getDocuments();
            totalPages.value = 1;
        } catch (e) {
            console.log(e)
        } finally {
            isPostLoading.value = true;
        }
    };
    onMounted(fetching);
    return {
        documents, totalPages, isPostLoading,
    }
}