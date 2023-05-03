<template>
  <main-header/>
  <document-lists
      v-if="isPageLoading"
      :list="searchedAndSortedDocuments"
      :removeList="removeDocument"
  />
  <loading
      v-else
  />
  <pagination/>
</template>

<script>
import DocumentLists from '@/components/DocumentLists'
import MainHeader from '@/components/MainHeader'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'
import { useRoute } from 'vue-router'
import { useDocuments } from '@/hooks/useDocuments'
import { useSortedDocuments } from '@/hooks/useSortedDocuments'
import { useSearchedAndSortedDocuments } from '@/hooks/useSearchedAndSortedDocuments'

export default {
  name: 'MainPage',
  components: { Pagination, MainHeader, DocumentLists, Loading },
  setup () {
    const route = useRoute()
    const { documents, totalPages, isPageLoading, removeDocument } = useDocuments(route.path)
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

</style>
