import { computed, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport'

export function useSortedList(list: Ref<Array<IDocument | IReport>>) {
    const selectedSort: Ref<keyof IDocument> = ref('date' as keyof IDocument);
    const sortedList = computed(() => {
        return list.value.sort((list1, list2) => String(list1[selectedSort.value])?.localeCompare(String(list2[selectedSort.value])));
    });

    return {
        selectedSort,
        sortedList,
    }
}
