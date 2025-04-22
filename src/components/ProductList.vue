<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'

type ItemType = {
  id: number
  price: number
  title: string
  image: string
}

defineProps({
  items: Array<ItemType>,
})
</script>

<template>
  <div class="product-list">
    <div class="product-list__container">
      <ProductItem v-for="item in items" :key="item.id" :price="item.price" :title="item.title" :image="item.image" />
    </div>
  </div>
</template>


<style lang="scss">
.product-list {
  &__container {
    padding-top: 112px;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, auto));
    gap: 40px
  }
}
</style>
