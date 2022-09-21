/// <reference types="cypress"/>

const judulHalaman="Perguruan Tinggi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Perguruan_Tinggi()

      cy.fixture('HB-PMB/06-referensi/04-pendidikan/perguruan_tinggi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  
  //positif test
  it('Admin pilih filter perguruan tinggi', function ()  {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterUniv)

    // klik cari 
    cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-success').click()

    // klik reset 
    // cy.get('button.btn.btn-sm.btn-primary').click()

    cy.get('td').contains(this.data.filterUniv)
  });

  it('Memastikan nama tabel perguruan tinggi ada 6', () => {
    cy.get('.content-header > h1').should('contain', 'Perguruan Tinggi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama Universitas')
      .should('contain', 'Alamat')
      .should('contain', 'No Telp.')
      .should('contain', 'PMB')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data perguruan tinggi', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_iduniversitas').type(this.data.kode01)
    cy.get('#i_namauniversitas').type(this.data.namaUniv01)
    cy.get('#i_alamat').type(this.data.alamatUniv01)
  
    cy.get('#i_telepon').type(this.data.noTelp01)
    .parent()
    .next()
    .next()
    .find('button.btn.btn-success.btn-xs.btn-flat')
    .click()
    // cy.get('button.btn.btn-success.btn-xs.btn-flat')

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data perguruan tinggi', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)

    // klik cari 
    cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-success').click()

    cy.get('td').contains(this.data.namaUniv01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_iduniversitas').clear().type(this.data.kode02)
    cy.get('#u_namauniversitas').clear().type(this.data.namaUniv02)
    cy.get('#u_alamat').clear().type(this.data.alamatUniv02)
    cy.get('#form_list > div > table > tbody > tr:nth-child(5) > td:nth-child(5) > label > div > ins')
    .click()

    cy.get('#u_telepon').clear().type(this.data.noTelp02)
    .parent()
    .next()
    .next()
    .find('button.btn.btn-success.btn-xs.btn-flat')
    .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data perguruan tinggi', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode02)

    // klik cari 
    cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-success').click()

    cy.get('td').contains(this.data.namaUniv02)
      .parent()
      .find('.btn-danger ').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin mengubah data perguruan tinggi dengan kode huruf', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)

    // klik cari 
    cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-success').click()

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#i_iduniversitas').type(this.data.kodeHuruf)
    cy.get('#i_namauniversitas').type(this.data.namaUniv02)
    cy.get('#i_alamat').type(this.data.alamatUniv02)
    cy.get('#insert-row-ms > td:nth-child(5) > label > div > ins').click()

    cy.get('#i_telepon').clear().type(this.data.noTelp01)
    .parent()
    .next()
    .next()
    .find('button.btn.btn-success.btn-xs.btn-flat')
    .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertGagalSimpan)

  })

  it('Admin menambahkan data perguruan tinggi dengan kode yang sama', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#i_iduniversitas').type(this.data.kode01)
    cy.get('#i_namauniversitas').type(this.data.namaUniv01)
    cy.get('#i_alamat').type(this.data.alamatUniv01)
  
    cy.get('#i_telepon').type(this.data.noTelp01)
    .parent()
    .next()
    .next()
    .find('button.btn.btn-success.btn-xs.btn-flat')
    .click()
    // cy.get('button.btn.btn-success.btn-xs.btn-flat')

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

});
