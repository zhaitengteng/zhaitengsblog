<!-- src/components/Footer.vue -->
<script setup lang="ts">
import { config } from '../settings/siteSettings'
</script>
<template>
    <footer class="footer">
        <div class="wrapper">
            <p class="text"><small>© 2024- {{ config.siteName }}</small></p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    text-align: center;
    padding: 26px 0;
}

.wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 4%;
}

.text {
    color: #333;
    font-size: 1rem;
}
</style>