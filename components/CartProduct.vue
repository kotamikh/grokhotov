<template>
  <div class="product">
    <div class="product__img-box">
      <img class="product__img" :src="img" :alt="name"/>
    </div>
    <div class="product__text-box">
      <div class="product__information">
        <p class="product__name">{{ name }}</p>
        <p class="product__description">{{ description }}</p>
        <p class="product__article">Артикул: {{ article }}</p>
      </div>
      <div class="product__quantity">
        <div class="product__quantity-buttons">
          <button class="product__quantity-button product__quantity-button_decrease" @click="$emit('decreaseCount')">
            <Icon name="ic:outline-minus"/>
          </button>
          <p class="product__quantity-counter">{{ count }}</p>
          <button class="product__quantity-button product__quantity-button_increase" @click="$emit('increaseCount')">
            <Icon name="ic:outline-plus"/>
          </button>
        </div>
        <client-only>
          <div class="product__unit-price">{{ count > 1 ? price.toLocaleString() + ' ₽/шт.' : '' }}</div>
        </client-only>
      </div>
      <client-only>
        <div class="product__price">{{ (price * count).toLocaleString() }} ₽</div>
      </client-only>
    </div>
    <button class="product__delete-button" @click="$emit('delete')">
      <Icon name="material-symbols:close" size="18"/>
    </button>
  </div>
</template>

<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
defineProps<{
  id: number,
  img: string,
  name: string,
  description: string,
  article: string,
  count: number,
  price: number,
}>()

defineEmits(['decreaseCount', 'increaseCount', 'delete'])
</script>

<style scoped>
.product {
  display: flex;
  height: 121px;
  position: relative;
  box-sizing: border-box;
  padding: 0 53px 20px 15px;
}

.product:not(:last-of-type) {
  border-bottom: 1px solid #C4C4C4;
}

.product__img-box {
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding-right: 31px;
}

.product__img {
  width: inherit;
  height: inherit;
}

.product__text-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.product__information {
  gap: 6px;
  display: flex;
  max-width: 263px;
  flex-direction: column;
}

.product__name {
  line-height: 23px;
}

.product__description {
  font-size: 12px;
  line-height: 18px;
  color: var(--dark-grey);
}

.product__article {
  font-size: 14px;
  line-height: 21px;
  color: var(--light-grey);
}

.product__quantity {
  gap: 8px;
  height: 59px;
  display: flex;
  padding-top: 25px;
  align-self: center;
  align-items: center;
  flex-direction: column;
}

.product__quantity-buttons {
  display: flex;
  height: 34px;
  width: 102px;
}

.product__quantity-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  width: 34px;
  border: none;
  cursor: pointer;
  background-color: var(--background);
}

.product__quantity-button_decrease {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.product__quantity-button_increase {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.product__quantity-counter {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  margin: 0 1px;
  background-color: var(--background);
}

.product__unit-price {
  height: 17px;
  font-size: 12px;
  font-family: Roboto, sans-serif;
}

.product__price {
  align-self: center;
  font-family: Roboto, sans-serif;
}

.product__delete-button {
  top: 0;
  right: 6px;
  position: absolute;

  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
</style>
