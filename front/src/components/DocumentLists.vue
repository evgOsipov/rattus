<template>
  <div
      class="documents"
      v-if="isPostLoading"
  >
    <document
        v-for="document in documents"
        :document="document"
    />
  </div>
  <div
      class="loading"
      v-else
  >
    Loading...
  </div>
</template>

<script>
import { useDocuments } from '@/hooks/useDocuments'
import Document from '@/components/Document'
export default {
  name: 'DocumentLists',
  components: { Document },

  setup() {
    const { documents, totalPages, isPostLoading } = useDocuments();

    return {
      documents, totalPages, isPostLoading,
    }
  }
}
</script>

<style scoped>

</style>