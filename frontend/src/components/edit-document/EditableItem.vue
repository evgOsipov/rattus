<template>
  <div class="item-container">
    <trash-red-button
        class="right-control outside-control"
        :short="true"
        @click="$emit('deleteItem', props.object)"
    />
    <template v-if="!isSpecEditable">
      <div class="item-text">
        {{ props.item }}
      </div>
      <pencil-button
          class="right-control"
          :short="true"
          @click="isSpecEditable=!isSpecEditable"
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
          class="right-control"
          @click="isSpecEditable=!isSpecEditable"
          :short="true"
      />
    </template>

  </div>
</template>

<script setup
        lang="ts">
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import PencilButton from '@/components/UI/buttons/PencilButton.vue';
import TrashRedButton from '@/components/UI/buttons/TrashRedButton.vue';

const props = defineProps({
  item: {
    type: String,
    required: true,
  },
  object: {
    required: true
  }
});
defineEmits(['update:item', 'deleteItem']);
const isSpecEditable = ref(false);
</script>

<style scoped>
.right-control {
  float: right;
  display: inline-block;
  vertical-align: center;
  margin-right: 50px;
}

.item-container {
  position: relative;
  display: block;
  justify-content: space-between;
  align-items: flex-start;
}

.outside-control {
  margin-right: 70px;
}

.item-text {
  padding: 5px;
  max-width: 800px;
  width: 800px;
  display: inline-block;
  font-family: Inter,serif;
  font-size: 11pt;
}
</style>
