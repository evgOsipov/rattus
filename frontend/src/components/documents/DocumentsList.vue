<template>
  <div
    class="documents"
  >
    <main-header
      v-model:query="searchQuery"
    />
    <div
      class="documents-list"
      v-if="!isPageLoading"
    >
      <h3 class="lists-title">Технические задания</h3>
      <div class="lists-headers">
        <div class="datetime">Дата создания</div>
        <div class="documents-titles">Наименование</div>
      </div>
      <empty-list
        v-if="!entities.length"
        class="empty-list"
      />
      <document
        v-for="document in entities"
        :key="document.id"
        :document="document"
        @removeDocument="removeDocument"
      />
      <document-form/>
    </div>
    <loading
      v-else
    />
    <teleport to="footer">
      <div
        v-intersection="increasePage"
        class="intersection-block"
      >
      </div>

    </teleport>
  </div>
</template>

<script setup
        lang="ts">
import Document from '@/components/documents/Document.vue'
import Loading from '@/components/Loading.vue'
import DocumentForm from '@/components/documents/DocumentForm.vue'
import EmptyList from '@/components/EmptyList.vue'
import MainHeader from '@/components/MainHeader.vue'
import { useDocuments } from '@/hooks/documents/useDocuments'
import { useSortedList } from '@/hooks/useSortedList'
import { useSearchedAndSortedList } from '@/hooks/useSearchedAndSortedList'
import { usePagination } from '@/hooks/usePagination';
import { vIntersection } from '@/directives/VIntersection';

const { documents, totalPages, isPageLoading, removeDocument } = useDocuments();
const { selectedSort, sortedList } = useSortedList(documents);
const { searchQuery, searchedAndSortedList } = useSearchedAndSortedList(sortedList);
const { page, entities } = usePagination(searchedAndSortedList);

const increasePage = () => {
  if(entities.value.length < searchedAndSortedList.value.length) {
    page.value++;
  }
}
</script>

<style scoped>
.documents-list {
  width: 100%;
  margin-top: 37px;
}

.lists-title {
  margin-bottom: 70px;
  font-size: 40px;
  line-height: 110%;
  color: #272727;
}

.lists-headers {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  align-items: center;
  padding: 15px 25px;
  color: #747474;
  line-height: 140%;
  border-bottom: 1px solid #D4D4D4;
}

.documents-titles {
  padding-left: 25px;
}

.empty-list {
  padding: 15px 25px;
  border-bottom: 1px solid #D4D4D4;
}
</style>
