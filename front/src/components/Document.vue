<template>
  <div class="document">{{ document.title }}</div>
  <simple-button class="edit-button icon-edit">Редактировать</simple-button>
  <simple-button class="create-button icon-create-report">Создать отчёт</simple-button>
  <simple-button class="show-button icon-reports">История отчётов</simple-button>
  <simple-button class="delete-button icon-delete">Удалить</simple-button>
</template>

<script>
import SimpleButton from '@/components/UI/SimpleButton'
export default {
  name: 'Document',
  components: { SimpleButton },
  props: {
    document: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.edit-button {
  color: #0085FF;
}
.create-button{
  background: #38AE00;
  color: #FFFEFE;
}
.show-button{

}
.delete-button{
  background: #FF0000;
  color: #FFF;
}
</style>
