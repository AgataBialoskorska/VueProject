<script setup>
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'
</script>
<template>
    <div class="contact">
        <h2>Feel free to check my repositories<br />and contact me with:</h2>
        <a
            href="mailto:abialoskorska@icloud.com"
            target="_blank"
            rel="noopener"
            @mouseenter="aHover"
            @mouseleave="aNotHover"
        >
            <v-icon name="fa-regular-envelope" />
        </a>

        <a
            href="https://github.com/agatabialoskorska"
            target="_blank"
            rel="noopener"
            @mouseenter="aHover"
            @mouseleave="aNotHover"
        >
            <v-icon name="fa-github" />
        </a>

        <a
            href="https://www.linkedin.com/in/agatabialoskorska"
            target="_blank"
            rel="noopener"
            @mouseenter="aHover"
            @mouseleave="aNotHover"
        >
            <v-icon name="fa-linkedin" class="icon" />
        </a>
    </div>
</template>
<style scoped>
.contact {
    padding-top: 2em;
    text-align: center;
}
.contact a {
    border-radius: 15px;
    display: inline-grid;
    grid-auto-columns: minmax(max-content, auto);
    grid-auto-rows: minmax(max-content, auto);
    justify-content: center;
    padding: 2vmin;
    width: 33.33%;
}
.ov-icon {
    scale: 2;
}
</style>
