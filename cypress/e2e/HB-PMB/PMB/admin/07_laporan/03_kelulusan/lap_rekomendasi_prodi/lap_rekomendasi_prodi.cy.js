/// <reference types="cypress"/>

const judulHalaman="Laporan Rekomendasi Prodi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Lap_Rekomendasi_Prodi()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  });

});
