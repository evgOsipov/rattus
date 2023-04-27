<template>
  <div class="wrapper">
    <app-header
    />
    <main class="main">
      <main-page
      />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import MainPage from '@/pages/MainPage.vue'
export default {
  components: { AppHeader, MainPage }
}
</script>

<style>
@font-face {
  font-weight: 400;
  font-family: Inter;
  src: url("../public/fonts/Inter-Regular.ttf");
}
@font-face {
  font-weight: 500;
  font-family: Inter;
  src: url("../public/fonts/Inter-Medium.ttf");
}
@font-face {
  font-weight: 600;
  font-family: Inter;
  src: url("../public/fonts/Inter-SemiBold.ttf");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
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
}
</style>
