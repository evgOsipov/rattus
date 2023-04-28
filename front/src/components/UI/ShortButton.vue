<template>
  <button
      class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ShortButton'
}
</script>

<style scoped>
.btn {
  width: 48px;
  height: 48px;
  border: 1px solid #000;
  border-radius: 8px;
  color: #000;
}
</style>
