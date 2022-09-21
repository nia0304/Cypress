/// <reference types="cypress"/>

const judulHalaman = "Daftar Pertanyaan";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Pertanyaan_Kuisoner()

    cy.fixture('HB-PMB/06-referensi/07-pelengkap/pertanyaan_kuisoner').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  it('Admin mengisi filter pertanyaan kuisoner ketika data kosong', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan01)

    // // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    // // klik reset 
    // // cy.get('.input-group-btn > .btn-primary').click()

    cy.get('td').contains(this.data.dataKosong)

  });

  it('Memastikan nama tabel pertanyaan kuisoner ada 5', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Pertanyaan')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Pertanyaan')
      .should('contain', 'Jenis Pertanyaan')
      .should('contain', 'Wajib?')
      .should('contain', 'Poin')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data pertanyaan kuisoner dengan data multiple question', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#idpertanyaan').type(this.data.kodePertanyaan01)
    cy.get('#namapertanyaan').type(this.data.namaPertanyaan01)
    cy.get('#poinpertanyaan').type(this.data.poinPertanyaan01)

    cy.get(':nth-child(2) > .iradio_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    // klik yakin
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.modal-default').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin menambahkan data jawaban dari pertanyaan multiple question', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.namaPertanyaan01)
      .parent()
      .find('.btn-info').click()

    // menambahkan menu jawaban 
    cy.get('#sidebar-menu-list > :nth-child(2) > a').click()

    cy.get('#i_idjawaban').type(this.data.kodeJawaban01)
    cy.get('#i_namajawaban').type(this.data.namaJawaban01)
    cy.get('#i_poinjawaban').type(this.data.poinJawaban01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    cy.get('.alert').should('contain', this.data.alertSimpanJawaban)


  })

  it('Admin merubah data jawaban dari pertanyaan multiple question', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.namaPertanyaan01)
      .parent()
      .find('.btn-info').click()

    // klik menu jawaban 
    cy.get('#sidebar-menu-list > :nth-child(2) > a').click()

    cy.get('td').contains(this.data.kodeJawaban01)
      .parent()
      .find('.btn-primary').click()


    cy.get('#u_idjawaban').clear().type(this.data.kodeJawaban02)
    cy.get('#u_namajawaban').clear().type(this.data.namaJawaban02)
    cy.get('#u_poinjawaban').clear().type(this.data.poinJawaban02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    cy.get('.alert').should('contain', this.data.alertUbahJawaban)

  })

  it('Admin menghapus data jawaban dari pertanyaan multiple question', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.namaPertanyaan01)
      .parent()
      .find('.btn-info').click()

    // klik menu jawaban 
    cy.get('#sidebar-menu-list > :nth-child(2) > a').click()

    cy.get('td').contains(this.data.kodeJawaban02)
      .parent()
      .find('.btn-danger').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapusJawaban)

  })

  it('Admin mengubah data pertanyaan kuisoner', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan01)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.namaPertanyaan01)
      .parent()
      .find('.btn-info').click()

    // klik button edit 
    cy.get('.col-md-7 > .btn-warning').click()

    cy.get('#idpertanyaan').clear().type(this.data.kodePertanyaan02)
    cy.get('#namapertanyaan').clear().type(this.data.namaPertanyaan02)
    cy.get('#poinpertanyaan').clear().type(this.data.poinPertanyaan02)

    cy.get(':nth-child(1) > .iradio_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    // klik yakin
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.modal-default').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)


  })

  it('Admin menghapus data pertanyaan kuisoner', function () {
    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.namaPertanyaan02)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.namaPertanyaan02)
      .parent()
      .find('.btn-danger').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)


  })

  // negatif case 
  it('Admin menambahkan data pertanyaan kuisoner dengan data yang sama', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#idpertanyaan').type(this.data.kodePertanyaan01)
    cy.get('#namapertanyaan').type(this.data.namaPertanyaan01)
    cy.get('#poinpertanyaan').type(this.data.poinPertanyaan01)

    cy.get(':nth-child(2) > .iradio_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    // klik yakin
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.modal-default').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

  it('Admin menambahkan data pertanyaan kuisoner tanpa melengkapi data', function () {
    cy.get('.col-md-6 > .btn-success').click()

    cy.get('#poinpertanyaan').type(this.data.poinPertanyaan01)

    cy.get(':nth-child(2) > .iradio_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    // klik yakin
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.modal-default').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menghapus data pertanyaan kuisoner yang sudah tereferensi', function () {

    cy.get('#cfilter').select(this.data.pilihFilter)

    // filter by nama
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.dataLama)

    // klik cari 
    cy.get('.input-group-btn > .btn-success').click()

    cy.get('td').contains(this.data.dataLama)
      .parent()
      .find('.btn-danger').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertGagalHapus)

  })



});
