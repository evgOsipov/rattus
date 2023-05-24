<template>
  <div class="item-container">
    <template v-if="!isItemEditable">
      <div class="item-text">
        {{ props.item }}
      </div>
      <blue-pencil-button
        class="right-control edit-control short"
        :short="true"
        @click="isItemEditable=!isItemEditable"
      />
    </template>
    <template v-else>
      <a-textarea
        :value="item"
        class="item-text"
        placeholder="Введите требование"
        :auto-size="{ minRows: 2 }"
        @input="$emit('update:item', $event.target.value)"
      />
      <green-doc-button
        class="right-control short"
        @click="isItemEditable=!isItemEditable"
      />
    </template>
    <trash-red-button
      class="right-control short"
      :short="true"
      @click="$emit('deleteItem')"
    />
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
.right-control {
  display: block;
  position: absolute;
  top: 20px;
  right: 70px
}

.item-container {
  position: relative;
  display: block;
  justify-content: space-between;
  align-items: flex-start;
}

.edit-control {
  right: 168px;
}

.item-text {
  padding: 5px;
  max-width: 800px;
  width: 800px;
  display: inline-block;
  font-family: Inter, serif;
  font-size: 11pt;
}
</style>
