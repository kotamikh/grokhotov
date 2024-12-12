<template>
  <div class="layout">
    <transition>
      <div v-if="store.loading" class="loader"></div>
    </transition>

    <Menu />
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "~/components/Menu.vue";
import { useAppStore } from "~/stores/app";

const store = useAppStore()
</script>

<style>
.layout {
  width: 100%;
}

.content {
  margin: 0 80px;
}

.loader {
  position: fixed;
  top: 20px;
  left: 20px;

  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
