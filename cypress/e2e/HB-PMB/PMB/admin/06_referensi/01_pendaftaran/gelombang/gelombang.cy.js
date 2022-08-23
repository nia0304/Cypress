/// <reference types="cypress"/>

const judulHalaman = "Gelombang";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Gelombang()

    cy.fixture('HB-PMB/06-referensi/01-pendaftaran/gelombang').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain', judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel gelombang ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Gelombang')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama Gelombang')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data gelombang menggunakan kode angka', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idgelombang').type(this.data.kode01)
    cy.get('#i_namagelombang').type(this.data.gelombang01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  });

  it('Admin merubah data gelombang', function () {
    cy.get('td').contains(this.data.kode01)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_idgelombang')
      .clear()
      .type(this.data.kode02)
    cy.get('#u_namagelombang')
      .clear()
      .type(this.data.gelombang02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertUbah)
    
  });

  it('Admin Menghapus data gelombang', function () {
    cy.get('td').contains(this.data.kode02)
      .next()
      .next()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()

      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)
    
  });

  // negatif case 
  it('Admin menambahkan data gelombang menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idgelombang').type(this.data.kodeHuruf)
    cy.get('#i_namagelombang').type(this.data.gelombang01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert modal peringatan
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)

    // klik ok di modal peringatan
    cy.get('.modal-footer > .btn').click()
  });

  it('Admin menambahkan data gelombang dengan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idgelombang').type(this.data.kode02)
    cy.get('#i_namagelombang').type(this.data.gelombang01)
      .parent()
      .next()
      .find('.btn-success')
      .click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertDuplikasi)
  });


});
