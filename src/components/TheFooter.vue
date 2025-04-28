<script setup lang="ts">
import TheTypography from '@/components/TheTypography.vue'
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <footer class="the-footer">
    <PageContainer>
      <div class="the-footer__container">
        <RouterLink to="/favourites">
          <TheTypography tag="h3" tag-variant="h3">Избранное</TheTypography>
        </RouterLink>
        <a href="tel:88008880088">
          <TheTypography tag="h2" tag-variant="h2">8 800 888 00 88</TheTypography>
        </a>
      </div>
    </PageContainer>
  </footer>
</template>

<style lang="scss">
.the-footer {
  background-color: var(--primary-900);

  &__container {
    height: 96px;
    color: var(--primary-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
