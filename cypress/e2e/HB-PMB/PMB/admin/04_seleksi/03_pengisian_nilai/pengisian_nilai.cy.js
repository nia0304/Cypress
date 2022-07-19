/// <reference types="cypress"/>

const judulHalaman="Hasil Seleksi";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Pengisian_Nilai()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  });

});
