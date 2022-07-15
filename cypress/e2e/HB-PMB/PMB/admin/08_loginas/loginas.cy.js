/// <reference types="cypress"/>

const judulHalaman="Login As";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Loginas()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',judulHalaman)
  });

});

