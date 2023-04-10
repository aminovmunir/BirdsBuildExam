<template>
  <div class="search">
    <input @input="search" type="text" :value="searchValue" placeholder="Поиск">
    <button>
      <search-svg></search-svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const searchValue = ref(localStorage.getItem('name'))

const emit = defineEmits(['search'])

let timeoutId: null | ReturnType<typeof setTimeout> = null

const search = (event: {target: {value: string}}): void => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(()=> {
    localStorage.setItem('name', event.target.value)
    emit('search', event.target.value)
  }, 200)
}

</script>
