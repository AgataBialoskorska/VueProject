describe('Navigation Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })
    it('Should display "Home" and "More" links', () => {
        cy.get('nav').within(() => {
            cy.contains('Home').should('exist')
            cy.contains('More').should('exist')
        })
    })
})

describe('Hi Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Should display "Hi, I am Agata"', () => {
        cy.contains('Hi, I am Agata').should('exist')
    })

    it('Should display image', () => {
        cy.get('.photo').should('exist')
    })
})

describe('Contact Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Should contain links to email, GitHub, and LinkedIn', () => {
        cy.get('.contact').within(() => {
            cy.get('a[href="mailto:abialoskorska@icloud.com"]').should('exist')
            cy.get('a[href="https://github.com/agatabialoskorska"]').should('exist')
            cy.get('a[href="https://www.linkedin.com/in/agatabialoskorska"]').should('exist')
        })
    })

    it('Should display icons on hover', () => {
        cy.get('.contact').within(() => {
            cy.get('a').each(($icon) => {
                cy.wrap($icon).trigger('mouseenter')
                cy.wrap($icon).find('.ov-icon').should('exist')
            })
        })
    })
})
