<script setup>
import { RouterView } from 'vue-router'
import Navigation from './views/NavigationElement.vue'
import Hi from './views/HiElement.vue'
import Contact from './views/ContactElement.vue'
import Cookies from './components/CookieElement.vue'
</script>

<template>
    <header>
        <Navigation />
        <Hi />
        <Contact />
    </header>
    <div class="content"><RouterView /></div>
    <footer>
        <Cookies />
    </footer>
</template>
<style>
header {
    display: flex;
    flex-direction: column;
    place-items: center;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
}
footer {
    position: fixed;
    bottom: 0;
    width: min(100vw, 980px);
}
@media (min-width: 980px) {
    header {
        * {
            font-size: clamp(14px, 1em, 24px);
        }
    }
    div.content {
        margin: auto;
    }
}
</style>
