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
      @addDeal="addToDeal"
      v-for="product in store.products" :key="'product-' + product.id"
      :product="product"></product-card>
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
  const selling_type = localStorage.getItem('selling_type')
  const name = localStorage.getItem('name')
  store.setLoading(true)
  await store.getProducts(fingerprint, selling_type, name)
  store.setLoading(false)
})

const filter = async (selling_type: string) => {
  const name: string | null = localStorage.getItem('name')
  store.setLoading(true)
  await store.getProducts(fingerprint, selling_type, name)
  store.setLoading(false)
}

const search = (name: string): void => {
  const selling_type: string | null = localStorage.getItem('selling_type')
  store.getProducts(fingerprint, selling_type, name)
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

const addToDeal = async (product_id: number) => {
  store.setLoading(true)
  await store.addDeal(fingerprint, product_id)
  store.setLoading(false)
}

</script>
