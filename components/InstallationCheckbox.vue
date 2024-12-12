<template>
  <div class="installation-checkbox">
    <input type="checkbox" class="installation-checkbox__checkbox" v-model="value">
    <instruments/>
    <div class="installation-checkbox__text">
      <p>Установка</p>
      <p class="installation-checkbox__description">Отметьте, если Вам необходима консультация профессионала по
        монтажу выбранных товаров.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import instruments from "assets/svg/instruments.vue";

const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const value = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(v: boolean) {
    emit('update:modelValue', v)
  }
})
</script>

<style scoped>
.installation-checkbox {
  gap: 20px;
  display: flex;
  align-items: center;

  padding: 26px 25px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--background);
}

.installation-checkbox__checkbox {
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.installation-checkbox__text {
  display: flex;
  cursor: pointer;
  line-height: 23px;
  flex-direction: column;
  justify-content: center;
}

.installation-checkbox__description {
  font-size: 14px;
  line-height: 21px;
  color: var(--light-grey);
}
</style>
