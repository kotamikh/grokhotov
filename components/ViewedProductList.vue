<template>
  <div class="viewed-products">
    <div class="viewed-products__header-container">
      <p class="viewed-products__header">Просмотренные товары</p>
      <div class="viewed-products__swiper-buttons-container">
        <button class="viewed-products__swiper-button" @click="prev()">
          <Icon name="line-md:chevron-left" size="24" style="color: white"/>
        </button>

        <span class="viewed-products__swiper-pages">
          <span class="viewed-products__swiper-page-current">{{ currentIndex }}</span> / {{ lastIndex }}
        </span>

        <button class="viewed-products__swiper-button" @click="next()">
          <Icon name="line-md:chevron-right" size="24" style="color: white"/>
        </button>
      </div>
    </div>

    <client-only>
      <swiper-container ref="containerRef"
                        :slides-per-view="4"
                        :slides-per-group="4"
                        :space-between="20"
      >
        <swiper-slide
            v-for="(product, id) in store.viewed"
            :key="id">
          <viewed-product :id="product.id"
                        :img="product.img"
                        :name="product.name"
                        :description="product.description"
                        :priceFromRub="product.priceFromRub"
                        :priceToRub="product.priceToRub"
                        :priceFromEur="product.priceFromEur"
                        :priceToEur="product.priceToEur"
          />
        </swiper-slide>
      </swiper-container>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import { useViewedStore } from "~/stores/viewed";
import type Swiper from "swiper";

const store = useViewedStore()
store.update()

const containerRef = ref(null)
const swiper = useSwiper(containerRef)

const onSwiperUpdateHandler = () => updateCurrentIndex()
onMounted(() => {
  const stopWatch = watch(swiper.instance, (v: Swiper | null) => {
    if (v) {
      updateCurrentIndex()
      v.onAny(onSwiperUpdateHandler)

      stopWatch()
    }
  })
})

onUnmounted(() => {
  if (swiper.instance.value) {
    swiper.instance.value.offAny(onSwiperUpdateHandler)
  }
})

const currentIndex = ref<number>(0)
const lastIndex = computed<number>(() => {
  if (store.viewed) {
    return Math.ceil(store.viewed.length / 4)
  }
  return 0
})

const next = () => {
  swiper.next()
  updateCurrentIndex()
}

const prev = () => {
  swiper.prev()
  updateCurrentIndex()
}

const updateCurrentIndex = () => {
  const res = swiper.instance.value
  if (res) {
    currentIndex.value = Math.ceil((res.realIndex / 4) + 1)
  }
}
</script>

<style scoped>
.viewed-products__header {
  font-size: 30px;
}

.viewed-products__header-container {
  padding-bottom: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.viewed-products__header {
  vertical-align: center;
}

.viewed-products__swiper-buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewed-products__swiper-pages {
  font-size: 18px;
  line-height: 27px;
  padding-left: 20px;
  padding-right: 15px;
  color: var(--light-grey);
}

.viewed-products__swiper-page-current {
  color: #212121;
  font-size: 24px;
}

.viewed-products__swiper-button {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  color: white;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  background-color: #90A2B5;
}
</style>
