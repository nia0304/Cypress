/// <reference types="cypress"/>

const judulHalaman="Daftar Laporan Manual";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Lap_Manual()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  });

});
