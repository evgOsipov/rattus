<template>
  <div class="document">{{ document.title }}</div>
</template>

<script>
export default {
  name: 'Document',
  props: {
    document: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>