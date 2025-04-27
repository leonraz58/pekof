<script setup lang="ts">
defineProps({
  outline: Boolean,
  disabled: Boolean,
})
</script>

<template>
  <button
    :disabled="disabled"
    class="the-button the-button__elem"
    :class="[outline && 'the-button__elem_outline']"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.the-button {
  &__elem {
    font-weight: 700;
    padding: 8px 34px;
    color: var(--primary-900);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 4px;

    &_outline {
      background-color: white;
      border: 1px solid var(--primary-900);
      &:hover {
        svg {
          fill: var(--primary-900);
        }
      }
      &:disabled {
        color: var(--primary-300);
        border-color: var(--primary-300);
        svg {
          path {
            fill: var(--primary-300);
            stroke: var(--primary-300);
          }
        }
      }
    }
  }
}
</style>
