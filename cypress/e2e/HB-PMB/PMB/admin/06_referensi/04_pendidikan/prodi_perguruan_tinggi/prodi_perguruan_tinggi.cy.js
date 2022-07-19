/// <reference types="cypress"/>

const judulHalaman="Prodi Perguruan Tinggi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Prodi_Perguruan_Tinggi()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  });

});
