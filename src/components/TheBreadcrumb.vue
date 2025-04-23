<script setup lang="ts">
import TheTypography from '@/components/TheTypography.vue'
</script>

<template>
  <div class="the-breadcrumb the-breadcrumb__container">
    <TheTypography><a href="/">Главная</a> >
      <slot></slot>
    </TheTypography>
  </div>
</template>

<style lang="scss">
  .the-breadcrumb {
    &__container {
      margin-top: 32px;
    }
  }
</style>
