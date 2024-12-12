<template>
  <div class="cart-container">
    <div class="cart">
      <div class="cart__header">
        <div class="cart__header-text">
          <h1 class="cart__h1">Ваша корзина</h1>
          <p class="cart__product-number">{{ getProductsNoun(store.cart.length) }}</p>
        </div>
        <button class="cart__header-button" @click="store.clearCart" v-show="store.cart.length">Очистить корзину
        </button>
      </div>
      <div class="cart__products">
        <cart-product v-for="product in store.cart"
                       :key="product.id"
                       :id="product.id"
                       :img="product.img"
                       :name="product.name"
                       :description="product.description"
                       :article="product.article"
                       :count="product.count"
                       :price="product.price"
                       @decreaseCount="store.decreaseCount(product.id)"
                       @increaseCount="store.increaseCount(product.id)"
                       @delete="store.deleteProduct(product.id)"
        />
      </div>
      <installation-checkbox v-show="store.cart.length" v-model="store.installation"/>
      <div v-show="!store.cart?.length">
        <p>В корзине пусто</p>
      </div>
    </div>

    <div class="sum-counter" v-show="store.cart.length">
      <p class="sum-counter__header">Итого</p>
      <div class="sum-counter__positions">
        <div class="sum-counter__position">
          <p>Сумма заказа</p>
          <client-only>
            <p class="sum-counter__position_roboto">{{ store.totalSum.toLocaleString() }} ₽</p>
          </client-only>
        </div>
        <div class="sum-counter__position">
          <p>Количество</p>
          <p>{{ store.cart.length }} шт.</p>
        </div>
        <div class="sum-counter__position">
          <p>Установка</p>
          <p>{{ store.installation ? 'Да' : 'Нет' }}</p>
        </div>
      </div>
      <div class="sum-counter__total-cost">
        <p>Стоимость товаров</p>
        <client-only>
          <p class="sum-counter__sum">{{ store.totalSum.toLocaleString() }} ₽</p>
        </client-only>
      </div>
      <div class="sum-counter__buttons-block">
        <button class="sum-counter__order-button" @click="store.sendOrder">Оформить заказ</button>
        <button class="sum-counter__buy-button">Купить в 1 клик</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { getProductsNoun } from "~/utils/cart";

const store = useCartStore()
store.update()
</script>

<style scoped>
.cart-container {
  gap: 55px;
  display: flex;
  padding-bottom: 95px;
}

.cart__header {
  display: flex;
  align-items: end;
  padding-bottom: 50px;
  justify-content: space-between;
}

.cart {
  width: 800px;
}

.cart__header-text {
  gap: 22px;
  display: flex;
  align-items: end;
}

.cart__h1 {
  font-size: 44px;
}

.cart__product-number {
  font-size: 18px;
  color: var(--light-grey);
}

.cart__header-button {
  border: none;
  cursor: pointer;
  color: var(--light-grey);
  background-color: transparent;

  text-decoration: underline;
  text-underline-position: under;
}

.cart__products {
  gap: 25px;
  display: flex;
  padding-bottom: 24px;
  flex-direction: column;
}

.sum-counter {
  width: 425px;
  padding: 35px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  align-self: flex-start;
  background-color: var(--background);
}

.sum-counter__header {
  font-size: 24px;
  padding-bottom: 31px;
}

.sum-counter__positions {
  gap: 17px;
  display: flex;
  flex-direction: column;

  padding-bottom: 28px;
  border-bottom: 1px solid #AEB0B6;
}

.sum-counter__position {
  display: flex;
  line-height: 24px;
  justify-content: space-between;
}

.sum-counter__position_roboto {
  font-family: Roboto, sans-serif;
}

.sum-counter__total-cost {
  display: flex;
  justify-content: space-between;

  line-height: 34px;
  padding: 10px 0 30px;
}

.sum-counter__sum {
  font-size: 26px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
}

.sum-counter__buttons-block {
  gap: 12px;
  display: flex;
  flex-direction: column;
}

.sum-counter__order-button {
  border: none;
  height: 54px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--blue);
}

.sum-counter__buy-button {
  height: 54px;
  font-size: 18px;
  cursor: pointer;
  color: var(--blue);
  border-radius: 4px;
  border: 1px solid var(--blue);
  background-color: var(--white);
}
</style>
