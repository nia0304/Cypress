/// <reference types="cypress"/>

const namaMenu="Tarif Honor";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.Menu_Tarif_Honor()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
