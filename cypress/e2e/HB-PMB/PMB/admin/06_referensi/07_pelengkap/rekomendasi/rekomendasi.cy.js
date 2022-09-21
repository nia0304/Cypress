/// <reference types="cypress"/>

const judulHalaman="Pemberi Rekomendasi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Rekomendasi()

      cy.fixture('HB-PMB/06-referensi/07-pelengkap/rekomendasi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  it('Admin mengisi filter rekomendasi ketika data kosong', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.nama01)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.dataKosong)

  });

  it('Memastikan nama tabel rekomendasi ada 5', () => {
    cy.get('.content-header > h1').should('contain', 'Pemberi Rekomendasi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama')
      .should('contain', 'No Hp')
      .should('contain', 'Sekolah')
      .should('contain', 'Keterangan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data rekomendasi', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_namaperekomendasi').type(this.data.nama01)
    cy.get('#i_nomerhp').type(this.data.noHp01)
    cy.get('#i_npsn_label').type(this.data.sekolah01)
    cy.get('#i_ket').type(this.data.keterangan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data rekomendasi', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.nama01)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.nama01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_namaperekomendasi').clear().type(this.data.nama02)
    cy.get('#u_nomerhp').clear().type(this.data.noHp02)
    cy.get('#u_npsn_label').clear().type(this.data.sekolah02)
    cy.get('#u_ket').clear().type(this.data.keterangan02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data rekomendasi', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.nama02)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.nama02)
      .parent()
      .find('.btn-danger').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)

  })

  //negatif case
  it('Admin menambahkan data rekomendasi tanpa melengkapi data', function () {
    cy.get('.col-md-6 > .btn-success').click()

    // cy.get('#i_namaperekomendasi').type(this.data.nama01)
    cy.get('#i_nomerhp').type(this.data.noHp01)
    cy.get('#i_npsn_label').type(this.data.sekolah01)
    cy.get('#i_ket').type(this.data.keterangan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  //negatif case
  it('Admin menambahkan data rekomendasi dengan data yang sama', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_namaperekomendasi').type(this.data.nama01)
    cy.get('#i_nomerhp').type(this.data.noHp01)
    cy.get('#i_npsn_label').type(this.data.sekolah01)
    cy.get('#i_ket').type(this.data.keterangan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

});
