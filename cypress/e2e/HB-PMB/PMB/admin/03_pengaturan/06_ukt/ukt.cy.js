/// <reference types="cypress"/>

const judulHalaman="Kelompok & Tarif UKT";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Ukt()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',judulHalaman)
  });

});
