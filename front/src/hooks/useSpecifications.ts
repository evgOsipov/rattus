import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';
import { ISpecification } from "@/interfaces/ISpecification";
import { RouteLocation } from "vue-router";

export function useSpecifications(route: RouteLocation) {
    const id = route.params.id;
    if (!id) {
        return;
    }
    const specifications: Ref<ISpecification[]> = ref([]);
    const isSpecificationsLoading: Ref<boolean> = ref(false);
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
    return {
        specifications, isSpecificationsLoading,
    }
}
