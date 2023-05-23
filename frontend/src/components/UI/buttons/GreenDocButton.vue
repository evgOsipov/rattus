<template>
  <template-button
    class="green-save-btn"
  >
    <i class="icon-save"/>
    <slot/>
  </template-button>
</template>

<script setup
        lang="ts"
>
import TemplateButton from '@/components/UI/buttons/button-classes/TemplateButton.vue';
</script>

<style scoped>
.green-save-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #38AE00;
  color: #FFF;
  border: 1px solid #747474;
}

.green-save-btn:active {
  background: #FFF;
  color: #38AE00;
}

i.icon-save:before {
  background-size: 24px 24px;
  font-size: 24px;
}
</style>
