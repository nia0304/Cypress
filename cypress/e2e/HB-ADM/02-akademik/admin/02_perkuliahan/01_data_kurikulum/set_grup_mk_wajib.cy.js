/// <reference types="cypress"/>

const namaMenu="Set Grup Mata Kuliah Wajib Pilihan";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.Menu_Set_Grup_MK_Wajib_Pilihan()
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
