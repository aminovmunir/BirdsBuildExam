<template>
  <li :class="`nav-item ${props.route == route.path ? 'active' : ''}`">
    <nuxt-link :to="props.route" tag="a">
      <component :is="props.svg" />
      <span>
        {{ props.name }}
      </span>
    </nuxt-link>
  </li>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  name?: string;
  svg?: string;
  route: string; // required
}
const route = useRoute()
const props = defineProps<Props>()
  
</script>