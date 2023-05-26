<template>
  <div class="wrapper">
    <app-header
    />
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <span class="company">© 2023, ООО «Уно-Софт»</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

body {
}

a:active,
a:hover,
a {
  text-decoration: none;
  color: inherit;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

.wrapper {
  margin: 0 auto;
  width: 1096px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.main {
  flex: 1 1 auto;
}

.footer {
  height: 110px;
  display: grid;
  justify-content: center;
  align-content: center;
}

html {
  width: 100vw;
  overflow-x: hidden;
}
</style>
