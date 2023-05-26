import { computed, ref, Ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport';

export const usePagination = (list: Ref<Array<IDocument | IReport>>) => {
  const page = ref(1);
  const maxEntitiesOnPage = 6;

  const entities = computed(() => {
    return list.value.slice(0, maxEntitiesOnPage * page.value);
  });

  return {
    page,
    entities,
  }
}
