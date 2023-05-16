import { computed, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport'

export function useSearchedAndSortedList(sortedList: Ref<Array<IDocument | IReport>>) {
    const searchQuery: Ref<string> = ref('');
    const searchedAndSortedList = computed(() => {
        return sortedList.value.filter(list => list.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    return {
        searchQuery,
        searchedAndSortedList,
    }
}
