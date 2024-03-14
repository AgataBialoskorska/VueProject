<script setup>
import { aHover, aNotHover } from '/src/components/AnimationComponent.vue'
</script>

<script>
export default {
    data() {
        return {
            showAlphabet: true,
            passwordArray: [
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
            ],
            password: '',
            passwordLength: 0,
            trying: 0,
            passwordSecret: [],
            clickedLetters: [],
            alphabet: Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
            wonGame: false,
            lostGame: false,
            resultMessage: '',
            color: ''
        }
    },
    created() {
        this.initializeGame()
    },
    methods: {
        goBack() {
            this.$router.push('/more')
        },
        initializeGame() {
            this.showAlphabet = true
            this.password = this.passwordArray[Math.floor(Math.random() * this.passwordArray.length)].toUpperCase()
            this.passwordLength = this.password.length
            this.trying = 0
            this.passwordSecret = this.password.split('').map((char) => (char === ' ' || char === ',' ? char : '-'))
            this.clickedLetters = []
            this.wonGame = false
            this.lostGame = false
            this.resultMessage = ''
            this.color = ''
            //console.log(this.password)
        },
        check(letter) {
            if (this.clickedLetters.includes(letter)) {
                return
            }

            this.clickedLetters.push(letter)
            // console.log(this.clickedLetters);
            let letterFound = false

            for (let i = 0; i < this.passwordLength; i++) {
                if (this.password[i] === letter) {
                    this.passwordSecret.splice(i, 1, letter)
                    letterFound = true
                }
            }

            if (!letterFound) {
                this.trying++
                if (this.trying >= 9) {
                    this.endGame(false)
                }
            }

            if (!this.passwordSecret.includes('-')) {
                this.endGame(true)
            }
        },
        endGame(isWin) {
            if (isWin && !this.lostGame) {
                this.wonGame = true
                this.resultMessage = 'Well done! You guessed the password!'
                this.color = 'lime'
                this.showAlphabet = false
            } else {
                this.lostGame = true
                this.resultMessage = 'Oh sorry, try again 😉'
                this.color = 'red'
                this.showAlphabet = false
            }
        },
        resetGame() {
            this.initializeGame()
        }
    }
}
</script>

<template>
    <div class="gameHangman" :style="{ borderColor: color }">
        <a class="goBack" @click="goBack" @mouseenter="aHover" @mouseleave="aNotHover">
            <v-icon name="fa-angle-double-left" />
            back
        </a>

        <h1>Hangman Game</h1>
        <img :src="'dist/assets/img/s' + trying + '.jpg'" alt="Hangman Image" />
        <div class="password">
            <span v-for="(letter, index) in passwordSecret" :key="index">
                {{
                    letter === ' ' || letter === ','
                        ? letter
                        : clickedLetters.includes(letter)
                          ? letter
                          : lostGame
                            ? this.password[index]
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
