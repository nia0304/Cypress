/// <reference types="cypress"/>

const namaMenu="Kelas Kuliah";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.Menu_Kelas_Kuliah()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
