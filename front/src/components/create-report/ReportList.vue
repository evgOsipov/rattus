<template>
  <loading v-if="isLoading"/>
  <div class="report" v-else>
    <div class="report-header">
      <h3 class="report-title">Протокол проверки {{document.title}}</h3>
      <simple-button class="report-exit" @click="$router.push('/')">Выйти</simple-button>
    </div>
    <div class="report-list">
      <div class="report-list__title">
        <h3 class="list-header__title">Список требований</h3>
        <short-button class="list-header__add-file"></short-button>
        <simple-button class="list-header__file">ТЗ_по_созданию....docx</simple-button>
      </div>
      <div class="report-list__header">
        <div>Требование</div>
        <div class="list-header__status">Статус</div>
        <div class="list-header__comment">Комментарий</div>
      </div>

      <empty-list v-if="isEmpty"/>
      <div v-else>
        <specification
            class="report-list__body"
            v-for="specification in specifications"
            :specification="specification"
        />
      </div>
    </div>
    <simple-button class="report-list__save">Сохранить протокол</simple-button>
  </div>

</template>

<script>
import SimpleButton from '@/components/UI/SimpleButton'
import ShortButton from '@/components/UI/ShortButton'
import Loading from '@/components/Loading'
import Specification from '@/components/create-report/Specification'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router/dist/vue-router'
import { getDocument, getSpecificationsByDocument } from '@/api/api'
import EmptyList from '@/components/EmptyList'
export default {
  name: 'ReportList',
  components: { EmptyList, SimpleButton, ShortButton, Specification, Loading },
  setup() {
    const document = ref({});
    const specifications = ref([]);
    const isLoading = ref(true);
    const isEmpty = ref(true);
    const route = useRoute();
    onMounted(async () => {
      document.value = await getDocument(route.params.id);
      specifications.value = await getSpecificationsByDocument(route.params.id);
      isLoading.value = false;
      isEmpty.value = !specifications.value.length
    })
    return {
      document,
      isLoading,
      isEmpty,
      specifications,
    };
  }
}
</script>

<style scoped>
.report {
  display: flex;
  flex-direction: column;
}
.report-header {
  margin-top: 70px;
  display: flex;
  gap: 20px;
}
.report-title {
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
}
.report-exit {
  justify-self: end;
}
.report-list {
  margin-top: 10px;
}
.report-list__title {
  display: flex;
  gap: 55px;
}
.list-header__title {
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
}
.list-header__add-file {
  background: #747474;
}
.list-header__file {
  color: #747474;
  font-size: 13px;
  line-height: 16px;
  min-width: 200px;

  border: 1px solid #D4D4D4;
}
.report-list__header, .report-list__body {
  display: grid;
  gap: 55px;
  grid-template-columns: 3fr 0.75fr 2fr;
  align-items: center;
  padding: 15px 0;
  line-height: 140%;
  border-bottom: 1px solid #D4D4D4;
}
.report-list__header {
  color: #747474;
}
.report-list__save {
  margin-top: 100px;
  justify-self: center;
  align-self: center;
  width: 410px;
  font-weight: 600;
  background: #4951EC;
  color: #FFF;
  border: none;
}
.report-list__save:active {
  background: #FFFFFF;
  border: 1px solid #000000;
  color: #4951EC;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.list-header__status {
  width: 180px;
}
.list-header__comment {
  width: 350px;
}
</style>
