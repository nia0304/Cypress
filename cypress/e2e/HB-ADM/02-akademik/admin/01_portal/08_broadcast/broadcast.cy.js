/// <reference types="cypress"/>

const judulHalaman="Broadcast";

describe(judulHalaman, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    // go to target page
      cy.menubroadcast()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',judulHalaman)
  });

});
