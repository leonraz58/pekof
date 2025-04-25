import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('products', {
  state: () => {
    return {
      items: [],
      favourites: [],
    }
  },

  actions: {
    async fetchItems() {
      try {
        const localFavourites = localStorage.getItem('favourites')
        this.favourites = localFavourites ? JSON.parse(localFavourites) : []

        const { data } = await axios.get('https://fakestoreapi.com/products')
        this.items = data.map((obj) => ({
          ...obj,
          isFavourite: false,
        }))

        this.items = this.items.map((item) => ({
          ...item,
          isFavourite: this.favourites.some((favItem) => favItem.id === item.id),
        }))
        console.log('fetchItems', this.items)
        localStorage.setItem('favourites', JSON.stringify(this.favourites))
      } catch (error) {
        console.log(error)
        return error
      }
    },
    setIsFavorite(item) {
      if (item.isFavourite) {
        this.favourites.splice(this.favourites.indexOf(item), 1)
      } else {
        this.favourites.push(item)
        console.log(this.favourites)
      }
    },
  },
  getters: {
    favCount: (state) => state.favourites.length,
  },
})
