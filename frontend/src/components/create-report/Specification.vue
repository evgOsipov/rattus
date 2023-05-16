<template>
  <div class="report-list__body">
    <div>{{oneSpecification.title}}</div>
    <select class="list-item__select" v-model="status">
      <option value="default" selected disabled>Выбор статуса</option>
      <option value="success">Выполнено</option>
      <option value="needRefinement">Требует доработки</option>
      <option value="fail">Не выполнено</option>
    </select>
    <div class="list-body__comment">
      <textarea
          class="comment-input"
          placeholder="Введите новый комментарий (след. строчка)"
          v-model="comment"
      ></textarea>
      <div class="comment-buttons">
        <short-button class="comment-button__add-file"></short-button>
        <short-button class="comment-button__delete"><i class="icon-delete"/></short-button>
      </div>
    </div>
  </div>
</template>

<script>
import ShortButton from '@/components/UI/ShortButton'
import { ref } from 'vue'
export default {
  name: 'Specification',
  components: { ShortButton },
  props: {
    specification: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const oneSpecification = ref(props.specification);
    const status = ref('default');
    const comment = ref('');
    return {
      oneSpecification,
      status,
      comment
    }
  }
}
</script>

<style scoped>
.list-item__select {
  width: 180px;
  height: 50px;
  padding: 11px 15px;
  appearance: none;
  outline: 0;
}
.list-body__comment {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  width: 350px;

  border: 1px solid #D4D4D4;
}
.comment-input {
  min-height: 100px;
  min-width: 270px;
  padding: 15px;
  border: none;
  overflow: auto;
  resize: none;
}
.comment-input:focus {
  outline: 0;
}
.comment-buttons {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-self: center;
  justify-self: center;
}
.comment-button__add-file {
  color: #FFFFFF;
  background: #FF9900;
}
.comment-button__delete {
  color: #FFFFFF;
  background: #FF0000;
}
.comment-button__delete:active{
  color: #FF0000;
  background: #FFF;
}
.icon-delete {
  font-size: 24px;
}
</style>
