/// <reference types="cypress"/>

const judulHalaman = "Daftar Kecamatan";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Kecamatan()

    cy.fixture('HB-PMB/06-referensi/05-wilayah/kecamatan').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter kecamatan', function () {

    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterKota)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.filterKota)

  });

  it('Memastikan nama tabel kota ada 4', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Kota')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it.only('Admin menambahkan data kota', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaKota01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data kota', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    // filter nama kota
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click().wait(0)

    cy.get('#u_idkota').clear().type(this.data.kode02)
    cy.get('#u_namakota').clear().type(this.data.namaKota02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data kota', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    // filter nama kota
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
  it('Admin menambahkan data kota yang sudah ada', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaKota01)
      .parent()
      .next()
      .find('.iCheck-helper')
      .click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data kota tanpa melengkapi data', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    cy.get('#wrap-button > button').click()

    // cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaKota01)
      .parent()
      .next()
      .find('.iCheck-helper')
      .click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data kota dengan kode huruf', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    cy.get('#wrap-button > button').click()

    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.namaKota01)
      .parent()
      .next()
      .find('.iCheck-helper')
      .click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

});
