/// <reference types="cypress"/>

const judulHalaman="Jenis Syarat";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_jenis_syarat()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/jenis_syarat').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel jenis syarat ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Jenis Syarat')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it('Admin mengubah data Jenis Syarat', function () {
    cy.get('td').contains(this.data.kode)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get("#u_namajenissyarat").clear().type(this.data.jenisSyarat02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

});
