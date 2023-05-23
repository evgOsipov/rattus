<template>
  <div class="container">
    <div
      v-if="!isHeaderEditing"
      class="non-editable-header"
    >
      <h3 class="big-header">
        {{ header }}
      </h3>
      <pencil-button
        class="edit-btn short"
        @click="isHeaderEditing = !isHeaderEditing"
      />
    </div>
    <div
      v-else
      class="editable-header"
    >
      <a-input
        :placeholder="placeholder"
        :value="header"
        size="large"
        @input="$emit('update:header', $event.target.value)"
      />
      <green-doc-button
        class="square save-btn"
        @click="() => { if (header.length) isHeaderEditing = !isHeaderEditing }"
      >
        &nbsp;Сохранить
      </green-doc-button>
    </div>
    <simple-button
      class="exit-btn"
      @click="$router.push('/')"
    >
      Выйти
    </simple-button>
  </div>
</template>

<script setup
        lang="ts">
import { onMounted, ref } from 'vue';
import SimpleButton from '@/components/UI/SimpleButton.vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import PencilButton from '@/components/UI/buttons/BluePencilButton.vue';

const isHeaderEditing = ref(false);
const props = defineProps({ // eslint-disable-line
  header: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: 'Введите название',
    required: false,
  },
});
defineEmits(['update:header']); // eslint-disable-line
</script>
<style scoped>
.square {
  border-radius: 0;
}

.non-editable-header {
  display: flex;
  gap: 35px;
}

.big-header {
  font-size: 40px;
  overflow-wrap: break-word;
  line-height: 44px;
  font-weight: 400;
  max-width: 800px;
}

.container {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}

.non-editable-header {
  display: flex;
  gap: 35px;
  max-width: 900px;
}

.big-header {
  font-size: 40px;
  line-height: 44px;
  font-weight: 400;
}

.exit-btn {
  border: 1px solid #4951EC;
  border-radius: 0;

}

.exit-btn:active {
  color: #FFF;
  background: #4951EC;
}

.editable-header {
  display: flex;
  height: 48px;
}

.editable-header > input {
  width: 280px;
  padding-left: 12px;
}

.save-btn {
  color: white;
  border-color: black;
}

.edit-btn {
  color: black;
  background-color: white;
  border-color: black;
}

.edit-btn:active {
  color: white;
  background-color: black;
}
</style>
