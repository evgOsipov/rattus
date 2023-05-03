import { computed, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport'

export function useSearchedAndSortedDocuments(sortedDocuments: Ref<Array<IDocument | IReport>>) {
    const searchQuery: Ref<string> = ref('');
    const searchedAndSortedDocuments = computed(() => {
        return sortedDocuments.value.filter(document => document.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    return {
        searchQuery,
        searchedAndSortedDocuments,
    }
}
