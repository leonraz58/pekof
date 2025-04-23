<script setup lang="ts">
import TheTypography from '@/components/TheTypography.vue'
</script>

<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <TheTypography h3>Избранное</TheTypography>
      <TheTypography h2>8 800 888 00 88</TheTypography>
    </div>
  </footer>
</template>

<style lang="scss">
.the-footer {
  background-color: var(--primary-900);
  &__container {
    height: 96px;
    max-width: 1400px;
    margin: 0 auto;
    color: var(--primary-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
