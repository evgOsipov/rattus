import { computed, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport'

export function useSortedDocuments(documents: Ref<Array<IDocument | IReport>>) {
    const selectedSort: Ref<keyof IDocument> = ref('date' as keyof IDocument);
    const sortedDocuments = computed(() => {
        return documents.value.sort((doc1, doc2) => String(doc1[selectedSort.value])?.localeCompare(String(doc2[selectedSort.value])));
    });

    return {
        selectedSort,
        sortedDocuments,
    }
}