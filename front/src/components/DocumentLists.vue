<template>
  <div
      class="documents"
  >
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
          v-if="!searchedAndSortedDocuments.length"
      />
      <document
          v-for="document in searchedAndSortedDocuments"
          :key="document.id"
          :document="document"
          @removeDocument="removeDocument"
      />
      <document-form />
    </div>
    <loading
        v-else
    />
  </div>
</template>

<script>
import Document from '@/components/Document'
import Loading from '@/components/Loading'
import DocumentForm from '@/components/DocumentForm'
import EmptyList from '@/components/EmptyList'
import SimpleButton from '@/components/UI/SimpleButton'
import { useDocuments } from '@/hooks/documents/useDocuments'
import { useSortedDocuments } from '@/hooks/useSortedDocuments'
import { useSearchedAndSortedDocuments } from '@/hooks/useSearchedAndSortedDocuments'

export default {
  name: 'DocumentLists',
  components: { SimpleButton, EmptyList, DocumentForm, Loading, Document },
  setup () {
    const { documents, totalPages, isPageLoading, removeDocument } = useDocuments()
    const { selectedSort, sortedDocuments } = useSortedDocuments(documents)
    const { searchQuery, searchedAndSortedDocuments } = useSearchedAndSortedDocuments(sortedDocuments)
    return {
      documents,
      totalPages,
      isPageLoading,
      removeDocument,
      selectedSort,
      searchQuery,
      searchedAndSortedDocuments
    }
  }
}
</script>


<style scoped>
.documents-list {
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
</style>
