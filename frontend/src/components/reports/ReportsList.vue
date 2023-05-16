<template>
  <div
      class="documents"
  >
    <div
        class="documents-list"
        v-if="!isPageLoading"
    >
      <h3 class="lists-title">Протоколы</h3>
      <div class="lists-headers">
        <div class="datetime">Дата создания</div>
        <div class="documents-titles">Наименование</div>
      </div>
      <empty-list
          v-if="!searchedAndSortedList.length"
      />
      <report-item
          v-for="report in searchedAndSortedList"
          :key="report.id"
          :report="report"
          @removeReport="removeReport"
      />
    </div>
    <loading
        v-else
    />
  </div>
</template>

<script>
import ReportItem from '@/components/reports/ReportItem'
import Loading from '@/components/Loading'
import EmptyList from '@/components/EmptyList'
import { useReports } from '@/hooks/reports/useReports'
import { useSortedList } from '@/hooks/useSortedList'
import { useSearchedAndSortedList } from '@/hooks/useSearchedAndSortedList'

export default {
  name: 'ReportsList',
  components: { ReportItem, Loading, EmptyList },
  setup () {
    const { reports, totalPages, isPageLoading, removeReport } = useReports()
    const { selectedSort, sortedList } = useSortedList(reports)
    const { searchQuery, searchedAndSortedList } = useSearchedAndSortedList(sortedList)
    return {
      reports,
      totalPages,
      isPageLoading,
      removeReport,
      selectedSort,
      searchQuery,
      searchedAndSortedList
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
