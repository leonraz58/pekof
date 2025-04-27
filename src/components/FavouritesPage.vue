<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import TheTypography from '@/components/TheTypography.vue'
import FavouritesList from '@/components/FavouritesList.vue'
import { useStore } from '@/stores/products.js'
import { inject } from 'vue'

const store = useStore()
const { onClickFavourite } = inject('provider')
</script>

<template>
  <div class="favourites-page">
    <PageContainer>
      <TheBreadcrumb>{{ item?.title }}</TheBreadcrumb>
      <TheTypography class-name="favourites-page__title" h1>Избранное</TheTypography>
      <FavouritesList :items="store.getFavourites" :onClickFavourite="onClickFavourite" />
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
