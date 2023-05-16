import moment from "moment";
import {computed, Ref, ref} from "vue";

import { IReport } from '@/interfaces/IReport';

export function useReport(rep: Ref<IReport>) {
    const title = ref(rep.value.title);
    const date = computed(() => {
        return moment(Number(rep.value.date)).format('DD.MM.YYYY, hh:mm');
    });
    return {
        date,
        title,
    }
}
