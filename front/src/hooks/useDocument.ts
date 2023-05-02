import moment from "moment";
import {computed, Ref, ref} from "vue";

import { IDocument } from "@/interfaces/IDocument";

export function useDocument(doc: Ref<IDocument>) {
    const title = ref(doc.value.title);
    const date = computed(() => {
        return moment(Number(doc.value.date)).format('DD.MM.YYYY, hh:mm');
    });
    return {
        date,
        title,
    }
}
