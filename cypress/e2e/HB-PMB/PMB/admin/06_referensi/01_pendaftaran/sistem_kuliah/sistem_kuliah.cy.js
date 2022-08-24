/// <reference types="cypress"/>

const judulHalaman = "Sistem Kuliah";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Sistem_Kuliah()

    cy.fixture('HB-PMB/06-referensi/01-pendaftaran/sistem_kuliah').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel sistem kuliah ada 4', () => {
    cy.get('.content-header > h1').should('contain', 'Sistem Kuliah')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama Sistem Kuliah')
      .and('contain', 'Keterangan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data sistem kuliah menggunakan kode angka', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idsistemkuliah').type(this.data.kode01)

    cy.get("#i_namasistemkuliah").type(this.data.sistemKuliah01)

    cy.get('#i_keterangan').type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin Mengubah data sistem kuliah', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_idsistemkuliah').clear().type(this.data.kode02)

    cy.get("#u_namasistemkuliah").clear().type(this.data.sistemKuliah02)

    cy.get('#u_keterangan').clear().type(this.data.keterangan02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin Menghapus data sistem kuliah', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negatif case 
  it('Admin menambahkan data sistem kuliah menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idsistemkuliah').type(this.data.kodeHuruf)

    cy.get("#i_namasistemkuliah").type(this.data.sistemKuliah01)

    cy.get('#i_keterangan').type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert modal peringatan
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)

    // klik ok di modal peringatan
    cy.get('.modal-footer > .btn').click()
  })

  it('Admin menambahkan data sistem kuliah menggunakan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idsistemkuliah').type(this.data.kode01)

    cy.get("#i_namasistemkuliah").type(this.data.sistemKuliah01)

    cy.get('#i_keterangan').type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert modal duplikasi
    cy.get('.alert').should('contain', this.data.alertDuplikasi)
  })

});
