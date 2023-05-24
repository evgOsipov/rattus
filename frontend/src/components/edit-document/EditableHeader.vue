<template>
  <div class="container">
    <div
      v-if="!isHeaderEditing"
      class="non-editable-header"
    >
      <h3 class="big-header">
        {{ headerPlaceholder }}
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
        class="header-input"
        size="large"
        :placeholder="placeholder"
        :value="header"
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
        lang="ts"
>
import { computed, ref } from 'vue';
import SimpleButton from '@/components/UI/SimpleButton.vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import PencilButton from '@/components/UI/buttons/BluePencilButton.vue';

const isHeaderEditing = ref(false);
const props = defineProps({ // eslint-disable-line
  header: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Введите название',
    required: false,
  },
});
defineEmits(['update:header']); // eslint-disable-line
const headerPlaceholder = computed(() => (props.header.length ? props.header : 'Новое ТЗ'));
</script>
<style scoped>
.square {
  border-radius: 0;
}

.header-input {
  font-size: 13pt;
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
  font-size: 13px;
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
