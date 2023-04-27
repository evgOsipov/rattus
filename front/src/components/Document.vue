<template>
  <div class="document-item">
    <div class="document-date">{{ this.date }}</div>
    <div class="document-title">{{ document.title }}</div>
    <div class="document-controls">
      <simple-button class="edit-button icon-edit">Редактировать</simple-button>
      <simple-button class="create-button">
        <i class="icon-create-report"/>
        <div class="btn-text">
          Перейти к проверке ТЗ
        </div>
      </simple-button>
      <simple-button class="delete-button icon-delete">Удалить</simple-button>
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/UI/SimpleButton'
import moment from 'moment'
export default {
  name: 'Document',
  components: { SimpleButton },
  props: {
    document: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      date: moment(Number(this.document.date)).format('DD.MM.YYYY, hh:mm'),
    }
  },
}
</script>

<style scoped>
.document-item {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  align-items: center;
  padding: 15px 25px;

  border-bottom: 1px solid #D4D4D4;
}
.document-title {
  padding-left: 25px;
}
.document-controls {
  display: flex;
  gap: 5px;
  justify-self: end;
}
.edit-button {
  color: #0085FF;
}
.create-button {
  display: flex;
  background: #38AE00;
  color: #FFFEFE;
}
.create-button i {
  align-self: center;
  justify-self: center;
}
.delete-button{
  background: #FF0000;
  color: #FFF;
}
.btn-text {
  font-size: 13px;
}
</style>
