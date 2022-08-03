/// <reference types="cypress"/>

const namaMenu="Forum Kelas (Lama)";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    // go to target page
      cy.Menu_Forum_Kelas()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
