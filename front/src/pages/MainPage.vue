<template>
  <main-header/>
  <document-lists
  />
  <pagination/>
</template>

<script>
import DocumentLists from '@/components/DocumentLists'
import MainHeader from '@/components/MainHeader'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'

export default {
  name: 'MainPage',
  components: { Pagination, MainHeader, DocumentLists, Loading },
}
</script>

<style scoped>

</style>
