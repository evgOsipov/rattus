<template>
  <div class="create">
    <editable-header
        v-model:document="document"
        v-model:isDocumentTitleEditing="isDocumentTitleEditing"
        @switch-edit-mode="editDocumentTitle"
    />
    <div class="block-title">Список требований</div>
    <empty-list v-if="!specifications.length"
                class="specification"
    />
    <editable-specifications-list
        v-else
        v-model:specifications="specifications"
    />
    <simple-button
        class="save-document"
        @click="saveNewDocument"
    >
      Сохранить техническое задание
    </simple-button>
  </div>
</template>

<script setup
        lang="ts">
import EditableSpecificationsList from '@/components/edit-document/EditableSpecificationsList';
import EditableHeader from '@/components/edit-document/EditableHeader';
import { useRoute, useRouter } from 'vue-router';
import SimpleButton from '@/components/UI/SimpleButton';
import EmptyList from '@/components/EmptyList.vue';
import { useDocuments } from '@/hooks/documents/useDocumentEdit';
import { useSpecifications } from '@/hooks/useSpecifications';

const route = useRoute();
const router = useRouter();
const {
  document,
  isDocumentLoading,
  isDocumentTitleEditing,
  editDocumentTitle,
  saveDocumentTitle,
  saveDocument,
} = useDocuments(route);
const {
  specifications,
  isSpecificationsLoading,
  newSpecificationTitle,
  saveSpecification,
} = useSpecifications(route);
const saveNewDocument = async () => {
  await saveDocument();
  await router.push('/');
};

</script>

<style scoped>
.create {
  display: flex;
  flex-direction: column;
}

.block-title {
  font-size: 20pt;
  margin: 20px 10px 0 0;
}

.specification {
  padding: 30px 0;
  border-bottom: 1px solid #D4D4D4;
  color: #272727;
  line-height: 19px;
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
  border-radius: 0;
}

.save-document:active {
  background: #FFFFFF;
  border: 1px solid #000000;
  color: #4951EC;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
