/// <reference types="cypress"/>

const judulHalaman="Rekap Rekomendasi Prodi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Lap_Rekap_Rekom_Prodi()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  });

});
