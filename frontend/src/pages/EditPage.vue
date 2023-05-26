<template>
  <loading v-if="isDocumentLoading || isSpecificationsLoading"/>
  <div
    v-else
    class="create-or-edit-page"
  >
    <editable-header
      v-model:header="document.title"
      placeholder="Введите название документа"
    />
    <div class="block-title">
      Список требований
    </div>
    <editable-specifications-list v-model:edit-items="editSpecifications"/>
    <simple-button
      class="save-document"
      @click="saveNewDocument"
    >
      Сохранить техническое задание
    </simple-button>
  </div>
</template>

<script setup
        lang="ts"
>
import EditableSpecificationsList from '@/components/edit-document/EditableSpecificationsList.vue';
import EditableHeader from '@/components/edit-document/EditableHeader.vue';
import SimpleButton from '@/components/UI/SimpleButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { useDocuments } from '@/hooks/documents/useDocumentEdit';
import { useSpecifications } from '@/hooks/useSpecifications';
import { IEditItem } from '@/interfaces/IEditItem';
import { Ref, ref, watch } from 'vue';
import { ISpecification } from '@/interfaces/ISpecification';
import Loading from '@/components/Loading.vue';

const route = useRoute();
const router = useRouter();
const {
  document,
  isDocumentLoading,
  saveDocumentFull,
} = useDocuments(route);
const {
  specifications,
  isSpecificationsLoading,
} = useSpecifications(route);
const editSpecifications: Ref<IEditItem[]> = ref([]);
watch(isSpecificationsLoading, (newVal) => {
  if (!newVal) {
    for (let i = 0; i < specifications.value.length; i += 1) {
      editSpecifications.value.push({
        item: { ...specifications.value[i] },
        itemStatus: '',
      });
    }
  }
});
const unproxy = (obj: any) => JSON.parse(JSON.stringify(obj));
const saveNewDocument = async () => {
  const createSpecifications: Partial<ISpecification>[] = [];
  const updateSpecifications: Partial<ISpecification>[] = [];
  const deleteSpecifications: Partial<ISpecification>[] = [];
  for (let i = 0; i < specifications.value.length; i += 1) {
    const oldSpec = specifications.value[i];
    const newSpec = editSpecifications.value[i].item;
    if (JSON.stringify(oldSpec) !== JSON.stringify(newSpec)) {
      updateSpecifications.push(unproxy(newSpec));
    }
  }
  editSpecifications.value.forEach((specification) => {
    switch (specification.itemStatus) {
      case 'new':
        createSpecifications.push(unproxy(specification.item));
        break;
      case 'delete':
        deleteSpecifications.push(unproxy(specification.item));
        break;
      default:
        break;
    }
  });
  await saveDocumentFull({
    updateSpecifications,
    deleteSpecifications,
    createSpecifications,
  });
  await router.push('/');
};
</script>

<style scoped>
.create-or-edit-page {
  display: flex;
  flex-direction: column;
}

.block-title {
  font-size: 20pt;
  margin: 20px 10px 0 0;
}

.save-document {
  margin-top: 38px;
  justify-self: center;
  align-self: center;
  width: 410px;
  font-weight: 600;
  background: #4951EC;
  color: #FFF;
  border: none;
}

.save-document:active {
  background: #FFFFFF;
  border: 1px solid #000000;
  color: #4951EC;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
