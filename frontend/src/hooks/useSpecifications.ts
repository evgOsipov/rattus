import { onMounted, Ref, ref } from 'vue';
import { ISpecification } from "@/interfaces/ISpecification";
import { RouteLocation } from "vue-router";
import {createSpecification, getSpecificationsByDocument} from "@/api/api";

export function useSpecifications(route: RouteLocation) {
    const id = route.params.id;
    const specifications: Ref<ISpecification[]> = ref([]);
    const isSpecificationsLoading: Ref<boolean> = ref(false);
    const newSpecificationTitle: Ref<string> = ref('');
    const saveSpecification = async () => {
        specifications.value.push(await createSpecification({
            title: newSpecificationTitle.value,
            docId: id as string
        }));
        newSpecificationTitle.value = '';
    }
    if (id) {
        const fetching = async () => {
            try {
                specifications.value = await getSpecificationsByDocument(id as string);
            } catch (e) {
                console.log(e)
            } finally {
                isSpecificationsLoading.value = true;
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
    }
}
