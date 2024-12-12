<template>
  <div class="breadcrumbs">
    <a class="breadcrumbs__link breadcrumbs__link_grey">{{ lastPageName }}</a>
    <Icon name="material-symbols:arrow-right" style="color: var(--grey)"/>
    <a class="breadcrumbs__link breadcrumbs__link_light">{{ pageName }}</a>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  pageName: string,
  lastPageName: string,
}>()
</script>

<style>
.breadcrumbs {
  gap: 5px;
  display: flex;
  padding: 30px 0 60px;
}

.breadcrumbs__link {
  font-size: 14px;
  cursor: pointer;
}

.breadcrumbs__link_grey {
  color: var(--grey);
}

.breadcrumbs__link_light {
  color: var(--light-grey);
}
</style>
