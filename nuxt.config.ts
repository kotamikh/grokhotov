// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [['@nuxtjs/google-fonts', {
        families: {
            Roboto: true,
            Lato: true
        }
    }], '@nuxt/icon', 'nuxt-swiper', '@pinia/nuxt'],
    sourcemap: {
        server: true,
        client: true
    }
})
