/// <reference types="cypress"/>

const judulHalaman="Pekerjaan";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Pekerjaan()

      cy.fixture('HB-PMB/06-referensi/06-biodata/pekerjaan').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  // positif case
  it('Admin mengisi filter pekerjaan', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterPekerjaan)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.filterPekerjaan)

  });

  it('Memastikan nama tabel pekerjaan ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Pekerjaan')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama Pekerjaan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data pekerjaan', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_idpekerjaan').type(this.data.kode01)
    cy.get('#i_namapekerjaan').type(this.data.namaPekerjaan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data pekerjaan', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPekerjaan01)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_idpekerjaan').clear().type(this.data.kode02)
    cy.get('#u_namapekerjaan').clear().type(this.data.namaPekerjaan02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data pekerjaan', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPekerjaan02)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin menambahkan data pekerjaan dengan kode yang sama', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_idpekerjaan').type(this.data.kode01)
    cy.get('#i_namapekerjaan').type(this.data.namaPekerjaan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  
  it('Admin menambahkan data pekerjaan dengan kode yang sama', function () {
    cy.get('.col-md-6 > .btn-success').click()

    // cy.get('#i_idpekerjaan').type(this.data.kode01)
    cy.get('#i_namapekerjaan').type(this.data.namaPekerjaan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // klik ok 
    // cy.get('.modal-footer > .btn').click

  })

});
