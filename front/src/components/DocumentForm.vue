<template>
  <form
      @submit.prevent
      class="document-form"
  >
    <simple-button
        class="add-document icon-add"
    >
      Создать техническое задание
    </simple-button>
  </form>
</template>

<script>
import SimpleButton from '@/components/UI/SimpleButton'
export default {
  name: 'DocumentForm',
  components: { SimpleButton },
}
</script>

<style scoped>
.document-form {
  margin-top: 25px;

  display: flex;
  justify-content: center;
}
.add-document {
  width: 425px;
  background: #4951EC;
  color: #FFF;
}
</style>
