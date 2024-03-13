<script setup>
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'
</script>
<template>
    <div class="techstack">
        <p>I've been working with:</p>
        <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,github,aws,vscode" alt="git,gihub,aws,vscode" />
            <img src="https://skillicons.dev/icons?i=mysql,regex,py" alt="mysql,regex,py" />
            <img src="https://skillicons.dev/icons?i=npm,nodejs,js,vue,nextjs" alt="npm,nodejs,js,vue,nextjs" />
            <img src="https://skillicons.dev/icons?i=html,tailwind,sass,css" alt="html,tailwind,sass,css" />
        </a>
    </div>
    <div class="projects">
        <p>My visual project:</p>
        <RouterLink to="/hangman" @mouseenter="aHover" @mouseleave="aNotHover">
            <v-icon name="fa-spell-check" />
        </RouterLink>
    </div>
</template>

<style>
.techstack {
    font-size: 1.5em;
    margin-top: 3vmin;
    text-align: center;
    img {
        display: flex;
        margin: 3vmin auto;
        max-height: 30px;
    }
    a:hover {
        cursor: initial;
    }
}
.projects {
    font-size: 1.5em;
    margin-top: 3vmin;
    text-align: center;
    a {
        display: inline-grid;
        grid-auto-columns: minmax(30px, auto);
        grid-auto-rows: minmax(30px, auto);
        margin: 1vmin;
        padding: 2vmin;
    }
    .ov-icon {
        margin: auto;
        scale: 2;
    }
}
@media (min-width: 980px) {
    .techstack p,
    .projects p {
        font-size: clamp(12px, 1em, 22px);
    }
    .techstack img {
        max-height: 100%;
    }
}
</style>
