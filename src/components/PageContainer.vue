<script setup lang="ts">
defineProps({
  centered: Boolean,
  className: String,
})
</script>

<template>
  <div
    class="page-container page-container__elem"
    :class="[centered && 'page-container__elem_centered', className]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.page-container {
  max-width: 1430px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
  &__elem {
    &_centered {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: var(--main-height);
    }
  }
}
</style>
