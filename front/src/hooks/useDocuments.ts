import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';

export function useDocuments() {
    const documents: Ref<IDocument[]> = ref([]);
    const totalPages: Ref<number> = ref(0);
    const isPostLoading: Ref<boolean> = ref(false);
    const fetching = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/documents/');
            totalPages.value = Math.ceil(response.headers['x-total-count'] / 1) ?? 1;
            documents.value = response.data;
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