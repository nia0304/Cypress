/// <reference types="cypress"/>

const judulHalaman="Pemberi Rekomendasi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Rekomendasi()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  });

});
