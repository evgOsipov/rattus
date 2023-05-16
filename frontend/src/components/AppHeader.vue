<template>
  <header class="header">
    <router-link to="/">
      <img class="rattus-logo" src="../../public/img/logo.png" alt="rattus logo">
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.rattus-logo {
  width: 202px;
  height: 56px;
}
</style>
