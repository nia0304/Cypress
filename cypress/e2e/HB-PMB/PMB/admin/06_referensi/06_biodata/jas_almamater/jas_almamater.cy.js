/// <reference types="cypress"/>

const judulHalaman="Jas Almamater";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Jas_Almamater()

      cy.fixture('HB-PMB/06-referensi/06-biodata/jas_almamater').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel Jas Almamater ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Jas Almamater')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Jas Almamater')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data Jas Almamater', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idalmamater').type(this.data.kode01)
    cy.get('#i_almamater').type(this.data.namaAlmamater01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data Jas Almamater', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_idalmamater').clear().type(this.data.kode02)
    cy.get('#u_almamater').clear().type(this.data.namaAlmamater02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data Jas Almamater', function () {
    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin menambahkan data Jas Almamater dengan kode sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idalmamater').type(this.data.kode02)
    cy.get('#i_almamater').type(this.data.namaAlmamater02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data Jas Almamater tanpa melengkapi data', function () {
    cy.get('.col-md-12 > .btn-success').click()

    // cy.get('#i_idalmamater').type(this.data.kode02)
    cy.get('#i_almamater').type(this.data.namaAlmamater02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

      cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
      // cy.get('.modal-footer > .btn-primary').click()
  

  })


});
