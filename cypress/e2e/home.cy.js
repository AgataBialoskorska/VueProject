describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Should display all tables', () => {
        cy.get('.home').find('table').should('have.length', 5)
    })

    it('Each table should have a table header', () => {
        cy.get('.home')
            .find('table')
            .each(($table) => {
                cy.wrap($table).find('thead').should('exist')
            })
    })

    it('Each table header should contain a SQL query', () => {
        cy.get('.home')
            .find('th')
            .each(($header) => {
                cy.wrap($header).should('contain', 'SELECT')
            })
    })

    it('Font size of table headers should be responsive', () => {
        cy.get('.home')
            .find('th')
            .each(($header) => {
                cy.wrap($header)
                    .should('have.css', 'font-size')
                    .and('satisfy', (fontSize) => {
                        const numericFontSize = parseFloat(fontSize)
                        return numericFontSize <= 20
                    })
            })
    })

    it('Font size of table cells should be responsive', () => {
        cy.get('.home')
            .find('td')
            .each(($cell) => {
                cy.wrap($cell)
                    .should('have.css', 'font-size')
                    .and('satisfy', (fontSize) => {
                        const numericFontSize = parseFloat(fontSize)
                        return numericFontSize <= 18
                    })
            })
    })

    it('Should have responsive table width on larger screens', () => {
        cy.viewport(980, 660)
        cy.get('.home')
            .find('table')
            .should(($table) => {
                const tableWidth = $table.width()
                const containerWidth = $table.parent().width()
                expect(tableWidth).to.equal(containerWidth)
            })
    })
})
