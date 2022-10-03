/// <reference types="cypress"/>

const namaMenu="Jenis Aktivitas";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulmbkm()
    //go to target page
      cy.menujenisaktivitas()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
