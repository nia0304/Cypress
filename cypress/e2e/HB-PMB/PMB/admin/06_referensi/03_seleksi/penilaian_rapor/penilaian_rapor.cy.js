/// <reference types="cypress"/>

const judulHalaman="Penilaian Rapor";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_penilaian_rapor()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/penilaian_rapor').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel penilaian rapor ada 6', () => {
    cy.get('.content-header > h1').should('contain', 'Penilaian Rapor')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama Penilaian')
      .and('contain', 'Penilaian')
      .and('contain', 'Mata Pelajaran')
      .and('contain', 'Keterangan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data penilaian rapor', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_kodepenilaian').type(this.data.kode01)

    cy.get("#i_namapenilaian").type(this.data.namaNilai01)

    cy.get('#i_jenispenilaian').select(this.data.penilaian01)

    cy.get('#i_idmapel').select(this.data.mapel01)

    cy.get("#i_keteranganpenilaian").type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data penilaian rapor', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_kodepenilaian').clear().type(this.data.kode01)

    cy.get("#u_namapenilaian").clear().type(this.data.namaNilai02)

    cy.get('#u_jenispenilaian').clear().select(this.data.penilaian02)

    cy.get('#u_idmapel').select(this.data.mapel02)

    cy.get("#u_keteranganpenilaian").clear().type(this.data.keterangan02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data penilaian rapor', function () {
    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negatif case
  it.only('Admin menambahkan data mata pelajaran menggunakan kode sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_kodepenilaian').type(this.data.kode01)

    cy.get("#i_namapenilaian").type(this.data.namaNilai01)

    cy.get('#i_jenispenilaian').select(this.data.penilaian01)

    cy.get('#i_idmapel').select(this.data.mapel01)

    cy.get("#i_keteranganpenilaian").type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertDuplikasi)
  })

});
