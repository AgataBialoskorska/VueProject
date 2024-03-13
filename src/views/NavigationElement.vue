<script setup>
import { RouterLink } from 'vue-router'
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'
</script>

<template name="nav">
    <nav>
        <RouterLink to="/" @mouseenter="aHover" @mouseleave="aNotHover">Home</RouterLink>
        <a></a>
        <RouterLink to="/more" @mouseenter="aHover" @mouseleave="aNotHover">More</RouterLink>
    </nav>
</template>
<style scoped>
nav {
    width: 100%;
    font-size: max(1.5em, 16px);
    text-align: center;
    padding: 1.5em 0;
}

nav a.router-link-exact-active {
    color: var(--white);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
    animation: none;
}

nav a {
    display: inline-block;
    padding: 2vmin;
    position: relative;
}
nav a:nth-of-type(2) {
    height: max(4vmin, 20px);
    padding: 0.5vmin;
}
nav a:nth-of-type(2)::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: var(--text);
    transform: translateY(-25%);
}
</style>
