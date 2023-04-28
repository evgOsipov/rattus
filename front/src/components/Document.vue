<template>
  <div class="document-item">
    <div class="document-date">{{ this.date }}</div>
    <div class="document-title">{{ document.title }}</div>
    <div class="document-controls">
      <simple-button class="control-btn create-button">
        <i class="icon-create-report"/>
        <span class="btn-text report-btn-text">
          Перейти к проверке ТЗ
        </span>
      </simple-button>
      <simple-button class="control-btn edit-button" @click="$router.push(`/edit/${document.id}`)">
        <i class="icon-edit"/>
        <span class="btn-text">Редактировать</span>
      </simple-button>
      <simple-button class="control-btn delete-button">
        <i class="icon-delete"/>
        <span class="btn-text">
          Удалить
        </span>
      </simple-button>
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
.control-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.control-btn i {
  padding-right: 6px;
  font-size: 24px;
}
.icon-create-report {
  padding-left: 10px;
}
.edit-button {
  color: #0085FF;
  border-color: #0085FF;
}
.edit-button:active {
  background: #0085FF;
  color: #FFF;
  border-color: #000;
}
.create-button {
  background: #38AE00;
  color: #FFFEFE;
}
.create-button:active {
  background: #FFF;
  color: #38AE00;
}
.delete-button{
  background: #FF0000;
  color: #FFF;
}
.delete-button:active{
  background: #FFF;
  color: #FF0000;
}
.report-btn-text {
  margin-right: 10px;
}
</style>
