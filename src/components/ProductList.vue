<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'
</script>

<template>
  <div class="product-list">
    <div class="product-list__container">
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
      <ProductItem title="SomeTitle" :price="123"/>
    </div>
  </div>
</template>


<style lang="scss">
.product-list {
  &__container {
    padding-top: 32px;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, auto));
    gap: 40px
  }
}
</style>
