/// <reference types="cypress"/>

const judulHalaman = "Daftar Broadcast";


describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Broadcast()

    cy.fixture('HB-PMB/06-referensi/02-berita/broadcast').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel broadcast ada 4', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Broadcast')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Judul Broadcast')
      .and('contain', 'Total Penerima')
      .and('contain', 'Status')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data broadcast', function () {
    cy.get('#wrap-button > .btn-success').click()

    cy.get('#judul').type(this.data.judul01)
    cy.get('#isi').type(this.data.isi01)

    cy.get('#block-isemail > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
    cy.get('#block-iswa > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data broadcast', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    cy.get('.btn-warning').click()

    cy.get('#judul').clear().type(this.data.judul02)
    cy.get('#isi').clear().type(this.data.isi02)

    cy.get('#block-isemail > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
    cy.get('#block-iswa > .col-md-9 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()

    cy.get('.btn-success').click()

    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()

    // klik batalkan
    // cy.get('.btn-default').click()

    // // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data broadcast', function () {
    cy.get('td').contains(this.data.judul02)
      .parent()
      .find('.btn-danger').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  it('Admin memilih penerima broadcast email', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    // cy.get('.btn-warning').click()

    cy.get('#jenispenerima').select(this.data.jenisPenerima01)

    // cy.get('.select2-selection').click()

    cy.log(this.data.filterPeriode, 'hei')
    cy.get('#select2-idperiodedaftar-container').click({ force: true })
    cy.get('.select2-search__field').type(this.data.filterPeriode)
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.periodeDaftar) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('#status').select(this.data.statusPendaftar)

    cy.wait(2000)

    cy.get('#penerimalist_35362_1').click({ force: true })

    cy.wait(2000)

    cy.get('#form-search > div:nth-child(5) > button').click()


    // assert berhasil 
    cy.get('.alert').should('contain', this.data.alertPenerimaEmail)


  })

  it('Admin memilih kirim broadcast email', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    // cy.get('.btn-warning').click()

    cy.get('#jenispenerima').select(this.data.jenisPenerima01)

    // cy.get('.select2-selection').click()

    cy.log(this.data.filterPeriode, 'hei')
    cy.get('#select2-idperiodedaftar-container').click({ force: true })
    cy.get('.select2-search__field').type(this.data.filterPeriode)
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.periodeDaftar) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('#status').select(this.data.statusPendaftar)

    cy.wait(2000)

    cy.get('#penerimalist_35362_1').click({ force: true })

    cy.wait(2000)

    cy.get('#form-search > div:nth-child(5) > button').click()

    cy.wait(2000)

    cy.get('#form_data > div:nth-child(6) > button.btn.btn-sm.btn-success').click()

    // modal konfirmasi
    cy.get('.bootbox-body').should('contain', this.data.modalKirimEmail)

    cy.get('.modal-footer > .btn-primary').click()

    // klik cancel
    // cy.get('.btn-default').click()

    // assert berhasil
    cy.get('.alert').should('contain', this.data.alertKirimBroadcast)


  })

  it('Admin memilih melihat penerima broadcast email', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    cy.get('#form_data > div:nth-child(6) > button.btn.btn-sm.btn-info').click({ force: true })
    // assert halaman
    cy.get('small').should('contain', 'List Penerima Broadcast')


  })

  it('Admin menghapus penerima broadcast email', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    cy.get('#form_data > div:nth-child(6) > button.btn.btn-sm.btn-info').click({ force: true })
    // assert halaman
    cy.get('small').should('contain', 'List Penerima Broadcast')

    cy.get('td').contains(this.data.kodePenerimaEmail)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.bootbox-body').should('contain', this.data.modalHapusPenerima)

    cy.get('.modal-footer > .btn-primary').click()

    // klik cancel
    // cy.get('.btn-default').click()

    cy.get('.alert').should('contain', this.data.alertHapusPenerima)


  })



  // negatif case
  it('Admin belum memilih pendaftar yang menerima email', function () {
    cy.get('td').contains(this.data.judul01)
      .parent()
      .find('.btn-info').click()

    // cy.get('.btn-warning').click()

    cy.get('#jenispenerima').select(this.data.jenisPenerima01)

    // cy.get('.select2-selection').click()

    cy.log(this.data.filterPeriode, 'hei')
    cy.get('#select2-idperiodedaftar-container').click({ force: true })
    cy.get('.select2-search__field').type(this.data.filterPeriode)
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.periodeDaftar) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('#status').select(this.data.statusPendaftar)

    cy.wait(2000)

    // cy.get('#penerimalist_35362_1').click({ force: true })

    cy.wait(2000)

    cy.get('#form-search > div:nth-child(5) > button').click()

    // assert
    cy.get('.alert').should('contain', this.data.alertGagalPenerima)


  })



});
