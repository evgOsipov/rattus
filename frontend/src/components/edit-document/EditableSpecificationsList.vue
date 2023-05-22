<template>
  <div>
    <empty-list class="specifications-list"
                v-if="!specifications.length"/>
    <div class="specifications-list">
      <div v-for="(specification, i) in specifications"
           :key="i"
      >
        <editable-item
            v-model:item="specification.title"
            :object="specification"
            class="specification"
            @delete-item="removeFromList"
        />
      </div>
    </div>
    <form @submit.prevent
          class="title-form title-form__specifications">
      <a-textarea
          v-model:value="newSpecification"
          class="text-field"
          placeholder="Ввод нового требования"
          :auto-size="{ minRows: 2 }"
      />
      <green-doc-button @click="addNewSpecification"
                        class="square"
      />
    </form>
  </div>
</template>

<script setup
        lang="ts">
import EmptyList from '@/components/EmptyList';
import EditableItem from '@/components/edit-document/EditableItem.vue';
import { ISpecification } from '@/interfaces/ISpecification';
import { PropType, ref } from 'vue';
import GreenDocButton from '@/components/UI/buttons/GreenDocButton.vue';

const props = defineProps({
  specifications: {
    type: Object as PropType<Partial<ISpecification>[]>,
    required: true,
  },
});
const newSpecification = ref('');
const addNewSpecification = () => {
  if (newSpecification.value) {
    props.specifications.push({
      title: newSpecification.value,
    });
    newSpecification.value = '';
  }
};
const removeFromList = (key: any) => {
  const newList: Partial<ISpecification>[] = props.specifications.filter((item) => {
    return item != key;
  });
  if (props.specifications.length > newList.length) {
    props.specifications.splice(0, props.specifications.length);
    newList.forEach((el) => {
      props.specifications.push(el);
    });
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

.square {
  border-radius: 0;
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
