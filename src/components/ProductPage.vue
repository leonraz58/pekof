<script setup lang="ts">
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import { useStore } from '@/stores/products.ts'
import PageContainer from '@/components/PageContainer.vue'
import { useRoute } from 'vue-router'
import noImage from '/no-image.webp'
import TheTypography from '@/components/TheTypography.vue'
import TheButton from '@/components/TheButton.vue'
import IconHeartOutline from '@/components/icons/IconHeartOutline.vue'

const store = useStore()
const route = useRoute()

const item = store.getItemById(+route.params.id)
console.log(item)
</script>

<template>
  <div class="product-page">
    <PageContainer>
      <div v-if="item">
        <TheBreadcrumb>{{ item?.title }}</TheBreadcrumb>
        <div class="product-page__container">
          <img :src="item?.image ?? noImage" alt="product image" class="product-page__image" />
          <div class="product-page__info-block">
            <TheTypography h1>{{ item?.title }}</TheTypography>
            <TheTypography p1>{{ item?.description }}</TheTypography>
            <TheTypography p1 class-name="product-page__price"
              >{{ item?.price }} руб.
            </TheTypography>
            <div>
              <TheButton outline>
                <IconHeartOutline />
                ИЗБРАННОЕ
              </TheButton>
            </div>
          </div>
        </div>
      </div>
      <TheTypography v-if="!item" h1 center>Товар не найден.</TheTypography>
    </PageContainer>
  </div>
</template>

<style lang="scss">
.product-page {
  &__container {
    display: flex;
    gap: 40px;
    margin: 32px 0;
  }

  &__image {
    width: 100%;
    max-width: 715px;
    max-height: 680px;
    object-fit: contain;
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 560px;
  }

  &__price {
    font-weight: 700;
  }
}
</style>
