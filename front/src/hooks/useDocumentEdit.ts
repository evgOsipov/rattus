import axios, { AxiosResponse } from 'axios'
import { nextTick, onMounted, Ref, ref } from 'vue'
import { IDocument } from '@/interfaces/IDocument';
import { RouteLocation } from "vue-router";
import { createDocument, getDocument, updateDocument } from '@/api/api'

export function useDocuments(route: RouteLocation) {
    const document: Ref<Partial<IDocument>> = ref({});
    const isDocumentLoading: Ref<boolean> = ref(false);
    const isDocumentTitleEditing: Ref<boolean> = ref(false);
    const oldDocumentTitle: Ref<string> = ref(document.value.title || '');
    const id = route.params.id;
    const editDocumentTitle = (): void => {
        isDocumentTitleEditing.value = true;
    }
    const saveDocumentTitle = async (): Promise<void> => {
        if (oldDocumentTitle.value === document.value.title) {
            return;
        }
        if (id) {
            document.value = await updateDocument(id as string, document.value.title as string);
            isDocumentTitleEditing.value = false;
            return;
        }
        document.value = await createDocument(document.value.title as string);
        isDocumentTitleEditing.value = false;
    }
    const saveDocument = async (): Promise<void> => {

    }
    if (id) {
        const fetching = async () => {
            try {
                document.value = await getDocument(id as string);
            } catch (e) {
                console.log(e)
            } finally {
                isDocumentLoading.value = true;
            }
        };
        onMounted(fetching);
    } else {
        isDocumentLoading.value = true;
        isDocumentTitleEditing.value = true;
    }
    return {
        document,
        isDocumentLoading,
        isDocumentTitleEditing,
        editDocumentTitle,
        saveDocumentTitle,
        saveDocument,
    }
}
