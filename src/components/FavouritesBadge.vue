<script setup lang="ts">
defineProps({ value: Number })
import IconHeart from '@/components/icons/IconHeart.vue'
</script>

<template>
  <RouterLink class="favourites-badge" to="/favourites">
    <div class="favourites-badge__container">
      <IconHeart />
      <span v-if="value > 0" class="favourites-badge__indicator">{{ value }}</span>
    </div>
  </RouterLink>
</template>
<style lang="scss">
.favourites-badge {
  cursor: pointer;

  &__container {
    position: relative;
  }

  &__indicator {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    border-radius: 100%;
    min-width: 16px;
    padding: 2px;
    transform: translate(8px, -2px);

    font-size: 8px;
    font-weight: bold;
    line-height: 12px;
    text-align: center;
    color: white;
  }
}
</style>
