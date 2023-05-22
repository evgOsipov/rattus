<template>
  <div class="create-header">
    <div class="block-title"
         v-if="!isDocumentTitleEditing">
      <h3 class="document-title">{{ document.title }}</h3>
      <short-button @click="$emit('switchEditMode')">
        <i class="icon-edit"/>
      </short-button>
    </div>
    <form v-else
          @submit.prevent
          class="title-form">
      <input type="text"
             class="create-title"
             placeholder="Введите название документа"
             v-model="document.title"
      >
      <simple-button class="add-title"
                     @click="$emit('switchEditMode')"
      >
        <i class="icon-save"/>
        Сохранить
      </simple-button>
    </form>
    <simple-button class="create-exit"
                   @click="$router.push('/')"
    >
      Выйти
    </simple-button>
  </div>
</template>

<script setup
        lang="ts">
import ShortButton from '@/components/UI/ShortButton';
import SimpleButton from '@/components/UI/SimpleButton';
import { IDocument } from '@/interfaces/IDocument';
import { PropType } from 'vue';

const props = defineProps({
  document: {
    type: Object as PropType<Partial<IDocument>>,
    required: true,
  },
  isDocumentTitleEditing: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['switchEditMode']);

</script>
<style scoped>
.block-title {
  display: flex;
  gap: 35px;
}

.document-title {
  font-size: 40px;
  overflow-wrap: break-word;
  line-height: 44px;
  font-weight: 400;
  max-width: 800px;
}

.create-header {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}

.block-title {
  display: flex;
  gap: 35px;
  max-width: 900px;
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
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
}

.icon-save {
  font-size: 24px;
  margin-right: 6px;
}

.icon-edit {
  font-size: 24px;
}
</style>
