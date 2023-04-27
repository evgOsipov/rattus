<template>
  <button
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SimpleButton'
}
</script>

<style scoped>
.btn {
  height: 48px;
  width: 140px;
  font-weight: 600;
  font-size: 13px;

  border: 1px solid #000;
  border-radius: 8px;

  background: #fff;
}
</style>
