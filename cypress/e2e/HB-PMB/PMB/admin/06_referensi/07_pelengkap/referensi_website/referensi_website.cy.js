/// <reference types="cypress"/>

const judulHalaman = "Referensi Website";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Referensi_Website()

    cy.fixture('HB-PMB/06-referensi/07-pelengkap/referensi_website').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  it('Memastikan nama tabel Referensi Website ada 5', () => {
    cy.get('.content-header > h1').should('contain', 'Referensi Website')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode Referensi')
      .should('contain', 'Nama Referensi')
      .should('contain', 'Url Website')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data Referensi Website', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idrefwebsite').type(this.data.kode01)
    cy.get('#i_namarefwebsite').type(this.data.namaReferensi01)
    cy.get('#i_urlwebsite').type(this.data.urlReferensi01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data Referensi Website', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_idrefwebsite').clear().type(this.data.kode02)
    cy.get('#u_namarefwebsite').clear().type(this.data.namaReferensi02)
    cy.get('#u_urlwebsite').clear().type(this.data.urlReferensi02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data Referensi Website', function () {
    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('.btn-danger').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapusJawaban)

  })

  // negatif case
  it('Admin menambahkan data Referensi Website yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idrefwebsite').type(this.data.kode01)
    cy.get('#i_namarefwebsite').type(this.data.namaReferensi01)
    cy.get('#i_urlwebsite').type(this.data.urlReferensi01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data Referensi Website tanpa melengkapi data', function () {
    cy.get('.col-md-12 > .btn-success').click()

    
    cy.get('#i_namarefwebsite').type(this.data.namaReferensi01)
    cy.get('#i_urlwebsite').type(this.data.urlReferensi01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

});
