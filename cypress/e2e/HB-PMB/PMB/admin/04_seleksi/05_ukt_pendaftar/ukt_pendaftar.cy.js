/// <reference types="cypress"/>

const judulHalaman="UKT Pendaftar";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Ukt_Pendaftar()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1 ').should('contain',judulHalaman)
  });

});
