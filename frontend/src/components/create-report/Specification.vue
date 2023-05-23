<template>
  <div class="report-list__body">
    <div>{{oneSpecification.title}}</div>
    <div class="select-wrapper">
      <select class="list-item__select" :class="selectClass" v-model="status">
        <option value="default" selected disabled>Выбор статуса</option>
        <option value="success">Выполнено</option>
        <option value="needRefinement">Требует доработки</option>
        <option value="fail">Не выполнено</option>
      </select>
    </div>
    <div class="list-body__comment">
      <div class="comment-edit" v-if="isCommentEdit">
         <textarea
             class="comment-input"
             placeholder="Введите новый комментарий (след. строчка)"
             v-model="comment"
         ></textarea>
        <div class="comment-buttons">
          <short-button class="comment-button__save" @click="hideCommentEdit"><i class="icon-save"></i></short-button>
          <short-button class="comment-button__add-file"><i class="icon-attach-file"/></short-button>
        </div>
      </div>
      <div class="comment-show" v-else>
        <div class="comment-text">{{comment}}</div>
        <div class="comment-buttons">
          <short-button class="comment-button__edit" @click="showCommentEdit"><i class="icon-edit"></i></short-button>
          <short-button class="comment-button__delete" @click="clearComment"><i class="icon-delete"/></short-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShortButton from '@/components/UI/ShortButton.vue';
import { ref, watch } from 'vue'
import { ISpecification } from '@/interfaces/ISpecification';
import { createSpecification } from '@/api/api';

const props = defineProps<{
  specification: ISpecification,
}>()

const oneSpecification = ref(props.specification);
const title = ref()
const isCommentEdit = ref(false);
const selectClass = ref('list-item__select-default');
const status = ref(oneSpecification.value.status);
const comment = ref(oneSpecification.value.answer);

watch(status, () => {
  switch (status.value) {
    case 'success':
      selectClass.value = 'list-item__select-success';
      break;
    case 'fail':
      selectClass.value = 'list-item__select-fail';
      break;
    case 'needRefinement':
      selectClass.value = 'list-item__select-need-refinement';
      break;
    default:
      selectClass.value = 'list-item__select-default';
      break;
  }
})

const showCommentEdit = () => {
  isCommentEdit.value = true;
}
const hideCommentEdit = () => {
  isCommentEdit.value = false;
}
const clearComment = () => {
  comment.value = '';
}

const saveSpecification = async (id: string) => {
  await createSpecification({
    title: oneSpecification.value.title,
    status: status.value,
    answer: comment.value,
    reportId: id,
  })
}

defineExpose({
  saveSpecification,
})
</script>

<style scoped>
.list-item__select {
  width: 180px;
  height: 50px;
  padding: 11px 15px;
  appearance: none;
  position: relative;
  outline: 0;
  background-image: url("../../../public/img/arrow.png");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
}
.list-item__select-default {
  border: 1px solid #D4D4D4;
}
.list-item__select-success {
  border: 1px solid #38AE00;
}
.list-item__select-need-refinement {
  border: 1px solid #FFC700;
}
.list-item__select-fail {
  border: 1px solid #FF0000;
}
.comment-edit, .comment-show {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  width: inherit;
}
.comment-edit {
  border: 1px solid #D4D4D4;
}
.comment-text {
  margin: 1px;
  min-height: 100px;
  padding: 15px;

  inline-size: 350px;
  overflow-wrap: break-word;
}
.comment-input {
  min-height: 100px;
  min-width: 350px;
  padding: 16px 15px;
  border: none;
  overflow: auto;
  resize: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
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
.comment-button__edit {
  color: #FFFFFF;
  background: #0085FF;
}
.comment-button__edit:active {
  color: #0085FF;
  background: #FFFFFF;
}
.comment-button__save {
  color: #FFFFFF;
  background: #38AE00;
}
.comment-button__save:active {
  color: #38AE00;
  background: #FFFFFF;
}
.comment-button__add-file {
  color: #FFFFFF;
  background: #FF9900;
}
.comment-button__add-file:active {
  color: #FF9900;
  background: #FFFFFF;
}
.comment-button__delete {
  color: #FFFFFF;
  background: #FF0000;
}
.comment-button__delete:active{
  color: #FF0000;
  background: #FFF;
}
i {
  font-size: 24px;
}
</style>
