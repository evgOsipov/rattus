import { computed, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';

export function useSearchedAndSortedDocuments(sortedDocuments: Ref<IDocument[]>) {
    const searchQuery: Ref<string> = ref('');
    console.log(sortedDocuments);
    const searchedAndSortedDocuments = computed(() => {
        return sortedDocuments.value.filter(document => document.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    return {
        searchQuery,
        searchedAndSortedDocuments,
    }
}