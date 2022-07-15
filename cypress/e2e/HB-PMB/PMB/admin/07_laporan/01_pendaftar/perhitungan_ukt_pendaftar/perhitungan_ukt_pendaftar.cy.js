/// <reference types="cypress"/>

const judulHalaman="Laporan Perhitungan UKT Pendaftar";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Lap_Perhitungan_Ukt_Pendaftar()
  });

  it('Buka Halaman', () => {
    cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  });

});
