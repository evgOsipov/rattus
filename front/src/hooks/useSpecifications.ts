import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';
import { ISpecification } from "@/interfaces/ISpecification";
import { RouteLocation } from "vue-router";

export function useSpecifications(route: RouteLocation) {
    const id = route.params.id;
    const specifications: Ref<ISpecification[]> = ref([]);
    const isSpecificationsLoading: Ref<boolean> = ref(false);
    const newSpecificationTitle: Ref<string> = ref('');
    const saveSpecification = () => {
        specifications.value.push({
            id: 'new',
            title: newSpecificationTitle.value,
        });
        newSpecificationTitle.value = '';
    }
    if (id) {
        const fetching = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/specifications?id=${id}`);
                specifications.value = response.data;
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
