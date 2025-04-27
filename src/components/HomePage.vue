<script setup>
import ProductList from '@/components/ProductList.vue'
import { inject } from 'vue'
import { useStore } from '@/stores/products.js'
import PageContainer from '@/components/PageContainer.vue'

const { onClickFavourite } = inject('provider')

const store = useStore()
</script>

<template>
  <PageContainer>
    <div class="the-banner"></div>
    <ProductList :items="store.items" :onClickFavourite="onClickFavourite" />
  </PageContainer>
</template>

<style lang="scss">
.the-banner {
  background-image: url('/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 505px;
}
</style>
