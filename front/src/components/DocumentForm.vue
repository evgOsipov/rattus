<template>
  <form
      @submit.prevent
      class="document-form"
  >
    <router-link to="/edit">
      <simple-button
          class="add-document"
      >
        <i class="icon-add"/>
        <span class="btn-text">
        Создать техническое задание
      </span>
      </simple-button>
    </router-link>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4951EC;
  color: #FFF;
}
.icon-add {
  margin-right: 6px;
  font-size: 24px;
}
.add-document:active {
  background: #FFF;
  color: #4951EC;
  border: 1px solid #000;
}
</style>
