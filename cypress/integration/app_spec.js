describe('Main application page', function() {
  it('should open a main app page', function() {
    //setup app page
    cy.visit('http://localhost:3005/');

    // find common elements
    cy.get('body').find('header');
    cy.get('body').find('main');
    cy.get('body').find('footer');

    // make sure that header does not contain buttons
    cy.get('body').find('header').not('button');

    // find search panel
    cy.contains('FIND YOUR MOVIE');
    cy.get('.form-label-group').find('#searchBox').should('have.attr', 'placeholder', 'Search...').and('have.value', '');
    cy.get('.navbar').contains('SEARCH BY');
    cy.get('.navbar').should('contain', 'SEARCH BY');
    cy.get('.navbar').find('a.active').should('contain', 'TITLE');
    cy.get('.navbar').find('a').should('contain', 'DIRECTOR');
    cy.get('.navbar').find('button').contains('SEARCH');

    // check that after clicking on search by DIRECTOR it will have active style
    cy.get('.navbar').find('a').contains('DIRECTOR').click();
    cy.get('.navbar').find('a.active').should('contain', 'DIRECTOR');

    cy.screenshot();
  })
})
