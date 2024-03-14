describe('CookieElement', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/')
    })
    it('Should initially render cookie message and button', () => {
        cy.get('.cookie').should('exist')
        cy.get('.cookie').within(() => {
          cy.contains('p', 'This website uses cookies to enhance the user experience.').should('exist')
          cy.contains('button', 'OK!').should('exist')
        })
      })
    
      it('Should hide cookie message after clicking OK', () => {
        cy.get('.cookie').should('exist')
        cy.get('.cookie').within(() => {
          cy.contains('button', 'OK!').click()
        })
        cy.get('.cookie').should('not.exist')
      })
    
      it('Should set cookieButtonClicked in localStorage after clicking OK', () => {
        cy.get('.cookie').should('exist')
        cy.get('.cookie').within(() => {
          cy.contains('button', 'OK!').click()
        })
        cy.window().then((win) => {
          const localStorageItem = win.localStorage.getItem('cookieButtonClicked')
          expect(localStorageItem).to.eq('true')
        })
      })
    
      it('Should always be on top with higher z-index', () => {
        cy.get('.cookie').should('exist')
        cy.get('.cookie').should('have.css', 'z-index', '999')
      })
    })