<script setup lang="ts">

const route = useRoute();
const slug = String(route.params.slug);

const { data: article } = await useFetch(`/api/postDetail`, {
    params: { slug: slug },
});

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

</script>

<template>
  <div>
    <div class="main">
        <span class="published">{{ $formatDate(article.publishedAt) }}</span>
        <h1 class="title">{{ article.title }}</h1>
        <!-- <span v-for="(tag, i) in article.tag" :key="tag.id" class="tag">{{ tag.name }}
        </span> -->
        <TagLabel v-for="tag in article.tag" :key="tag.id" :tag="tag" class="tag"></TagLabel>
        <div class="md" v-html="article.text" />
    </div>
    <TopToLink/>
  </div>
</template>

<style scoped>
.main {
    position: relative;
    width: 720px;
    margin: 0 auto 0;
    padding: 112px 0;
}
.title {
    margin-top: 10px;
    margin-bottom: 10px;
}

.tag {
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #888;
    padding: 4px 8px;
    cursor: pointer;
    margin-right: 1rem;
    margin-bottom: 30px;
    letter-spacing: 1.5px;
}

.md:deep(*) {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.9;
    font-weight: 500;
}

@media (max-width: 1024px) {
    .md:deep(img) {
        max-width: 100%;
    }
}

.md:deep(p) code {
    background-color: #eee;
    color: #333;
    padding: 0.2em 0.4em;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.md:deep(pre) {
    line-height: 1.2;
    background-color: #1D1F21;
    padding: 2% 4%;
    overflow-x: scroll;
}

.md:deep(pre) * {
    margin-bottom: 0;
    line-height: 1.4;
    font-weight: lighter;
}

.md:deep(blockquote) {
    padding: 15px;
    border-left: 5px solid #ccc;
    border-radius: 2px;
}

.md:deep(h1) {
    font-size: 24px;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
}

.md :deep(h2),
.md:deep(h3) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: bold;
}

.md:deep(h2) {
    border-bottom: 1px solid #ccc;
}

.md:deep(.cp_embed_wrapper) {
    margin-top: 20px;
    margin-bottom: 20px;
}

.md:deep(a) {
    color: #1266f1;
}

.md:deep(a:hover) {
    opacity: .5;
}

.md:deep(ul),
.md:deep(ol) {
    padding-left: 1.5em;
    margin: 1rem 0;
    line-height: 1.7;
}

.md:deep(ul) {
    list-style-type: disc;
}

.md:deep(ol) {
    list-style-type: decimal;
}

.md:deep(ul) li,
.md:deep(ol) li {
    margin-bottom: 1rem;
}
</style>