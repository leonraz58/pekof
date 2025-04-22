<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { onMounted, provide, ref, watch, computed} from 'vue'
import axios from 'axios'

const items = ref([])
const favourites = ref([])

const favCount = computed(() => favourites.value.length ?? 0)

watch(
  favourites,
  () => {
    localStorage.setItem('favourites', JSON.stringify(favourites.value))
    console.log(favCount.value)
  },
  { deep: true }
)

onMounted(async () => {
  const localFavourites = localStorage.getItem('favourites')
  favourites.value = localFavourites ? JSON.parse(localFavourites) : []

  try {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    items.value = data.map((obj) => ({
      ...obj,
      isFavourite: false
    }))
  } catch (error) {
    console.log(error)
  }

  items.value = items.value.map((item) => ({
    ...item, isFavourite: favourites.value.some((favItem) => favItem.id === item.id)
  }))
})

const onClickFavourite = (item) => {
  if (item.isFavourite) {
    favourites.value.splice(favourites.value.indexOf(item), 1)
  } else {
    favourites.value.push(item)
  }
  item.isFavourite = !item.isFavourite
}

provide('provider', {
  favourites,
  onClickFavourite,
  items,
  favCount
})
</script>

<template>
  <TheHeader/>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
</style>
