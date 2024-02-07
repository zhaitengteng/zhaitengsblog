<script setup lang="ts">
import type {Tag} from '../types/blog'

type Props ={
  tag: Tag;
}

const { tag } = defineProps<Props>()

function getPath(tagId: string){
  return `/tags/${tagId}/page/1`
}
</script>

<template>
  <NuxtLink :to="getPath(tag.id)" class="tag-badge">
    {{ tag.name }}
  </NuxtLink>
</template>

<style scoped>
.tag-badge {
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #888;;
    padding: 4px 8px;
    cursor: pointer;
    margin-right: 1rem;
    letter-spacing: 1.5px;
}

.tag-badge:hover{
        opacity: .6;
    }
</style>