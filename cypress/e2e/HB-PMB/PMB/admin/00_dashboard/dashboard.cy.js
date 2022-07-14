/// <reference types="cypress"/>

const judulHalaman="Dashboard";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Dashboard()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',judulHalaman)
  });

});
