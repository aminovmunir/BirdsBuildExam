<template>
  <article class="product-card">
    <div class="info">
      <img class="product-img" :src="'http://t92976v4.beget.tech/img/' + props.product.img" alt="">
      <div class="product-info">
        <p class="selling-type">
          {{ props.product.selling_type }}
        </p>
        <h5 class="product-name">
          {{ props.product.name }}
        </h5>
        <div class="geo">
          <geo-svg></geo-svg>
          <span>
            {{ props.product.geo }}
          </span>
        </div>
        <div class="seller">
          <span class="label">Продавец</span> <span>{{ props.product.seller }}</span>
        </div>
        <div class="product-type">
          <span class="label">Вид товара</span>&nbsp;
          <span>{{ props.product.type }}</span>
        </div>
        <p class="product-description">
          {{ props.product.description }}
        </p>
      </div>
    </div>
    <div class="action">
      <div class="amount">
        <div class="total">
          {{ props.product.price * props.product.count }} ₽
        </div>
        <div class="count">
          <span class="label">
            Количество
          </span>
          <span>{{ props.product.count }} шт.</span>
        </div>
        <div class="count">
          <span class="label">
            Стоимость за штуку
          </span>
          <span>{{ props.product.price }} ₽</span>
        </div>
      </div>
      <div class="action-buttons-container">
        <button v-if="route.path == '/' || route.path == '/favorite'" @click="submit(props.product.id)"
        class="submit-btn">Добавить в сделки</button>
        <button v-else-if="route.path == '/deals' && props.product.is_paid == '0'"
        class="submit-btn green"
        @click="pay(props.product.deal_id)">Оплатить</button>
        <button v-else
        disabled
        class="submit-btn">Оплачено</button>
        <button @click="favoriteToggle(props.product.id, props.product.is_favorite)"
        :class="`favorite-btn ${props.product.is_favorite ? 'active' : ''}`">
          <favorite-svg :fill="props.product.is_favorite ? '#fff' : undefined"></favorite-svg>
        </button>
      </div>
    </div>
  </article>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Product } from '@/types/index'
const route = useRoute()
const props = defineProps({
  product: Object as PropType<Product>,
})

const emit = defineEmits(['addFavorite', 'removeFavorite', 'addDeal', 'payDeal'])

const favoriteToggle = (product_id: number, is_favorite: number | null): void => {
  if (!is_favorite) {
    emit('addFavorite', product_id)
  } else {
    emit('removeFavorite', product_id)
  }
}

const submit = (product_id: number): void => {
  emit('addDeal', product_id)
}

const pay = (deal_id: number): void => {
  emit('payDeal', deal_id)
}
</script>
