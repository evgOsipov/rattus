<template>
  <div>
    <empty-list
      v-if="!editItems.length"
      class="specification"
    />
    <div class="specifications-list">
      <div
        v-for="(editItem, i) in editItems"
        :key="i"
      >
        <editable-item
          v-if="editItem.itemStatus.localeCompare('delete')"
          v-model:item="editItem.item.title"
          class="specification"
          @delete-item="markOrDelete(editItem)"
        />
      </div>
    </div>
    <div class="add-item-container">
      <a-textarea
        v-model:value="newItem"
        class="text-field"
        placeholder="Ввод нового требования"
        :auto-size="{ minRows: 2 }"
      />
      <green-doc-button
        class="add-spec-btn"
        @click="addNewItem"
      >
        &nbsp;Добавить
      </green-doc-button>
    </div>
  </div>
</template>

<script setup
        lang="ts"
>
import EmptyList from '@/components/EmptyList.vue';
import EditableItem from '@/components/edit-document/EditableItem.vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import { PropType, ref, toRef } from 'vue';
import { IEditItem } from '@/interfaces/IEditItem';

const props = defineProps({ //eslint-disable-line
  editItems: {
    type: Object as PropType<IEditItem[]>,
    required: true,
  },
});
const itemsRef = toRef(props, 'editItems');
const newItem = ref('');
const addNewItem = () => {
  if (newItem.value) {
    let workString = newItem.value;
    workString = workString.replace(/\n$/g, '').replace(/^\n/g, '');
    const workSubstrings = workString.split('\n');
    workSubstrings.forEach((el) => {
      const trimmed = el.trimEnd().trimStart();
      if (trimmed) {
        itemsRef.value.push({
          item: { title: trimmed },
          itemStatus: 'new',
        });
      }
    });
  }
  newItem.value = '';
};
const markOrDelete = (obj: IEditItem) => {
  const itemStatus = toRef(obj, 'itemStatus');
  if (!itemStatus.value.localeCompare('new')) {
    const newList: IEditItem[] = props.editItems.filter((item) => item !== obj);
    if (props.editItems.length > newList.length) {
      itemsRef.value.splice(0, props.editItems.length);
      newList.forEach((el) => {
        itemsRef.value.push(el);
      });
    }
  } else {
    itemStatus.value = 'delete';
  }
};
</script>

<style scoped>
.add-spec-btn {
  margin-left: 70px;
  font-size: 13px;
}

.text-field {
  padding: 5px;
  max-width: 700px;
  width: 700px;
  display: block;
  font-family: Inter, serif;
  font-size: 11pt;
}

.add-item-container {
  display: flex;
  min-height: 48px;
  margin-top: 32px;
}

.specification {
  padding: 30px 0;
  border-bottom: 1px solid #D4D4D4;
  color: #272727;
  line-height: 19px;
}
</style>
