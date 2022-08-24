/// <reference types="cypress"/>

const judulHalaman="Mata Pelajaran";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_mata_pelajaran()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/mata_pelajaran').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel mata pelajaran ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Mata Pelajaran')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama Mata Pelajaran')
      .and('contain', 'Min. Lulus')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data mata pelajaran', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namamapel').type(this.data.mapel01)

    cy.get("#i_nilaiminlulus").type(this.data.lulus01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data mata pelajaran', function () {
    cy.get('td').contains(this.data.mapel01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_namamapel').clear().type(this.data.mapel02)

    cy.get("#u_nilaiminlulus").clear().type(this.data.lulus02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data mata pelajaran', function () {
    cy.get('td').contains(this.data.mapel02)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  //negatif test
  it('Admin menambahkan data mata pelajaran menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namamapel').type(this.data.mapel01)

    cy.get("#i_nilaiminlulus").type(this.data.lulusAngka)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

});
