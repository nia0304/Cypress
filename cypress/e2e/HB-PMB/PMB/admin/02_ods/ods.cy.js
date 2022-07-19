/// <reference types="cypress"/>

const judulHalaman="Pendaftaran";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Ods()
  });

  it('Buka Halaman', () => {
    cy.get('.title').should('contain',judulHalaman)
  });

});
