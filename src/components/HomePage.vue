<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { inject } from 'vue'

const { items, onClickFavourite } = inject('provider')

</script>

<template>
  <div class="the-banner"></div>
  <ProductList :items="items" :onClickFavourite="onClickFavourite" />
</template>

<style lang="scss">
.the-banner {
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 505px;
}

</style>

