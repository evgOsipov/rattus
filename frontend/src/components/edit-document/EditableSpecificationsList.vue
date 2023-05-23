<template>
  <div>
    <empty-list
      v-if="!editItems.length"
      class="specifications-list"
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
    <div class="title-form title-form__specifications">
      <a-textarea
        v-model:value="newItem"
        class="text-field"
        placeholder="Ввод нового требования"
        :auto-size="{ minRows: 2 }"
      />
      <green-doc-button
        class="square short"
        @click="addNewItem"
      />
    </div>
  </div>
</template>

<script setup
        lang="ts"
>
import EmptyList from '@/components/EmptyList.vue';
import EditableItem from '@/components/edit-document/EditableItem.vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';
import { ISpecification } from '@/interfaces/ISpecification';
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
    itemsRef.value.push({
      item: { title: newItem.value },
      itemStatus: 'new',
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
.text-field {
  padding: 5px;
  max-width: 800px;
  width: 800px;
  display: block;
  font-family: Inter, serif;
  font-size: 11pt;
}

.title-form {
  display: flex;
  height: 48px;
}

.title-form__specifications {
  margin-top: 32px;
}

.specification {
  padding: 30px 0;
  border-bottom: 1px solid #D4D4D4;
  color: #272727;
  line-height: 19px;
}
</style>
