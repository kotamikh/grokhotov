<template>
  <div class="menu">
    <div class="menu__top-navigation"></div>
    <div class="menu__bottom-navigation">
      <a class="menu__cart-button">
        <cart class="menu__cart-button-icon"/>
        <div class="menu__cart-button-text">
          <p class="menu__cart-button-text_s">Ваша корзина</p>
          <client-only>
            <p class="menu__cart-button-text_xs menu__cart-button-text_light" v-show="store.cart.length">{{ getProductsNoun(store.cart.length) }}</p>
            <p class="menu__cart-button-text_xs menu__cart-button-text_roboto">{{ store.totalSum.toLocaleString() }} ₽</p>
          </client-only>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import cart from "~/assets/svg/cart.vue";
import { useCartStore } from "~/stores/cart";
import { getProductsNoun } from "~/utils/cart";

const store = useCartStore()
</script>

<style scoped>
.menu__top-navigation {
  height: 45px;
}

.menu__bottom-navigation {
  display: flex;
  flex-direction: column;

  height: 95px;
  padding-top: 19px;
  padding-right: 82px;
}

.menu__cart-button {
  gap: 7px;
  height: 51px;
  display: flex;
  cursor: pointer;
  align-self: flex-end;
}

.menu__cart-button-icon {
  padding-bottom: 7px;
  align-self: flex-end;
}

.menu__cart-button-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.menu__cart-button-text_s {
  font-size: 14px;
}

.menu__cart-button-text_xs {
  font-size: 12px;
}

.menu__cart-button-text_light {
  color: var(--light-grey);
}

.menu__cart-button-text_roboto {
  font-family: Roboto, sans-serif;
}
</style>
