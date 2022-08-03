/// <reference types="cypress"/>

const namaMenu="Laporan Rekap Mahasiswa Tugas Akhir";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.Menu_Rekap_Mahasiswa_Tugas_Akhir();
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
