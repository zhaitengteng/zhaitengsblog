<script setup lang="ts">
import { config } from '../settings/siteSettings'
</script>

<template>
  <header class="header wrapper">
    <nuxt-link :to='`/`'>
    <h1 class="title">
      {{ config.siteName }}
    </h1>
    </nuxt-link>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 4% 20px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #333;
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  line-height: 1.4em;
  justify-content: center;
  letter-spacing: 1px;
}

</style>