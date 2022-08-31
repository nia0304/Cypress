/// <reference types="cypress"/>

const judulHalaman = "Daftar Negara";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Negara()

    cy.fixture('HB-PMB/06-referensi/05-wilayah/negara').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter Negara', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterNegara)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.filterNegara)

  });

  it('Memastikan nama tabel negara perguruan tinggi ada 6', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Negara')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data negara', function () {
    cy.get('#wrap-button > button').click()

    cy.get('#i_idnegara').type(this.data.kode01)
    cy.get('#i_namanegara').type(this.data.namaNegara01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data negara', function () {
    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click().wait(0)

    cy.get('#u_idnegara').clear().type(this.data.kode02)
    cy.get('#u_namanegara').clear().type(this.data.namaNegara02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data negara', function () {
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
  it('Admin menambahkan data negara yang sudah ada', function () {
    cy.get('#wrap-button > button').click()

    cy.get('#i_idnegara').type(this.data.kode01)
    cy.get('#i_namanegara').type(this.data.namaNegara01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data negara tanpa melengkapi data', function () {
    cy.get('#wrap-button > button').click()

    // cy.get('#i_idnegara').type(this.data.kode01)
    cy.get('#i_namanegara').type(this.data.namaNegara01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })
  

});
