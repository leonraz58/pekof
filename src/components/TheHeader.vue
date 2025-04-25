<script setup>
import FavouritesBadge from '@/components/FavouritesBadge.vue'
import { useStore } from '@/stores/products.js'

const store = useStore()
</script>
<template>
  <header class="the-header">
    <div class="the-header__container">
      <img src="/logo.png" alt="logo" class="the-header__logo" />
      <FavouritesBadge :value="store.favCount" />
    </div>
  </header>
</template>

<style lang="scss">
.the-header {
  box-sizing: border-box;
  border-bottom: 1px solid var(--primary-900);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 75px;
  &__container {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    width: 160px;
    transform: translateY(-7px);
  }
}
</style>
