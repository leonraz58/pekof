<script setup lang="ts">
import TheTypography from '@/components/TheTypography.vue'
</script>

<template>
  <div class="the-breadcrumb the-breadcrumb__container">
    <TheTypography
      ><RouterLink to="/">Главная</RouterLink> >
      <slot></slot>
    </TheTypography>
  </div>
</template>

<style lang="scss">
.the-breadcrumb {
  &__container {
    padding-top: 32px;
  }
}
</style>
