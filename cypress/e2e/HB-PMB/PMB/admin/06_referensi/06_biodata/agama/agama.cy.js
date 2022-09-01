/// <reference types="cypress"/>

const judulHalaman = "Agama";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Agama()

    cy.fixture('HB-PMB/06-referensi/06-biodata/agama').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel agama ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Agama')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama Agama')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data agama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idagama').type(this.data.kode01)
    cy.get('#i_namaagama').type(this.data.namaAgama01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data agama', function () {
    cy.get('td').contains(this.data.namaAgama01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_idagama').clear().type(this.data.kode02)
    cy.get('#u_namaagama').clear().type(this.data.namaAgama02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data agama', function () {
    cy.get('td').contains(this.data.namaAgama02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })


  // negatif case
  it('Admin menambahkan data agama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idagama').type(this.data.kodeHuruf)
    cy.get('#i_namaagama').type(this.data.namaAgama01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data agama dengan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idagama').type(this.data.kode01)
    cy.get('#i_namaagama').type(this.data.namaAgama01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

});
