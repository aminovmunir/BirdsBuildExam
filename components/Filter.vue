<template>
  <div class="filter">
    <ul>
      <li @click="changeFilter('')"
      :class="`${store.activeSellingType ? '' : 'active'}`">
        Все
      </li>
      <li :class="`${store.activeSellingType == 'Прямые продажи'  ? 'active' : ''}`"
      @click="changeFilter('Прямые продажи')">
        Прямые продажи
      </li>
      <li :class="`${store.activeSellingType == 'Аукцион'  ? 'active' : ''}`"
      @click="changeFilter('Аукцион')">
        Аукцион
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store/";
const store = useStore()
const emit = defineEmits(['change'])

const changeFilter = (selling_type: string): void => {
  if (store.activeSellingType == selling_type) {
    return
  }
  emit('change', selling_type)
  localStorage.setItem('selling_type', selling_type)
  store.setActiveFilter(selling_type)
}
</script>

