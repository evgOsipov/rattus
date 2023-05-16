import { onMounted, Ref, ref } from 'vue'
import { deleteReport, getReports } from '@/api/api'
import { IReport } from '@/interfaces/IReport'

export function useReports () {
    const DOCUMENTS_ON_PAGE = 5;
    const reports: Ref<Array<IReport>> = ref([])
    const totalPages: Ref<number> = ref(0)
    const isPageLoading: Ref<boolean> = ref(true)
    const removeReport = async (id: string) => {
        await deleteReport(id);
        reports.value = reports.value.filter(doc => doc.id !== id)
    }
    const fetching = async () => {
        try {
            reports.value = await getReports();
            totalPages.value = reports.value.length / DOCUMENTS_ON_PAGE;
        } catch (e) {
            console.log(e)
        } finally {
            isPageLoading.value = false
        }
    }
    onMounted(fetching)
    return {
        reports, totalPages, isPageLoading, removeReport
    }
}
