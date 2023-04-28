<template>
  <div class="create">
    <div class="create-header">
      <div class="block-title" v-if="!isEdit">
        <h3 class="document-title">Название документа</h3>
        <short-button>
          <i class="icon-edit"/>
        </short-button>
      </div>
      <form v-else @submit.prevent class="title-form">
        <input type="text" class="create-title" placeholder="Введите название документа" v-model="document.title">
        <simple-button class="add-title"><i class="icon-save"/>Сохранить</simple-button>
      </form>
      <simple-button class="create-exit">Выйти</simple-button>
    </div>

    <div class="create-specifications">
      <h3 class="block-title">Требования технического задания</h3>
      <div class="specification-name">Требование</div>
      <div class="specifications-list">
        <div class="specification">Проверить адрес ул. Полярной звезды, дом 10, корпус 18, парадная 12</div>
      </div>
      <form @submit.prevent class="title-form title-form__specifications">
        <input type="text" class="create-title" placeholder="Ввод нового требования">
        <simple-button class="add-title"><i class="icon-save"/>Сохранить</simple-button>
      </form>
    </div>
    <simple-button class="save-document">Сохранить техническое задание</simple-button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import SimpleButton from '@/components/UI/SimpleButton'
import ShortButton from '@/components/UI/ShortButton'
import { useDocuments } from '@/hooks/useDocumentEdit'
import { useSpecifications } from '@/hooks/useSpecifications'
export default {
  name: 'EditPage',
  components: { SimpleButton, ShortButton },
  data() {
    return {
      isEdit: false,
    }
  },
  setup(props) {
    const route = useRoute();
    const { document, isDocumentLoading } = useDocuments(route);
    const { specifications, isSpecificationsLoading } = useSpecifications(route);

    return {
      document,
      isDocumentLoading,
      specifications,
      isSpecificationsLoading,
    }
  },
}
</script>

<style scoped>
  .create {
    display: flex;
    flex-direction: column;
  }
  .create-header {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
  }
  .block-title {
    display: flex;
    gap: 35px;
  }
  .document-title {
    font-size: 40px;
    line-height: 44px;
    font-weight: 400;
  }
  .create-exit {
    border: 1px solid #4951EC;
    border-radius: 0;
  }
  .create-exit:active {
    color: #FFF;
    background: #4951EC;
  }
  .title-form {
    display: flex;
    height: 48px;
  }
  .title-form__specifications {
    margin-top: 32px;
  }
  .create-title {
    width: 280px;
    padding-left: 12px;
  }
  .add-title {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #38AE00;
    color: #FFF;
    border: 1px solid #747474;
    border-radius: 0;
  }
  .add-title:active {
    background: #FFF;
    color: #38AE00;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .icon-save {
    font-size: 24px;
    margin-right: 6px;
  }
  .create-specifications {
    margin-top: 60px;
  }
  .specification-name {
    margin-top: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #D4D4D4;
    color: #747474;
  }
  .specification {
    padding: 30px 0;
    border-bottom: 1px solid #D4D4D4;
    color: #272727;
    line-height: 19px;
  }
  .save-document {
    margin-top: 38px;
    justify-self: center;
    align-self: center;
    width: 410px;
    font-weight: 600;
    background: #4951EC;
    color: #FFF;
    border: none;
    border-radius: 0;
  }
  .save-document:active {
    background: #FFFFFF;
    border: 1px solid #000000;
    color: #4951EC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .icon-edit {
    font-size: 24px;
  }
</style>
