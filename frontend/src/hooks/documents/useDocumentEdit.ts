import { onMounted, Ref, ref } from 'vue';
import { IDocument } from '@/interfaces/IDocument';
import { RouteLocation } from 'vue-router';
import { getDocument, updateDocument, saveFullDocument } from '@/api/api';

export function useDocuments(route: RouteLocation) {
  const document: Ref<Partial<IDocument>> = ref({});
  const isDocumentLoading: Ref<boolean> = ref(false);
  const { id } = route.params;
  const saveDocumentFull = async (body: any): Promise<void> => {
    body.document = document.value; // eslint-disable-line
    await saveFullDocument(body);
  };
  if (id) {
    const fetching = async () => {
      try {
        document.value = await getDocument(id as string);
      } catch (e) {
        console.log(e);
      } finally {
        isDocumentLoading.value = true;
      }
    };
    onMounted(fetching);
  } else {
    isDocumentLoading.value = true;
  }
  return {
    document,
    isDocumentLoading,
    saveDocumentFull,
  };
}
