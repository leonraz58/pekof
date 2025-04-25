<script setup>
import TheHeader from '@/components/TheHeader.vue'
import { onMounted, provide, ref } from 'vue'
import TheFooter from '@/components/TheFooter.vue'
import { useStore } from '@/stores/products.js'
import TheLoader from '@/components/TheLoader.vue'

const store = useStore()

const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await store.fetchItems()
  isLoading.value = false
})

const onClickFavourite = (item) => {
  store.setIsFavorite(item)
  item.isFavourite = !item.isFavourite
}

provide('provider', {
  onClickFavourite,
})
</script>

<template>
  <TheHeader />

  <main>
    <RouterView v-if="!isLoading.valueOf()" />
    <TheLoader v-if="isLoading.valueOf()" />
  </main>

  <TheFooter />
</template>

<style lang="scss"></style>
