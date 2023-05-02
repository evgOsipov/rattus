<template>
  <div
      class="documents"
  >
    <div class="documents-header">
      <div class="switcher">
        <simple-button class="switch-btn documents-switch switch-btn__active">Технические задания</simple-button>
        <simple-button class="switch-btn reports-switch">Протоколы</simple-button>
      </div>
      <div class="documents-search">
        <input
            class="search-input"
            type="text"
            v-model="searchQuery"
            placeholder="Введите поисковый запрос"
        />
        <simple-button class="search-button"><i class="icon-search"/>Найти</simple-button>
      </div>
<!--      <select v-model="selectedSort">-->
<!--        <option value="date">Сортировать по дате</option>-->
<!--        <option value="title">Сортировать по названию</option>-->
<!--      </select>-->
    </div>
    <div
        class="documents-list"
        v-if="!isPostLoading"
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
      <div class="documents-pagination">
        <div class="page">В начало</div>
        <div class="page">Назад</div>
        <div class="page">1</div>
        <div class="page">Вперёд</div>
        <div class="page">В конец</div>
      </div>
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
    const { documents, totalPages, isPostLoading, removeDocument } = useDocuments()
    const { selectedSort, sortedDocuments } = useSortedDocuments(documents)
    const { searchQuery, searchedAndSortedDocuments } = useSearchedAndSortedDocuments(sortedDocuments)
    return {
      documents,
      totalPages,
      isPostLoading,
      removeDocument,
      selectedSort,
      searchQuery,
      searchedAndSortedDocuments,
    }
  },
}
</script>


<style scoped>
.documents-header {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.switcher {
  display: flex;
}
.switch-btn {
  width: 213px;
  border: 1px solid #D4D4D4;
  border-radius: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
}
.switch-btn__active {
  opacity: 1;
  box-shadow: none;
}
.reports-switch {
  border-left: none;
}
.documents-search {
  margin-top: 50px;
  display: flex;
}
.search-input {
  padding-left: 16px;
  width: 285px;
  height: 48px;
  border: 1px solid #D4D4D4;
}
.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4951EC;
  color: #FFF;
  border: none;
  border-radius: 0;
}
.search-button:active {
  background: #FFF;
  color: #4951EC;
  border: 1px solid #000;
}
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
.documents-pagination {
  margin-top: 25px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  gap: 30px;
  line-height: 140%;
  text-decoration-line: underline;
  color: #4951EC;
  opacity: 0.5;
}
.icon-search {
  font-size: 24px;
  margin-right: 6px;
  padding-top: 4px;
  align-self: center;
  justify-self: center;
}
</style>
