<template>
  <div class="create">
    <div class="create-header">
      <div class="block-title" v-if="!isDocumentTitleEditing">
        <h3 class="document-title">{{ document.title }}</h3>
        <short-button @click="editDocumentTitle">
          <i class="icon-edit"/>
        </short-button>
      </div>
      <form v-else @submit.prevent class="title-form">
        <input type="text" class="create-title" placeholder="Введите название документа" v-model="document.title">
        <simple-button class="add-title" @click="saveDocumentTitle"><i class="icon-save"/>Сохранить</simple-button>
      </form>
      <router-link to="/">
        <simple-button class="create-exit">Выйти</simple-button>
      </router-link>
    </div>

    <div class="create-specifications">
      <h3 class="block-title">Требования технического задания</h3>
      <div class="specification-name">Требование</div>
      <div class="specifications-block" v-if="isSpecificationsLoading">
        <empty-list class="specification" v-if="!specifications.length"/>
        <div class="specifications-list" v-for="specification in specifications">
          <div class="specification">{{specification.title}}</div>
        </div>
        <form @submit.prevent class="title-form title-form__specifications">
          <input type="text" class="create-title" placeholder="Ввод нового требования" v-model="newSpecificationTitle">
          <simple-button class="add-title" @click="saveSpecification"><i class="icon-save"/>Сохранить</simple-button>
        </form>
      </div>
    </div>
    <simple-button class="save-document" @click="saveNewDocument">Сохранить техническое задание</simple-button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import SimpleButton from '@/components/UI/SimpleButton'
import ShortButton from '@/components/UI/ShortButton'
import { useDocuments } from '@/hooks/useDocumentEdit'
import { useSpecifications } from '@/hooks/useSpecifications'
import EmptyList from '@/components/EmptyList'
export default {
  name: 'EditPage',
  components: { EmptyList, SimpleButton, ShortButton },
  setup() {
    const route = useRoute();
    const {
      document,
      isDocumentLoading,
      isDocumentTitleEditing,
      editDocumentTitle,
      saveDocumentTitle,
      saveDocument,
    } = useDocuments(route);
    const {
      specifications,
      isSpecificationsLoading,
      newSpecificationTitle,
      saveSpecification,
      saveSpecifications,
    } = useSpecifications(route);
    const saveNewDocument = async () => {
      await saveDocument();
      await saveSpecifications();
    }
    return {
      document,
      isDocumentLoading,
      isDocumentTitleEditing,
      editDocumentTitle,
      saveDocumentTitle,
      specifications,
      isSpecificationsLoading,
      newSpecificationTitle,
      saveSpecification,
      saveNewDocument,
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
