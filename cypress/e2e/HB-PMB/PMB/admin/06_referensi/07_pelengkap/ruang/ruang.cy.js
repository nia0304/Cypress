/// <reference types="cypress"/>

const judulHalaman = "Ruang";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Ruang()

    cy.fixture('HB-PMB/06-referensi/07-pelengkap/ruang').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter ruang', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaRuang02)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.namaRuang02)

  });

  it('Memastikan nama tabel ruang ada 4', () => {
    cy.get('.content-header > h1').should('contain', 'Ruang')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama')
      .should('contain', 'Daya Tampung')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data ruang', function () {
    cy.get('.col-md-4 > .btn-success').click()

    cy.get('#i_koderuang').type(this.data.kode01)
    cy.get('#i_namaruang').type(this.data.namaRuang01)
    cy.get('#i_dayatampung').type(this.data.dataTampung01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data ruang', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaRuang01)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_koderuang').clear().type(this.data.kode02)
    cy.get('#u_namaruang').clear().type(this.data.namaRuang02)
    cy.get('#u_dayatampung').clear().type(this.data.dataTampung02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data ruang', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaRuang02)

    // // klik cari 
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
  it('Admin menambahkan data ruang tanpa melengkapi data', function () {
    cy.get('.col-md-4 > .btn-success').click()

    // cy.get('#i_koderuang').type(this.data.kode01)
    cy.get('#i_namaruang').type(this.data.namaRuang01)
    cy.get('#i_dayatampung').type(this.data.dataTampung01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data ruang dengan daya tampung huruf', function () {
    cy.get('.col-md-4 > .btn-success').click()

    // cy.get('#i_koderuang').type(this.data.kode01)
    cy.get('#i_namaruang').type(this.data.namaRuang01)
    cy.get('#i_dayatampung').type(this.data.dataTampungHuruf)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  // generate ruang
  it('Admin generate data ruang', function () {

    // klik button generate
    cy.get('.col-md-4 > .btn-warning').click()

    cy.get('#modal-generate > .modal-dialog > .modal-content > .modal-header > .modal-title')
      .should('contain', 'Generate Jadwal')

    cy.get('#koderuang').type(this.data.prefixKodeRuang)
    cy.get('#jmlruang').type(this.data.jumlahRuang)
    cy.get('#jmlkarakter').type(this.data.jumlahKarakter)
    cy.get('#dayatampung').type(this.data.dayaTampung)

    cy.get('.modal-footer > .btn').click()

    // assert modal konfirmasi
    cy.get('.bootbox-body').should('contain', this.data.modalGenerate)
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.btn-default').click()

    // assert berhasil generate
    cy.get('.alert').should('contain', this.data.alertBerhasilGenerate)

  })


  it('Admin menghapus data ruang', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type('online')

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains('online')
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertGagalHapus)

  })

});
