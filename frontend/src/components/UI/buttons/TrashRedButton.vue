<template>
  <template-button
    class="trash-red-btn"
  >
    <i class="icon-delete" />
    <slot />
  </template-button>
</template>

<script setup
        lang="ts"
>
import TemplateButton from '@/components/UI/buttons/button-classes/TemplateButton.vue';
</script>

<style scoped>
.trash-red-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FF0000;
  color: #FFF;
  border-color: #000;
}

.trash-red-btn:active {
  background: #FFF;
  color: #FF0000;
}

i.icon-delete:before {
  background-size: 24px 24px;
  font-size: 24px;
}
</style>
