import axios from 'axios'
import { onMounted, ref } from 'vue'

export function useDocuments() {
    const documents = ref([]);
    const totalPages = ref(0);
    const isPostLoading = ref(false);
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