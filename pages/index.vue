<template>
  <breadcrumbs page-name="Корзина"
               last-page-name="Главная"
  />
  <cart-container/>
  <viewed-product-list/>
</template>

<script setup lang="ts">
import CartContainer from "~/components/CartContainer.vue";
</script>
