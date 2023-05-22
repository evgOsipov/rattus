<template>
  <short-button
      v-if="props.short"
      class="green-doc-btn"
  >
    <i class="icon-delete"/>
    <slot/>
  </short-button>
  <simple-button
      v-else
      class="green-doc-btn"
  >
    <i class="icon-delete"/>
    <slot/>
  </simple-button>
</template>

<script setup
        lang="ts">
import SimpleButton from '@/components/UI/buttons/button-classes/SimpleButton.vue';
import ShortButton from '@/components/UI/buttons/button-classes/ShortButton.vue';

const props = defineProps({
  short: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.green-doc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FF0000;
  color: #FFF;
  border-color: #000;
}

.green-doc-btn:active {
  background: #FFF;
  color: #FF0000;
}
i.icon-delete:before {
  background-size: 24px 24px;
  font-size: 24px;
}
</style>
