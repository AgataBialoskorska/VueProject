<script>
export default {
    name: 'CookieElement',
    data() {
        return {
            checking: false
        }
    },
    mounted() {
        const checking = localStorage.getItem('cookieButtonClicked')
        if (checking) {
            this.checking = true
        }
    },
    methods: {
        clicked() {
            localStorage.setItem('cookieButtonClicked', true)
            this.checking = true
        }
    }
}
</script>

<template>
    <div class="cookie" v-if="!checking">
        <p>This website uses cookies to enhance the user experience.</p>
        <button @click="clicked">OK!</button>
    </div>
</template>

<style>
.cookie {
    align-items: center;
    background-color: var(--background);
    display: flex;
    font-size: 1em;
    justify-content: space-evenly;
    margin: auto;
    padding: 1vmin 0;
    z-index: 999;
}
button {
    background: transparent;
    border: 2px solid var(--green);
    border-radius: 50%;
    color: white;
    padding: 1em;
}
button:hover {
    background: var(--green);
    border: 2px solid transparent;
    cursor: pointer;
}
</style>
