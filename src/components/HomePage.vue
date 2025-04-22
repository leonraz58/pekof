<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const items = ref([])

onMounted(async ()=>{
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    items.value = data.map((obj) => ({
      ...obj,
      isFavourite: false,
    }))
  } catch (error) {
    console.log(error)
  }
})

const onClickFavourite = (item) => {
  item.isFavourite = !item.isFavourite
}



</script>

<template>
  <div class="the-banner"></div>
  <ProductList :items="items" :onClickFavourite="onClickFavourite"/>
</template>

<style lang="scss">
.the-banner {
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 505px;
}

</style>

