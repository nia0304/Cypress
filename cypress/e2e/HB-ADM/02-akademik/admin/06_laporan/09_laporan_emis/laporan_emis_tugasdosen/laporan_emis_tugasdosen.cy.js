/// <reference types="cypress"/>

const namaMenu="Emis Tugas Dosen";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.menulaporanemistugasdosen();
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
