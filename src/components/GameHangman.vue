<script setup>
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'

const passwordArray = [
    'Practice makes perfect',
    'East or west, home is best',
    'A friend in need is a friend indeed',
    'Where there is a will, there is a way',
    'Time heals all wounds',
    'Better late than never',
    'Easier said than done',
    'Speech is silver, silence is golden',
    'Better an open enemy than a false friend',
    'Every man has his faults'
]

const showAlphabet = ref(true)
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
const password = ref('')
const passwordLength = ref(0)
const passwordSecret = ref([])
const clickedLetters = ref([])
const imagePath = ref()
const trying = ref(1)
const wonGame = ref(false)
const lostGame = ref(false)
const resultMessage = ref('')
const color = ref('')

const router = useRouter()
const goBack = () => {
    router.push('/more')
}

const initializeGame = () => {
    showAlphabet.value = true
    password.value = passwordArray[Math.floor(Math.random() * passwordArray.length)].toUpperCase()
    passwordLength.value = password.value.length
    trying.value = 0
    passwordSecret.value = password.value.split('').map((char) => (char === ' ' || char === ',' ? char : '-'))
    clickedLetters.value = []
    wonGame.value = false
    lostGame.value = false
    resultMessage.value = ''
    color.value = ''
}

const resetGame = () => {
    initializeGame()
}

const check = (letter) => {
    if (clickedLetters.value.includes(letter)) {
        return
    }

    clickedLetters.value.push(letter)

    let letterFound = false
    for (let i = 0; i < passwordLength.value; i++) {
        if (password.value[i] === letter) {
            passwordSecret.value.splice(i, 1, letter)
            letterFound = true
        }
    }

    if (!letterFound) {
        trying.value++
        if (trying.value >= 9) {
            endGame(false)
        }
    }

    if (!passwordSecret.value.includes('-')) {
        endGame(true)
    }
}

const endGame = (isWin) => {
    if (isWin && !lostGame.value) {
        wonGame.value = true
        resultMessage.value = 'Well done! You guessed the password!'
        color.value = 'lime'
        showAlphabet.value = false
    } else {
        lostGame.value = true
        resultMessage.value = 'Oh sorry, try again 😉'
        color.value = 'red'
        showAlphabet.value = false
    }
}

watch(trying, async (newTrying) => {
    try {
        const image = await import(`@/components/img/s${newTrying}.jpg`)
        imagePath.value = image.default
    } catch (error) {
        console.error('Error loading image:', error)
    }
})

initializeGame()
</script>

<template>
    <div class="gameHangman" :style="{ borderColor: color }">
        <a class="goBack" @click="goBack" @mouseenter="aHover" @mouseleave="aNotHover">
            <v-icon name="fa-angle-double-left" />
            back
        </a>

        <h1>Hangman Game</h1>
        <img :src="imagePath" alt="Hangman Image" />
        <div class="password">
            <span v-for="(letter, index) in passwordSecret" :key="index">
                {{
                    letter === ' ' || letter === ','
                        ? letter
                        : clickedLetters.includes(letter)
                          ? letter
                          : lostGame
                            ? password[index]
                            : '-'
                }}
            </span>
        </div>
        <div class="alphabet" v-if="showAlphabet">
            <span
                v-for="(letter, index) in alphabet"
                :key="index"
                @click="check(letter)"
                :class="{
                    disabled: clickedLetters.includes(letter),
                    guessed: clickedLetters.includes(letter) && password.indexOf(letter) > -1,
                    notguessed: clickedLetters.includes(letter) && password.indexOf(letter) === -1
                }"
            >
                {{ letter }}
            </span>
        </div>
        <div class="result" :class="{ won: wonGame, loose: lostGame }" :style="{ color: color }">
            {{ resultMessage }}
        </div>
        <a class="reset" @click="resetGame" @mouseenter="aHover" @mouseleave="aNotHover"> Play Again</a>
        <a
            class="gh"
            @mouseenter="aHover"
            @mouseleave="aNotHover"
            href="https://github.com/AgataBialoskorska/vueProject/blob/master/src/components/GameHangman.vue"
        >
            <i class="fa-brands fa-square-github"></i>
            GH Repository
        </a>
    </div>
</template>

<style scoped>
.gameHangman {
    background-color: rgb(34, 17, 47);
    border: solid 1px;
    border-radius: 15px;
    font-size: 1.2em;
    margin: auto;
    padding: 1em 2em;
    width: 85vmin;
}
a {
    display: inline-block;
    font-size: 1.2em;
    margin: 3vmin auto;
    margin-right: 3vmin;
    padding: 1vmin;
}
.ov-icon {
    margin-right: 0.2em;
    vertical-align: middle;
}
h1 {
    margin: auto;
    margin-bottom: 3vmin;
    text-align: center;
}
img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: 30vmin;
}
.password {
    font-size: 1.5em;
    letter-spacing: 0.15em;
    margin: 1em auto;
    text-align: center;
}
.alphabet {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5em;
    justify-content: center;
}
.alphabet span {
    text-align: center;
    width: 10vmin;
}
.alphabet span:hover {
    cursor: pointer;
}
.guessed {
    color: greenyellow;
}
.notguessed {
    color: red;
}
.result {
    text-align: center;
}
@media (min-width: 980px) {
    .gameHangman {
        font-size: 1em;
        margin: auto;
        padding: 10px 20px;
        width: 125%;
        max-height: 90%;
        max-width: 50vw;
    }
    a {
        font-size: 1em;
        margin: 1em auto;
        padding: 1vmin;
    }
    h1 {
        margin-bottom: 0.5em;
    }
    img {
        width: 50vmin;
    }
    .alphabet span {
        width: 80px;
    }
}
</style>
