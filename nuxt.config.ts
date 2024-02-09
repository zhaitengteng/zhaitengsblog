// https://nuxt.com/docs/api/configuration/nuxt-config

const{ API_KEY,SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN
  },
  css: ['~/assets/css/reset.css','~/assets/css/style.css',],
  app:{
    head:{
      charset:'utf-8',
      viewport:'width=device-width, initial-scale=1',
    }
  }
})
