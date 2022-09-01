/// <reference types="cypress"/>

const judulHalaman="Penghasilan";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Penghasilan()

      cy.fixture('HB-PMB/06-referensi/06-biodata/penghasilan').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel penghasilan ada 4', () => {
    cy.get('.content-header > h1').should('contain', 'Penghasilan')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama Penghasilan')
      .should('contain', 'Poin KIP Kuliah')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data Penghasilan', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idpenghasilan').type(this.data.kode01)
    cy.get('#i_namapenghasilan').type(this.data.namaPenghasilan01)
    cy.get('#i_poinbidikmisi').type(this.data.poinKip01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data Penghasilan', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_idpenghasilan').clear().type(this.data.kode02)
    cy.get('#u_namapenghasilan').clear().type(this.data.namaPenghasilan02)
    cy.get('#u_poinbidikmisi').clear().type(this.data.poinKip02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data Penghasilan', function () {
    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin menambahkan data Penghasilan tanpa melengkapi data', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    // cy.get('#i_idpenghasilan').type(this.data.kode02)
    cy.get('#i_namapenghasilan').type(this.data.namaPenghasilan02)
    cy.get('#i_poinbidikmisi').type(this.data.poinKip02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data Penghasilan dengan poin KIP huruf melengkapi data', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#i_idpenghasilan').type(this.data.kode02)
    cy.get('#i_namapenghasilan').type(this.data.namaPenghasilan02)
    cy.get('#i_poinbidikmisi').type(this.data.poinKipHuruf)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data Penghasilan dengan kode sama', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    // cy.get('#i_idpenghasilan').type(this.data.kode02)
    cy.get('#i_namapenghasilan').type(this.data.namaPenghasilan01)
    cy.get('#i_poinbidikmisi').type(this.data.poinKip01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

});
