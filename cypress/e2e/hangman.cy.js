/* eslint-disable cypress/unsafe-to-chain-command */
describe('GameHangman', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/hangman')
    })

    it('Should display "Hangman Game" header', () => {
        cy.get('h1').should('contain', 'Hangman Game')
    })

    it('Should display the back button', () => {
        cy.get('.goBack').should('be.visible')
    })

    it('Should display hangman image', () => {
        cy.get('img').should('be.visible')
    })

    it('Should display the password with dashes', () => {
        cy.get('.password').should('contain', '-')
    })

    it('Should display the alphabet', () => {
        cy.get('.alphabet').should('exist')
    })

    it('Should display the reset button', () => {
        cy.get('.reset').should('be.visible')
    })

    it('Should display the GitHub link', () => {
        cy.get('.gh').should('be.visible')
    })

    it('Should navigate back when the back button is clicked', () => {
        cy.get('.goBack').click()
        cy.url().should('eq', 'http://localhost:5173/more')
    })

    it('Should navigate to the GitHub repository when the GitHub link is clicked', () => {
        cy.get('.gh').should(
            'have.attr',
            'href',
            'https://github.com/AgataBialoskorska/vuePortfolio/blob/master/src/components/GameHangman.vue'
        )
    })

    it('Should check if game can be played properly', () => {
        const customLetters = ['A', 'E', 'T', 'S']
        let letterFound = false

        cy.wrap(customLetters).each((letter) => {
            cy.get(`.alphabet span:contains(${letter})`).click()
            cy.get('.password')
                .invoke('text')
                .then((passwordText) => {
                    if (passwordText.includes(letter.toUpperCase())) {
                        letterFound = true
                        cy.wrap(letterFound).should('be.true')
                    }
                })
        })
    })

    it('Should change the image if the client does not guess any letter', () => {
        const customLetters = ['Q', 'X']
        cy.wrap(customLetters).each((letter) => {
            cy.get(`.alphabet span:contains(${letter})`).click()
        })
        cy.get('img').invoke('attr', 'src').should('not.contain', '0')
    })
})
