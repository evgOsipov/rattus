<template>
  <main-header/>
  <reports-list/>
  <pagination/>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Pagination from '@/components/Pagination'
import ReportsList from '@/components/reports/ReportsList'
export default {
  name: 'ReportsPage',
  components: { ReportsList, Pagination, MainHeader }
}
</script>

<style scoped>

</style>
