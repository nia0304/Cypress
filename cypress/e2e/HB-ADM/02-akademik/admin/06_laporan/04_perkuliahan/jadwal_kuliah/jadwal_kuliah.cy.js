/// <reference types="cypress"/>

const namaMenu="Jadwal Perkuliahan Semester Ini (Mahasiswa)";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulakademik()
    //go to target page
      cy.menujadwalkuliah();
  });

  it('Buka Halaman', () => {
    cy.get('.content-header > h1').should('contain',namaMenu)
  });

});
