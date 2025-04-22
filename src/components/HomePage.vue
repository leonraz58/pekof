<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const items = ref([])

onMounted(async ()=>{
  //fetch('https://fakestoreapi.com/products').then(res=>res.json().then(data=>console.log(data)))
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    items.value = data
    console.log(data)
  } catch (error) {
    console.log(error)
  }

})
</script>

<template>
  <div class="the-banner"></div>
  <ProductList :items="items"/>
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

