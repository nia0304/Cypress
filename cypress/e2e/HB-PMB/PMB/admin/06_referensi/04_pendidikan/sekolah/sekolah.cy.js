/// <reference types="cypress"/>

const judulHalaman = "Daftar Sekolah";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Sekolah()

    cy.fixture('HB-PMB/06-referensi/04-pendidikan/sekolah').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin pilih filter', function () {
    cy.get('#propinsi').select(this.data.filterProvinsi).wait(0)
    cy.get('#propinsi option:selected').invoke('text').then((filterProvinsi => {
      cy.wrap(filterProvinsi).should('contain', filterProvinsi)
    }))

    cy.get('#kota').select(this.data.filterKota).wait(0)
    cy.get('#kota option:selected').invoke('text').then((filterKota => {
      cy.wrap(filterKota).should('contain', filterKota)
    }))

    // cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.filterSekolah)
    // // klik cari 
    // cy.get('.input-group-btn > .btn-success').click()
    // // klik reset
    // // cy.get('.btn-primary').click()

    // // assert data table
    // cy.get('td').contains(this.data.filterSekolah)


  });

  it('Memastikan nama tabel sekolah ada 6', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Sekolah')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'NPSN')
      .should('contain', 'Nama Sekolah')
      .should('contain', 'Akreditasi')
      .should('contain', 'Kota / Kabupaten')
      .should('contain', 'Provinsi')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data sekolah', function () {
    cy.get('#wrap-button > .btn-success').click()

    // klik hapus
    // cy.get('.btn-danger').click()

    cy.get('#npsn').type(this.data.npsn01)
    cy.get('#idpropinsi').select(this.data.filterProvinsi)
    cy.get('#idkota').select(this.data.filterKota)
    cy.get('#idjenissekolah').select(this.data.jenisSekolah01)
    cy.get('#namasekolah').type(this.data.namaSekolah01)
    cy.get('#alamat').type(this.data.alamatSekolah01)
    cy.get('#rw').type(this.data.rw01)
    cy.get('#rt').type(this.data.rt01)
    cy.get('#kodepos').type(this.data.kodePos01)
    cy.get('#telepon').type(this.data.telepon01)
    cy.get('#email').type(this.data.email01)
    cy.get('#website').type(this.data.website01)
    cy.get('#akreditasi').select(this.data.akreditasi01)
    cy.get('button.btn.btn-success.btn-sm').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)

    cy.get('.modal-footer > .btn-primary').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin menambahkan data sekolah', function () {
    cy.get('#wrap-button > .btn-success').click()

    // klik hapus
    // cy.get('.btn-danger').click()

    cy.get('#npsn').type(this.data.npsn01)
    cy.get('#idpropinsi').select(this.data.filterProvinsi)
    cy.get('#idkota').select(this.data.filterKota)
    cy.get('#idjenissekolah').select(this.data.jenisSekolah01)
    cy.get('#namasekolah').type(this.data.namaSekolah01)
    cy.get('#alamat').type(this.data.alamatSekolah01)
    cy.get('#rw').type(this.data.rw01)
    cy.get('#rt').type(this.data.rt01)
    cy.get('#kodepos').type(this.data.kodePos01)
    cy.get('#telepon').type(this.data.telepon01)
    cy.get('#email').type(this.data.email01)
    cy.get('#website').type(this.data.website01)
    cy.get('#akreditasi').select(this.data.akreditasi01)
    cy.get('button.btn.btn-success.btn-sm').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)

    cy.get('.modal-footer > .btn-primary').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data sekolah', function () {
    cy.get('td').contains(this.data.npsn02)
      .parent()
      .find('.btn-info').click()

    // klik edit
    cy.get('.btn-warning').click()

    cy.get('#npsn').clear().type(this.data.npsn02)
    cy.get('#idpropinsi').select(this.data.filterProvinsi)
    cy.get('#idkota').select(this.data.filterKota)
    cy.get('#idjenissekolah').select(this.data.jenisSekolah02)
    cy.get('#namasekolah').clear().type(this.data.namaSekolah02)
    cy.get('#alamat').clear().type(this.data.alamatSekolah02)
    cy.get('#rw').clear().type(this.data.rw02)
    cy.get('#rt').clear().type(this.data.rt02)
    cy.get('#kodepos').clear().type(this.data.kodePos02)
    cy.get('#telepon').clear().type(this.data.telepon02)
    cy.get('#email').clear().type(this.data.email02)
    cy.get('#website').clear().type(this.data.website02)
    cy.get('#akreditasi').clear().select(this.data.akreditasi02)
    cy.get('button.btn.btn-success.btn-sm').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)

    // cy.get('.modal-footer > .btn-primary').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin menghapus data sekolah di kolom aksi', function () {
    cy.get('td').contains(this.data.npsn02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    // cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  it('Admin menghapus data sekolah di aksi all', function () {
    cy.get('td').contains(this.data.npsn02)
      .prev()
      .find('.icheckbox_minimal > .iCheck-helper').click()

    cy.get('#wrap-button > .btn-danger').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin menghapus data sekolah di aksi all ketika tidak ada data yang di pilih', function () {
    cy.get('td').contains(this.data.npsn02)
      .parent()
      .find('.btn-danger').click()

    cy.get('.bootbox-body').should('contain', this.data.modalHapusAll)
    // klik ok
    // cy.get('.modal-footer > .btn').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  it('Admin menambahkan data sekolah yang sama', function () {
    cy.get('#wrap-button > .btn-success').click()

    // klik hapus
    // cy.get('.btn-danger').click()

    cy.get('#npsn').type(this.data.npsn01)
    cy.get('#idpropinsi').select(this.data.filterProvinsi)
    cy.get('#idkota').select(this.data.filterKota)
    cy.get('#idjenissekolah').select(this.data.jenisSekolah01)
    cy.get('#namasekolah').type(this.data.namaSekolah01)
    cy.get('#alamat').type(this.data.alamatSekolah01)
    cy.get('#rw').type(this.data.rw01)
    cy.get('#rt').type(this.data.rt01)
    cy.get('#kodepos').type(this.data.kodePos01)
    cy.get('#telepon').type(this.data.telepon01)
    cy.get('#email').type(this.data.email01)
    cy.get('#website').type(this.data.website01)
    cy.get('#akreditasi').select(this.data.akreditasi01)
    cy.get('button.btn.btn-success.btn-sm').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)

    cy.get('.modal-footer > .btn-primary').click()

    // assert modal duplikasi
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })

});
