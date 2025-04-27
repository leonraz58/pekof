<script setup>
import TheTypography from '@/components/TheTypography.vue'
import IconHeartOutline from '@/components/icons/IconHeartOutline.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

defineProps({
  title: String,
  price: Number,
  image: String,
  isFavourite: Boolean,
  onClickFavourite: Function,
  itemId: Number,
})
</script>

<template>
  <div class="product-item">
    <div class="product-item__icon" @click="onClickFavourite">
      <IconHeartOutline v-if="!isFavourite" /><IconHeart v-if="isFavourite" />
    </div>
    <a class="product-item__container" :href="'product/' + itemId.toString()">
      <img :src="image" alt="item-image" class="product-item__img" />
      <TheTypography p3 center className="product-item__title">{{ title }}</TheTypography>
      <TheTypography h3 center>{{ JSON.stringify(price) }} руб.</TheTypography>
    </a>
  </div>
</template>

<style lang="scss">
.product-item {
  position: relative;
  user-select: none;
  &__icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px 0;
      transition: 0.5s;
    }
  }
  &__img {
    height: 336px;
    width: 100%;
    object-fit: contain;
  }
  &__title {
    margin-top: 16px;
    margin-bottom: 8px;
  }
}
</style>
