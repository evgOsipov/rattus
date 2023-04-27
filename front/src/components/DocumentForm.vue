<template>
  <form
      @submit.prevent
      class="document-form"
  >
    <input
        type="text"
        v-model="title"
    >
    <button
        class="add-document"
        @click="addDocument"
    >
      Создать документ
    </button>
  </form>
</template>

<script>
export default {
  name: 'DocumentForm',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addDocument() {
      this.$emit('addDocument', this.title);
      this.title = '';
    },
  },
}
</script>

<style scoped>

</style>