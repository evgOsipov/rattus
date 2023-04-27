<template>
  <div
      class="documents"
  >
    <div class="documents-header">
      <div class="documents-search">
        <input
            class="search-input"
            type="text"
            v-model="searchQuery"
            placeholder="Введите поисковый запрос"
        />
        <simple-button class="search-button icon-search">Найти</simple-button>
      </div>
<!--      <select v-model="selectedSort">-->
<!--        <option value="date">Сортировать по дате</option>-->
<!--        <option value="title">Сортировать по названию</option>-->
<!--      </select>-->
    </div>
    <div
        class="documents-list"
        v-if="isPostLoading"
    >
      <h3 class="lists-title">Технические задания</h3>
      <empty-list
          v-if="!searchedAndSortedDocuments.length"
      />
      <div class="list-main">
        <document
            v-for="document in searchedAndSortedDocuments"
            :key="document.id"
            :document="document"
        />
      </div>
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
import SimpleButton from '@/components/UI/SimpleButton'

export default {
  name: 'DocumentLists',
  components: { SimpleButton, EmptyList, DocumentForm, Loading, Document },
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
.documents-header {
  margin-top: 70px;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
}
.search-input {
  width: 285px;
  height: 48px;
  border: 1px solid #D4D4D4;
}
.search-input::placeholder {
  padding: 16px 14px;
}
.search-button {
  background: #4951EC;
  color: #FFF;
  border: none;
  border-radius: 0;
}
.documents-list {
  margin-top: 40px;
}
.lists-title {
  margin-bottom: 100px;
  font-size: 40px;
  line-height: 110%;
  color: #272727;
}
</style>
