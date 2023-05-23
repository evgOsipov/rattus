<template>
  <template-button
    class="pencil-btn"
  >
    <i class="icon-edit"/>
    <slot/>
  </template-button>
</template>

<script setup
        lang="ts"
>
import TemplateButton from '@/components/UI/buttons/button-classes/TemplateButton.vue';
</script>

<style scoped>
.pencil-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0085FF;
  border-color: #0085FF;
}

.pencil-btn:active {
  background: #0085FF;
  color: #FFF;
  border-color: #000;
}
i.icon-edit:before {
  background-size: 24px 24px;
  font-size: 24px;
}
</style>
