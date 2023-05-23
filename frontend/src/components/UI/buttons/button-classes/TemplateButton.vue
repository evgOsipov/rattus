<template>
  <button class="template-btn simple">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TemplateButton',
};
</script>

<style scoped>
.template-btn {
  height: 48px;
  border-radius: 8px;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  background: #fff;
  font-weight: 500;
}
.simple {
  width: 140px;
}
</style>

<style>
.simple.short {
  width: 48px;
}
.simple.square {
  border-radius: 0;
}
</style>
