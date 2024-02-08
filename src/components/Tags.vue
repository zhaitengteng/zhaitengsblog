<script setup lang="ts">
import {Tag} from '../types/blog';

type Props = {
  tags:Tag[];
  selectedTagId: string | undefined;
}

const { tags, selectedTagId } = defineProps<Props>();

</script>

<template>
  <div class="wrapper">
    <h1 class="title">タグ</h1>
        <NuxtLink v-for="tag in tags" :key="tag.id" :to="`/tags/${tag.id}/page/1`" class="tag"> 
          {{ tag.name }}
        </NuxtLink>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px 0;
}

.list {
    border-bottom: 1px solid #eee;
    list-style-type: none;
}

.link,
.active {
    display: block;
    padding: 10px;
    color: #888;
    font-size: 1.4rem;
}

.active {
    color: #5ba9f7;
}
</style>