/// <reference types="cypress"/>

const judulHalaman="Jalur Pendaftaran";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Jalur_Pendaftaran()

      cy.fixture('HB-PMB/06-referensi/01-pendaftaran/jalur_pendaftaran').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel jalur pendaftaran ada 5', () => {
    cy.get('.content-header > h1').should('contain', 'Jalur Pendaftaran')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama Jalur Penerimaan')
      .and('contain', 'Jenis Pendaftaran')
      .and('contain', 'Keterangan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data jalur pendaftaran menggunakan kode angka', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjalurpendaftaran').type(this.data.kode01)
    cy.get('#i_namajalurpendaftaran').type(this.data.jalurPendaftaran01)
      cy.get("#i_istransfer").select(this.data.jenisPendaftaran01)
      // .should("have.value", "0");
    cy.get("#i_keterangan").type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  });

  it('Admin Mengubah data jalur pendaftaran', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_idjalurpendaftaran').clear().type(this.data.kode02)
    cy.get('#u_namajalurpendaftaran').clear().type(this.data.jalurPendaftaran02)
      cy.get("#u_istransfer").select(this.data.jenisPendaftaran02)
      // .should("have.value", "0");
    cy.get("#u_keterangan").clear().type(this.data.keterangan02)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)
  });

  it('Admin Menghapus data jalur pendaftaran', function () {
    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()

      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)
  });

  // negatif case 
  it('Admin menambahkan data jalur pendaftaran menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjalurpendaftaran').type(this.data.kodeHuruf)
    cy.get('#i_namajalurpendaftaran').type(this.data.jalurPendaftaran01)
      cy.get("#i_istransfer").select(this.data.jenisPendaftaran01)
      // .should("have.value", "0");
    cy.get("#i_keterangan").type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert modal peringatan
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)

    // klik ok di modal peringatan
    cy.get('.modal-footer > .btn').click()
  });

  it('Admin menambahkan data jalur pendaftaran menggunakan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjalurpendaftaran').type(this.data.kode01)
    cy.get('#i_namajalurpendaftaran').type(this.data.jalurPendaftaran01)
      cy.get("#i_istransfer").select(this.data.jenisPendaftaran01)
      // .should("have.value", "0");
    cy.get("#i_keterangan").type(this.data.keterangan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert modal duplikasi
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  });

});
