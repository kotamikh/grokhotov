<template>
  <div class="product-card">
    <div class="product-card__img-box">
      <img :src="img" alt="props.name" class="product-card__img"/>
    </div>
    <div class="product-card__info-box">
      <p class="product-card__name">{{ name }}</p>
      <p class="product-card__description">{{ description }}</p>
    </div>
    <div class="product-card__price-box">
      <client-only>
        <p class="product-card__rub-price">
          {{ priceFromRub.toLocaleString() + ' ₽ – ' + priceToRub.toLocaleString() + ' ₽' }}</p>
      </client-only>
      <p class="product-card__eur-price">{{ priceFromEur + ' € – ' + priceToEur + ' €' }}</p>
    </div>
    <button class="product-card__button">Подробнее</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number,
  img: string,
  name: string,
  description: string,
  priceFromRub: number,
  priceToRub: number,
  priceFromEur: number,
  priceToEur: number
}>()
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;

  width: 305px;
  height: 563px;
  padding: 25px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--background);
}

.product-card__img-box {
  width: 245px;
  height: 245px;
  padding-right: 10px;
  object-fit: contain;
}

.product-card__img {
  width: inherit;
  height: inherit;
}

.product-card__info-box {
  gap: 10px;
  display: flex;
  margin-bottom: auto;
  flex-direction: column;
}

.product-card__name {
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
}

.product-card__description {
  font-size: 14px;
  line-height: 20px;
}

.product-card__price-box {
  gap: 3px;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
}

.product-card__rub-price {
  font-size: 22px;
  line-height: 28px;
  font-family: Roboto, sans-serif;
}

.product-card__eur-price {
  line-height: 23px;
  color: var(--light-grey);
}

.product-card__button {
  border: none;
  height: 52px;
  cursor: pointer;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--blue);
}
</style>
