<template>
  <main-header/>
  <documents-list/>
  <pagination/>
</template>

<script>
import DocumentsList from '@/components/documents/DocumentsList'
import MainHeader from '@/components/MainHeader'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'

export default {
  name: 'MainPage',
  components: { Pagination, MainHeader, DocumentsList, Loading },
}
</script>

<style scoped>

</style>
