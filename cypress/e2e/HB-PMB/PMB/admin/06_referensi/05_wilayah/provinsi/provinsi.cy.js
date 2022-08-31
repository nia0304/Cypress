/// <reference types="cypress"/>

const judulHalaman="Daftar Propinsi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Provinsi()

      cy.fixture('HB-PMB/06-referensi/05-wilayah/provinsi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter Provinsi', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterProvinsi)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.filterProvinsi)

  });

  it('Memastikan nama tabel propinsi perguruan tinggi ada 6', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Propinsi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data propinsi', function () {
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaPropinsi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data propinsi', function () {
    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click().wait(0)

      cy.get('#u_idkota').clear().type(this.data.kode02)
      cy.get('#u_namakota').clear().type(this.data.namaPropinsi02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data propinsi', function () {
    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode02)

    // klik cari 
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
  it('Admin menambahkan data propinsi yang sudah ada', function () {
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaPropinsi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data propinsi tanpa melengkapi data', function () {
    cy.get('#wrap-button > button').click()

    // cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaPropinsi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it.only('Admin menambahkan data propinsi dengan kode huruf', function () {
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kodeHuruf)
    cy.get('#i_namakota').type(this.data.namaPropinsi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

});
