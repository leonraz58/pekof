<script setup lang="ts">
type TagVariant = 'p1' | 'p3' | 'h1' | 'h2' | 'h3'

type Props = {
  className?: String
  center?: Boolean
  tag?: { type: String; default: 'p' }
  tagVariant?: TagVariant
}

defineProps<Props>()
</script>

<template>
  <component
    :is="tag"
    :class="[
      tagVariant && `the-typography__elem_${tagVariant}`,
      center && 'the-typography__elem_center',
      className,
    ]"
    class="the-typography the-typography__p"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
.the-typography__elem {
  &_p3 {
    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }

  &_p1 {
    line-height: var(--line-height-l);
  }

  &_h3 {
    font-size: var(--font-size-m);
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

  &_center {
    text-align: center;
  }
}
</style>
