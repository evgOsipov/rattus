<template>
  <div class="item-container">
    <template v-if="!isItemEditable">
      <div class="item-text">
        {{ props.item }}
      </div>
    </template>
    <template v-else>
      <a-textarea
        :value="item"
        class="item-text"
        placeholder="Введите требование"
        :auto-size="{ minRows: 2 }"
        @input="$emit('update:item', $event.target.value)"
      />
    </template>
    <div class="controls-container">
      <div class="controls">
        <blue-pencil-button
          v-if="!isItemEditable"
          class="right-control"
          @click="isItemEditable=!isItemEditable"
        >
          Редактировать
        </blue-pencil-button>
        <green-doc-button
          v-else
          class="right-control"
          @click="isItemEditable=!isItemEditable"
        >
          &nbsp;Сохранить
        </green-doc-button>
        <trash-red-button
          class="right-control "
          @click="$emit('deleteItem')"
        >
          Удалить
        </trash-red-button>
      </div>
    </div>
  </div>
</template>

<script setup
        lang="ts"
>
import { ref } from 'vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import BluePencilButton from '@/components/UI/buttons/BluePencilButton.vue';
import TrashRedButton from '@/components/UI/buttons/TrashRedButton.vue';

const props = defineProps({ //eslint-disable-line
  item: {
    type: String,
    required: true,
  },
});
defineEmits(['update:item', 'deleteItem']); //eslint-disable-line
const isItemEditable = ref(false);
</script>

<style scoped>
.controls {
  display: flex;
  font-size: 13px;
}

.controls-container {
  display: inline-block;
  vertical-align: top;
  margin-left: 65px;
}

.right-control {
  margin: 0 5px;
}

.item-container {
  position: relative;
  display: block;
  justify-content: space-between;
  align-items: flex-start;
}

.item-text {
  padding: 5px;
  max-width: 700px;
  width: 700px;
  display: inline-block;
  font-family: Inter, serif;
  font-size: 11pt;
  line-height: 1.2em;
  overflow-wrap: break-word;
}
</style>
