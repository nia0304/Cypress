/// <reference types="cypress"/>

const judulHalaman="Syarat Seleksi";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Syarat_Seleksi()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  });

});
