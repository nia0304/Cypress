/// <reference types="cypress"/>

const judulHalaman="Tautan Terkait";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Tautan()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  });

});
