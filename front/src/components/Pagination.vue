<template>
  <div class="documents-pagination">
    <div class="page">В начало</div>
    <div class="page">Назад</div>
    <div class="page">1</div>
    <div class="page">Вперёд</div>
    <div class="page">В конец</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
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
</style>