<script setup lang="ts">
import { Tag } from '../types/blog'

type Props ={
  tag: Tag;
}

const { tag } = defineProps<Props>()

function getPath(tagId: string){
  return `/tags/${tagId}/page/1`
}
</script>

<template>
  <NuxtLink :to="getPath(tag.id)">
    {{ tag.name }}
  </NuxtLink>
</template>