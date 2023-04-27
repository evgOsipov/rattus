<template>
  <div class="document">{{ document.title }}</div>
  <button class="btn">Редактировать</button>
  <button class="btn">Создать отчёт</button>
  <button class="btn">История отчётов</button>
  <button class="btn">Удалить</button>
</template>

<script>
export default {
  name: 'Document',
  props: {
    document: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>