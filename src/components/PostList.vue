<script setup lang="ts">
import { Post } from '../types/blog'

type Props = {
    posts: Post[];
}

const { posts } = defineProps<Props>()

</script>

<template>
    <div>
        <article class="article" v-for="post in posts" :key="post.id">
            <nuxt-link :to="`/${post.id}`">
                <h1 class="title">
                    {{ post.title }}
                </h1>
            </nuxt-link>
            <span class="published">{{ $formatDate(String(post.publishedAt)) }}</span>
            <TagLabel v-for="tag in post.tag" :key="tag.id" :tag="tag" class="tag"></TagLabel>
            <p class="description">{{ post.description }}</p>
        </article>
    </div>
</template>