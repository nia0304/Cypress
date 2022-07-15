/// <reference types="cypress"/>

const judulHalaman="Daftar Jenis Institusi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Jenis_Institusi()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  });

});
