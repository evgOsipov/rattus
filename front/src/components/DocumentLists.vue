<template>
  <div
      class="documents"
  >
    <input
        class="search-input"
        type="text"
        v-model="searchQuery"
    />
    <select v-model="selectedSort">
      <option value="date">Сортировать по дате</option>
      <option value="title">Сортировать по названию</option>
    </select>
    <div
        class="documents-list"
        v-if="isPostLoading"
    >
      <document
          v-for="document in searchedAndSortedDocuments"
          :key="document.id"
          :document="document"
      />
      <empty-list
        v-if="!searchedAndSortedDocuments.length"
      />
      <document-form
          @addDocument="addDocument"
      />
    </div>
    <loading
        v-else
    />
  </div>
</template>

<script>
import { useDocuments } from '@/hooks/useDocuments'
import Document from '@/components/Document'
import { useSortedDocuments } from '@/hooks/useSortedDocuments'
import { useSearchedAndSortedDocuments } from '@/hooks/useSearchedAndSortedDocuments'
import Loading from '@/components/Loading'
import DocumentForm from '@/components/DocumentForm'
import axios from 'axios'
import EmptyList from '@/components/EmptyList'

export default {
  name: 'DocumentLists',
  components: { EmptyList, DocumentForm, Loading, Document },
  setup () {
    const { documents, totalPages, isPostLoading } = useDocuments()
    const { selectedSort, sortedDocuments } = useSortedDocuments(documents)
    const { searchQuery, searchedAndSortedDocuments } = useSearchedAndSortedDocuments(sortedDocuments)

    return {
      documents,
      totalPages,
      isPostLoading,
      selectedSort,
      searchQuery,
      searchedAndSortedDocuments
    }
  },
  methods: {
    async addDocument (title) {
      const newDocument = await axios.post('http://localhost:8080/api/documents', { title });
      this.documents.push(newDocument.data);
    }
  }
}
</script>

<style scoped>

</style>