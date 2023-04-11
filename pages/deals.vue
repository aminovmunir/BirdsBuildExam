<template>
  <div class="container">
    <section class="filter-search">
      <Filter @change="filter" />
      <Search @search="search" />
    </section>
    <section class="content">
      <product-card
      @addFavorite="addToFavorite"
      @removeFavorite="removeFromFavorite"
      @payDeal="payDeal"
      v-for="deal in store.deals" :key="'product-' + deal.id"
      :product="deal"></product-card>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store/";
import { ClientJS } from 'clientjs';
import { onMounted } from "vue";

const store = useStore()
const client = new ClientJS();
const fingerprint = client.getFingerprint();

onMounted(async ()=>{
  store.setLoading(true)
  await store.getDeals(fingerprint)
  store.setLoading(false)
})

const filter = async (selling_type: string) => {
  const name: string | null = localStorage.getItem('name')
  store.setLoading(true)
  await store.getDeals(fingerprint, selling_type, name)
  store.setLoading(false)
}

const search = (name: string): void => {
  const selling_type: string | null = localStorage.getItem('selling_type')
  store.getDeals(fingerprint, selling_type, name)
}

const addToFavorite = async (product_id: number) => {
  store.setLoading(true)
  await store.addFavorite(fingerprint, product_id)
  store.setLoading(false)
}

const removeFromFavorite = async (product_id: number) => {
  store.setLoading(true)
  await store.removeFavorite(fingerprint, product_id)
  store.setLoading(false)
}

const payDeal = async (deal_id: number) => {
  store.setLoading(true)
  await store.payDeal(deal_id)
  store.setLoading(false)
}

</script>