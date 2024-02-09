<script setup lang="ts">
import { config } from './settings/siteSettings'
</script>
<template>
<div>
  <Head>
    <Title>{{ config.siteName }}</Title>
     <Meta name="主に日記です" :content="title" />
     <Style type="text/css" ></Style>
  </Head>
  <Header />
  <NuxtPage />
  <Footer />
</div>
</template>
