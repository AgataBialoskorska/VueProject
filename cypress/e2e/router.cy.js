describe('Router', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/#/')
    })

    describe('Website Navigation', () => {
        it('Should load the main page correctly', () => {
            cy.url().should('eq', 'http://localhost:5173/#/')
        })

        it('Should load the "More" page correctly', () => {
            cy.get('a[href="#/more"]').click()
            cy.url().should('include', 'more')
        })

        it('Should load the "Hangman" game correctly', () => {
            cy.visit('http://localhost:5173/#/more')
            cy.get('a[href="#/hangman"]').click()
            cy.url().should('include', 'hangman')
        })

        it('Should redirect to the main page if an invalid URL is entered', () => {
            cy.visit('http://localhost:5173/#/random')
            cy.url().should('eq', 'http://localhost:5173/#/')
        })
    })
})
