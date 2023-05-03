<template>
  <main-header/>

  <pagination/>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Pagination from '@/components/Pagination'
export default {
  name: 'ReportsPage',
  components: { Pagination, MainHeader }
}
</script>

<style scoped>

</style>