/// <reference types="cypress"/>

const judulHalaman="KIP Kuliah Pendaftar";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Kip_Kuliah()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1 ').should('contain',judulHalaman)
  });

});
