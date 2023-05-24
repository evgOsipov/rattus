<template>
  <loading v-if="isLoading"/>
  <div class="report" v-else>
    <div class="report-header">
      <h3 class="report-title">Протокол проверки {{entity.title}}</h3>
      <simple-button class="report-exit" @click="$router.go(-1)">Выйти</simple-button>
    </div>
    <div class="report-list">
      <div class="report-list__title">
        <h3 class="list-header__title">Список требований</h3>
        <short-button class="list-header__add-file"><i class="icon-download"></i></short-button>
        <simple-button class="list-header__file">ТЗ_по_созданию....docx</simple-button>
      </div>
      <div class="report-list__header">
        <div>Требование</div>
        <div class="list-header__status">Статус</div>
        <div class="list-header__comment">Комментарий</div>
      </div>

      <empty-list
          v-if="!specifications.length"
          class="empty-list"
      />
      <div v-else>
        <specification
            class="report-list__body"
            ref="child"
            v-for="specification in specifications"
            :specification="specification"
        />
      </div>
    </div>
    <simple-button class="report-list__save" @click="saveReport">Сохранить протокол</simple-button>
  </div>

</template>

<script setup
        lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router/dist/vue-router'
import {
  createReport,
  getDocument,
  getReport,
  getSpecificationsByDocument,
  getSpecificationsByReport,
  updateReport
} from '@/api/api'
import SimpleButton from '@/components/UI/SimpleButton.vue';
import ShortButton from '@/components/UI/ShortButton.vue'
import Loading from '@/components/Loading.vue'
import Specification from '@/components/create-report/Specification.vue'
import EmptyList from '@/components/EmptyList.vue'
import { ISpecification } from '@/interfaces/ISpecification';
import { IDocument } from '@/interfaces/IDocument';
import { IReport } from '@/interfaces/IReport';

const entity: Ref<IDocument | IReport | null> = ref(null);
const specifications: Ref<ISpecification[]> = ref([]);
const isLoading = ref(true);
const child: Ref<Array<{
  saveSpecification: (id: string) => void;
  changeSpecification: () => void;
}> | null> = ref(null);
const route = useRoute();

onMounted(async () => {
  if (route.path.includes('evaluate')) {
    entity.value = await getDocument(route.params.id as string);
    specifications.value = await getSpecificationsByDocument(route.params.id as string);
  }
  if (route.path.includes('report')) {
    entity.value = await getReport(route.params.id as string);
    specifications.value = await getSpecificationsByReport(route.params.id as string);
  }
  isLoading.value = false;
})

const saveReport = async () => {
  if (route.path.includes('evaluate')) {
    const report = await createReport(entity.value?.title as string, entity.value?.id as string).then(res => res);
    if (child?.value?.length) {
      for (const item of child.value) {
        await item.saveSpecification(report.id);
      }
    }
  }
  if (route.path.includes('report')) {
    await updateReport(entity.value?.id as string, entity.value?.title as string);
    if (child?.value?.length) {
      for (const item of child.value) {
        await item.changeSpecification();
      }
    }
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
  justify-content: space-between;
  gap: 15px;
}
.report-title {
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
}
.report-exit {
  min-width: 150px;
  border: 1px solid #4951EC;
  border-radius: 0;
}
.report-exit:active {
  color: #FFF;
  background: #4951EC;
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
  color: #FFF;
}
.list-header__add-file:active {
  background: #FFF;
  color: #747474;
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
  grid-template-columns: 3fr 0.75fr 3fr;
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
.icon-download {
  font-size: 24px;
}
.empty-list {
  padding: 15px 0;
  border-bottom: 1px solid #D4D4D4;
}
</style>
