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
    <TransitionGroup name="list" tag="ul" class="favourites-list__container">
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
    </TransitionGroup>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
