<script setup>
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'
</script>
<template>
    <div class="techstack">
        <div>I've been working with:</div>
        <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,github,aws,vscode" alt="git,gihub,aws,vscode" />
            <img src="https://skillicons.dev/icons?i=mysql,regex,py" alt="mysql,regex,py" />
            <img src="https://skillicons.dev/icons?i=npm,nodejs,js,vue,nextjs" alt="npm,nodejs,js,vue,nextjs" />
            <img src="https://skillicons.dev/icons?i=html,tailwind,sass,css" alt="html,tailwind,sass,css" />
        </a>
    </div>
    <div class="projects">
        <div>My visual projects:</div>
        <RouterLink to="/hangman" class="hangmanLink" @mouseenter="aHover" @mouseleave="aNotHover">
            <p class="linkIcon"></p>
            <p class="linkDescription">Hangman Game</p>
        </RouterLink>
        <a href="https://www.jabi.pl" class="jabiLink" @mouseenter="aHover" @mouseleave="aNotHover">
            <p class="linkIcon"></p>
            <p class="linkDescription">Webpage for Stained Glass brand, created in Vanilla JavaScript</p>
        </a>
        <a href="https://www.bialoskorski.eu" class="bskiLink" @mouseenter="aHover" @mouseleave="aNotHover">
            <p class="linkIcon"></p>
            <p class="linkDescription">Total overhaul webpage in Next.js</p>
        </a>
    </div>
</template>

<style>
.techstack {
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
    margin: 3vmin 25%;
    text-align: center;
    a {
        align-items: center;
        display: grid;
        grid-template-columns: 4em 1fr;
        grid-template-rows: auto;
        justify-items: center;
        margin: 2vmin;
        width: 100%;
    }
    .linkIcon {
        background: radial-gradient(circle at 50% 0, rgba(36, 41, 46, 0.7), transparent 70.71%),
            radial-gradient(circle at 6.7% 75%, rgba(36, 41, 46, 0.7), transparent 70.71%),
            radial-gradient(circle at 93.3% 75%, rgba(66, 184, 131, 0.7), transparent 70.71%);
        font-size: clamp(14px, 1.5em, 1.5em);
        height: 1em;
        width: 1em;
    }
    .linkDescription {
        text-align: left;
        margin: auto 1em;
        width: 100%;
    }
}
@media (min-width: 980px) {
    .projects {
        margin: 3vmin;
    }
    .techstack p,
    .projects p {
        font-size: clamp(12px, 1em, 22px);
    }
    .techstack img {
        max-height: 100%;
    }
}
</style>
