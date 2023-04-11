import { $axios } from "@/plugins/axios";
import type { Product } from "@/types/";
import { defineStore } from 'pinia';

const selling_type = localStorage.getItem('selling_type')

export const useStore = defineStore('store', {
  state: () => ({
    products: <Product[]>[],
    favorites: <Product[]>[],
    activeSellingType: selling_type ? selling_type : '',
    deals: <Product[]>[],
    loading: false,
  }),

  actions: {
    setLoading(state: boolean): void{
      this.loading = state
    },
    async getProducts(fingerprint: number, selling_type: string | null = null, name: string | null = null) {
      try {
        const result = await $axios.get('/', {params: { device_id: fingerprint, selling_type: selling_type, name: name }})
        this.products = result.data
      } catch (error) {
        return error
      }
    },

    async getFavorites(fingerprint: number, selling_type: string | null = null, name: string | null = null) {
      try {
        const result = await $axios.get('/favorite.php', {params: { device_id: fingerprint, selling_type: selling_type, name: name }})
        this.favorites = result.data
      } catch (error) {
        return error
      }
    },

    setActiveFilter(selling_type: string): void {
      this.activeSellingType = selling_type
    },

    async addFavorite(fingerprint: number, product_id: number) {
      try {
        await $axios.post('/addfavorite.php', {device_id: fingerprint, product_id: product_id})
        this.deals.forEach((deal, index) => {
          if (deal.id == product_id) {
            this.deals[index].is_favorite = 2
          }
        })
        const productIndex: number | undefined = this.products.findIndex((product) => product.id == product_id)
        this.products[productIndex].is_favorite = 1
      } catch (error) {
        return error
      }
    },

    async removeFavorite(fingerprint: number, product_id: number) {
      try {
        await $axios.post('/removefavorite.php', {device_id: fingerprint, product_id: product_id})
        const productIndex: number | undefined = this.products.findIndex((product) => product.id == product_id)
        const favoriteIndex: number | undefined = this.favorites.findIndex((favorite) => favorite.id == product_id)
        this.favorites.splice(favoriteIndex, 1);
        this.deals.forEach((deal, index) => {
          if (deal.id == product_id) {
            this.deals[index].is_favorite = null
          }
        })
        this.products[productIndex].is_favorite = null
      } catch (error) {
        return error
      }
    },

    async addDeal(fingerprint: number, product_id: number) {
      try {
        await $axios.post('/adddeal.php', {device_id: fingerprint, product_id: product_id})
      } catch (error) {
        return error
      }
    },

    async getDeals(fingerprint: number, selling_type: string | null = null, name: string | null = null) {
      try {
        const result = await $axios.get('/deals.php', {params: { device_id: fingerprint, selling_type: selling_type, name: name }})
        this.deals = result.data
      } catch (error) {
        return error
      }
    },

    async payDeal(deal_id: number) {
      try {
        const result = await $axios.post('/paydeal.php', { deal_id: deal_id })
        const dealIndex: number | undefined = this.deals.findIndex((deal) => deal.deal_id == deal_id)
        this.deals[dealIndex].is_paid = 1
      } catch (error) {
        return error
      }
    }
  }
});