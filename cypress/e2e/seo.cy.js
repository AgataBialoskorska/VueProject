describe('SEO Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Should have a descriptive title', () => {
    cy.title().should('eq', 'Agata B.')
  })

  it('Should have meta description tag', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content')
  })

  it('Should have meta keywords tag', () => {
    cy.get('head meta[name="keywords"]').should('have.attr', 'content')
  })

  it('Should have h1 tag', () => {
    cy.get('h1').should('exist')
  })

  it('Should have descriptive alt attributes for images', () => {
    cy.get('img').should('have.attr', 'alt').and('not.be.empty')
  })

  it('Should have a fast loading time', () => {
    cy.window().then((win) => {
      const perfTiming = win.performance.getEntriesByType('navigation')[0];
  
      expect(perfTiming).to.exist;
      expect(perfTiming.loadEventEnd).to.be.a('number');
      expect(perfTiming.fetchStart).to.be.a('number');
  
      const loadTime = perfTiming.loadEventEnd - perfTiming.fetchStart;
      expect(loadTime).to.be.lessThan(3000);
    });
  });
  
})
