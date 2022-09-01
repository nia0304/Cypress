/// <reference types="cypress"/>

const judulHalaman = "Daftar Pengumuman & Informasi";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Pengumuman()

    cy.fixture('HB-PMB/06-referensi/02-berita/pengumuman').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel pengumuman ada 8', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Pengumuman & Informasi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Judul')
      .and('contain', 'Jenis')
      .and('contain', 'Tanggal')
      .and('contain', 'Diposting')
      .and('contain', 'Tampil di Beranda')
      .and('contain', 'Tampil di Pendaftaran')
      .and('contain', 'Aktif')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data pengumuman', function () {
    cy.get('#wrap-button > .btn-success').click()

    // cy.get('#block-imgpengumuman > .col-md-9 > input').click()
    // const file = "File Upload/lorem-ipsum.jpg";
    // cy.get('#block-imgpengumuman > div > input[type=file]').attachFile(file)

    cy.get('#judulpengumuman').type(this.data.judul01)

    cy.get('#jenis').select(this.data.jenis01)

    const iframe1 = cy
      .get('#informasi_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)

    iframe1.clear().type(this.data.informasi01)

    cy.get('#block-ishighlight > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-ispendaftaran > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-isaktif > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#div_filepengumuman > .form-control').click()
    const file01 = "File Upload/lorem-ipsum.pdf";
    cy.get('#div_filepengumuman > input[type=file]').attachFile(file01)

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data pengumuman', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    cy.get('.btn-warning').click()

    // cy.get('#block-imgpengumuman > .col-md-9 > input').click()
    // const file = "File Upload/lorem-ipsum.jpg";
    // cy.get('#block-imgpengumuman > div > input[type=file]').attachFile(file)

    cy.get('#judulpengumuman').clear().type(this.data.judul02)

    cy.get('#jenis').select(this.data.jenis02)

    const iframe1 = cy
      .get('#informasi_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)

    iframe1.clear().type(this.data.informasi02)

    cy.get('#block-ishighlight > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-ispendaftaran > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-isaktif > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#div_filepengumuman > .form-control').click()
    const file01 = "File Upload/lorem-ipsum.pdf";
    cy.get('#div_filepengumuman > input[type=file]').attachFile(file01)

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data pengumuman', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-danger').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)
  })


  // negatif case
  it('Admin menambahkan data pengumuman dengan gambar upload file selain jpg', function () {
    cy.get('#wrap-button > .btn-success').click()

    cy.get('#block-imgpengumuman > .col-md-9 > input').click()
    const file = "File Upload/lorem-ipsum.pdf";
    cy.get('#block-imgpengumuman > div > input[type=file]').attachFile(file)

    cy.get('.bootbox-body').should('contain', this.data.modalPeringatanFile)
    cy.get('.modal-footer > .btn').click()
  })

  it('Penambahan data Pengumuman & Informasi gagal', function () {
    cy.get('#wrap-button > .btn-success').click()
    // .invoke('removeAttr', 'target').click()

    // cy.get('#block-imgpengumuman > .col-md-9 > input').click()
    // const file = "File Upload/lorem-ipsum.pdf";
    // cy.get('#block-imgpengumuman > div > input[type=file]').attachFile(file)

    cy.get('#judulpengumuman').type(this.data.judul01)

    cy.get('#jenis').select(this.data.jenis01)

    cy.get('#informasi_ifr').type(this.data.informasi)

    cy.get('#block-ishighlight > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-ispendaftaran > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-isaktif > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#div_filepengumuman > .form-control').click()
    const file01 = "File Upload/lorem-ipsum.pdf";
    cy.get('#div_filepengumuman > input[type=file]').attachFile(file01)

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertGagalSimpan)
  })

  it('Admin menambahkan data pengumuman dengan data yang sama', function () {
    cy.get('#wrap-button > .btn-success').click()

    // cy.get('#block-imgpengumuman > .col-md-9 > input').click()
    // const file = "File Upload/lorem-ipsum.jpg";
    // cy.get('#block-imgpengumuman > div > input[type=file]').attachFile(file)

    cy.get('#judulpengumuman').type(this.data.judul01)

    cy.get('#jenis').select(this.data.jenis01)

    const iframe1 = cy
      .get('#informasi_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)

    iframe1.clear().type(this.data.informasi01)

    cy.get('#block-ishighlight > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-ispendaftaran > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#block-isaktif > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('#div_filepengumuman > .form-control').click()
    const file01 = "File Upload/lorem-ipsum.pdf";
    cy.get('#div_filepengumuman > input[type=file]').attachFile(file01)

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertDuplikasi)
  })


});
