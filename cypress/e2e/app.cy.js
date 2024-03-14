// navigation.test.js
describe('Navigation Elements', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })
    it('Should display navigation elements', () => {
        cy.get('header').should('exist')
    })
    it('Should display content area with RouterView', () => {
        cy.get('.content').should('exist')
    })
    it('Should display footer with Cookies component', () => {
        cy.get('footer').should('exist')
    })
    it('Should have proper styling for header', () => {
        cy.get('header')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'flex-direction', 'column')
            .should('have.css', 'place-items', 'center')
    })
    it('Should have proper styling for content area', () => {
        cy.get('.content')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'flex-direction', 'column')
            .should('have.css', 'justify-content', 'center')
    })
    it('Should have proper styling for footer', () => {
        cy.get('footer').should('have.css', 'position', 'fixed').should('have.css', 'bottom', '0px')
    })
})
