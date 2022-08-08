/// <reference types="cypress"/>

const namaMenu="Daftar Pertanyaan";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.Menu_Daftar_Pertanyaan()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});