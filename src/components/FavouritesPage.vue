<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import TheTypography from '@/components/TheTypography.vue'
import FavouritesList from '@/components/FavouritesList.vue'
import { useStore } from '@/stores/products.js'
import { computed, inject } from 'vue'

const store = useStore()
const items = computed(() => store.getFavourites)
console.log(items)
const { onClickFavourite } = inject('provider')
</script>

<template>
  <div class="favourites-page">
    <PageContainer v-if="items.length > 0">
      <TheBreadcrumb>{{ item?.title }}</TheBreadcrumb>
      <TheTypography class-name="favourites-page__title" h1>Избранное</TheTypography>
      <FavouritesList :items="items" :onClickFavourite="onClickFavourite" />
    </PageContainer>
    <PageContainer centered v-else>
      <TheTypography h1>Список избранного пуст</TheTypography>
    </PageContainer>
  </div>
</template>

<style lang="scss">
.favourites-page {
  &__title {
    margin-top: 16px;
  }
}
</style>
