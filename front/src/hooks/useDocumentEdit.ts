import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { RouteLocation } from "vue-router";

export function useDocuments(route: RouteLocation) {
    const id = route.params.id;
    if (!id) {
        return;
    }
    const document: Ref<Partial<IDocument>> = ref({});
    const isDocumentLoading: Ref<boolean> = ref(false);
    const fetching = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/documents/${id}`);
            document.value = response.data;
        } catch (e) {
            console.log(e)
        } finally {
            isDocumentLoading.value = true;
        }
    };
    onMounted(fetching);
    return {
        document, isDocumentLoading,
    }
}
