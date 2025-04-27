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
  <div class="favourites-list">
    <div class="favourites-list__container">
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
        is-favourites-item
      />
    </div>
  </div>
</template>

<style lang="scss">
.favourites-list {
  &__container {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, auto));
    gap: 40px;
  }
}
</style>
