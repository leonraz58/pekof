<script setup lang="ts">
defineProps(
  {
    p3: Boolean,
    p1: Boolean,
    h3: Boolean,
    h2: Boolean,
    h1: Boolean,
    className: String,
  }
)
</script>


<template>
  <p :class="[
    p3 && 'the-typography__p_p3',
    p1 && 'the-typography__p_p1',
    h3 && 'the-typography__p_h3',
    h2 && 'the-typography__p_h2',
    h1 && 'the-typography__p_h1',
    className
  ]"
     class="the-typography the-typography__p"
  >
    <slot></slot>
  </p>
</template>

<style lang="scss">
.the-typography__p {
  &_p3 {
    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }

  &_p1 {
    line-height: var(--line-height-l);
  }

  &_h3 {
    line-height: var(--line-height-l);
    font-weight: var(--font-weight-medium);
  }

  &_h2 {
    font-size: var(--font-size-l);
    line-height: var(--line-height-xl);
    font-weight: var(--font-weight-medium);
  }

  &_h1 {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xxxl);
    font-weight: var(--font-weight-medium);
  }
}

</style>
