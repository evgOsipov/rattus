<template>
  <div class="documents-header">
    <div class="switcher">
      <router-link to="/">
        <simple-button :class="route.path === '/' ? 'switch-btn__active' : ''" class="switch-btn documents-switch">
          Технические задания
        </simple-button>
      </router-link>
     <router-link to="/reports">
       <simple-button :class="route.path === '/reports' ? 'switch-btn__active' : ''" class="switch-btn reports-switch">
         Протоколы
       </simple-button>
     </router-link>
    </div>
    <div class="documents-search">
      <input
          class="search-input"
          type="text"
          placeholder="Введите поисковый запрос"
          v-model="searchQuery"
      />
      <simple-button class="search-button"><i class="icon-search"/>Найти</simple-button>
    </div>
    <!--      <select v-model="selectedSort">-->
    <!--        <option value="date">Сортировать по дате</option>-->
    <!--        <option value="title">Сортировать по названию</option>-->
    <!--      </select>-->
  </div>
</template>

<script setup
        lang="ts">
import SimpleButton from '@/components/UI/SimpleButton.vue'
import { useRoute } from 'vue-router'
import { useSearchedAndSortedList } from '@/hooks/useSearchedAndSortedList';

const { searchQuery } = useSearchedAndSortedList();
const route = useRoute();
</script>

<style scoped>
.documents-header {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.switcher {
  display: flex;
}

.switch-btn {
  width: 213px;
  border: 1px solid #D4D4D4;
  border-radius: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
}

.switch-btn__active {
  opacity: 1;
  box-shadow: none;
}

.reports-switch {
  border-left: none;
}

.documents-search {
  margin-top: 50px;
  display: flex;
}

.search-input {
  padding-left: 16px;
  width: 285px;
  height: 48px;
  border: 1px solid #D4D4D4;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4951EC;
  color: #FFF;
  border: none;
  border-radius: 0;
}

.search-button:active {
  background: #FFF;
  color: #4951EC;
  border: 1px solid #000;
}

.icon-search {
  font-size: 24px;
  margin-right: 6px;
  padding-top: 4px;
  align-self: center;
  justify-self: center;
}
</style>
