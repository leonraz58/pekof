<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'

type ItemType = {
  id: number
  price: number
  title: string
  image: string
  isFavourite: boolean
}

defineProps({
  items: Array<ItemType>,
  onClickFavourite: Function,
})
</script>

<template>
  <div class="product-list">
    <ul class="product-list__container">
      <ProductItem
        v-for="item in items"
        :key="item.id"
        :price="item.price"
        :title="item.title"
        :image="item.image"
        :item="item"
        :itemId="item.id"
        :is-favourite="item.isFavourite"
        :onClickFavourite="() => onClickFavourite(item)"
      />
    </ul>
  </div>
</template>

<style lang="scss">
.product-list {
  &__container {
    padding-top: 112px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, auto));
    gap: 40px;
  }
}
</style>
