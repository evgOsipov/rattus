import { onMounted, Ref, ref } from 'vue';
import { ISpecification } from '@/interfaces/ISpecification';
import { RouteLocation } from 'vue-router';
import { createSpecification, getSpecificationsByDocument } from '@/api/api';

export function useSpecifications(route: RouteLocation) {
  const { id } = route.params;
  const specifications: Ref<Partial<ISpecification>[]> = ref([]);
  const isSpecificationsLoading: Ref<boolean> = ref(false);
  const newSpecificationTitle: Ref<string> = ref('');
  const saveSpecification = async () => {
    specifications.value.push(await createSpecification(newSpecificationTitle.value, id as string));
    newSpecificationTitle.value = '';
  };
  if (id) {
    const fetching = async () => {
      try {
        isSpecificationsLoading.value = true;
        specifications.value = await getSpecificationsByDocument(id as string);
      } catch (e) {
        console.log(e);
      } finally {
        isSpecificationsLoading.value = false;
      }
    };
    onMounted(fetching);
  } else {
    isSpecificationsLoading.value = true;
  }
  return {
    specifications,
    isSpecificationsLoading,
    newSpecificationTitle,
    saveSpecification,
  };
}
