<script setup lang="ts">
import TheTypography from '@/components/TheTypography.vue'
import IconHeartOutline from '@/components/icons/IconHeartOutline.vue'

defineProps({
  title: String,
  price: Number
})
</script>

<template>
<div class="product-item">
  <div class="product-item__icon"><IconHeartOutline/></div>
  <div class="product-item__container">
  <img src="/no-image.webp" alt="item-image" class="product-item__img"/>
    <TheTypography p3 className="product-item__text1">{{ title }}</TheTypography>
    <TheTypography h3>{{ JSON.stringify(price) }}</TheTypography>
  </div>
</div>
</template>

<style lang="scss">
.product-item {
  position: relative;
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
    border: 1px solid red;
    padding-bottom: 16px;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__text1 {
    margin-top: 16px;
    margin-bottom: 8px;
  }
}
</style>
