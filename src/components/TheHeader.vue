<script setup lang="ts">
import FavouritesBadge from '@/components/FavouritesBadge.vue'
import { inject } from 'vue'

const { favCount } = inject('provider')

</script>
<template>
  <header class="the-header">
    <div class="the-header__container">
      <img src="/logo.png" alt="logo" class="the-header__logo" />
      <FavouritesBadge :value="favCount" />
    </div>
  </header>
</template>

<style lang="scss">
.the-header {
  border-bottom: 1px solid var(--primary-900);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  &__container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
  }
  &__logo {
    width: 160px;
    transform: translateY(-7px);
  }
}
</style>
