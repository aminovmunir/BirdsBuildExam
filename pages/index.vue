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

const store = useStore()
const client = new ClientJS();
const fingerprint = client.getFingerprint();

store.getProducts(fingerprint)

const filter = (selling_type: string): void => {
  const name: string | null = localStorage.getItem('name')
  store.getProducts(fingerprint, selling_type, name)
}

const search = (name: string): void => {
  const selling_type: string | null = localStorage.getItem('selling_type')
  store.getProducts(fingerprint, selling_type, name)
}

const addToFavorite = (product_id: number): void => {
  store.addFavorite(fingerprint, product_id)
}

const removeFromFavorite = (product_id: number): void => {
  store.removeFavorite(fingerprint, product_id)
}

const addToDeal = (product_id: number): void => {
  store.addDeal(fingerprint, product_id)
}

</script>
